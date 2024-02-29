import {
    time,
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";


import { expect } from "chai";
import hre from "hardhat";

import { toBytes, bytesToHex } from 'viem'
import { DeployContractConfig } from '@nomicfoundation/hardhat-viem/types'



describe("Ico", function () {
    async function deployContracts(icoPrice: bigint) {
        const [contractOwner, userLambda, userLambda2] = await hre.viem.getWalletClients();

        const publicClient = await hre.viem.getPublicClient();
        const curr_block = await publicClient.getBlock();


        // deploy token for airdrop
        const tokenContract = await hre.viem.deployContract("Token", ["MyToken", "TOK", BigInt("1000000000")]);
        const icoContract = await hre.viem.deployContract("IcoController", [
            tokenContract.address,
            icoPrice,
            curr_block.timestamp + BigInt(500),
            curr_block.timestamp + BigInt(1000)
        ], {
            walletClient: contractOwner
        });
        

        return {
            tokenContract,
            icoContract,
            contractOwner,
            userLambda,
            userLambda2,
            publicClient
        }
    }

    async function advanceTime(nbBlocks: number) {
        /*
        // samples
        // mine 256 blocks
        await hre.network.provider.send("hardhat_mine", ["0x100"]);

        // mine 1000 blocks with an interval of 1 minute
        await hre.network.provider.send("hardhat_mine", ["0x3e8", "0x3c"]);
        */

        await hre.network.provider.send("evm_increaseTime", [nbBlocks]);
        await hre.network.provider.send("evm_mine");
    }

    describe("Deployment", function () {
        it("It deploys successfully", async function() {
            const { tokenContract, icoContract } = await deployContracts(BigInt(1000));
        })      
    })

    describe("Main Logic", function() {
        it("Create ico, send tokens, check overview", async function() {
            const { tokenContract, icoContract, contractOwner, userLambda } = await deployContracts(BigInt(1000));

            await tokenContract.write.transfer(
                [icoContract.address, BigInt(5000)]
            );

            let [status, token_address, start_time, end_time, price, tokens_remaining] = await icoContract.read.getOverview();
            
            expect(status).to.be.eq(0);
            expect(token_address.toLowerCase()).to.be.eq(tokenContract.address.toLowerCase());
            expect(tokens_remaining).to.be.eq(BigInt(5000));
            expect(price).to.be.eq(BigInt(1000));
        })

        it("Buy tokens", async function() {
            const { tokenContract, icoContract, contractOwner, userLambda, userLambda2 } = await deployContracts(BigInt(1000));

            await tokenContract.write.transfer(
                [icoContract.address, BigInt(5000)]
            );

            // ICO not started yet 
            await expect(icoContract.write.buy(
                {
                    account: userLambda.account,
                    value: BigInt(1000)
                }
            )).to.be.rejectedWith("IcoNotStarted");

            // advance time 
            await advanceTime(500);

            // check how much our buy order would be in tokens 
            const nb_tokens = await icoContract.read.getNumberTokensFromValue([BigInt(1000000)]);
            //console.log(`nb_tokens: ${nb_tokens}`);
            
            // now buy should go through
            await icoContract.write.buy(
                {
                    account: userLambda.account,
                    value: BigInt(1000000)
                }
            );

            expect(await tokenContract.read.balanceOf([userLambda.account.address])).to.be.eq(nb_tokens);

            // try with not enough value, should fail if amount == 0
            await expect(icoContract.write.buy(
                {
                    account: userLambda2.account,
                    value: BigInt(100)
                }
            )).to.be.rejectedWith("CannotBuyZeroTokens");
        })


        it("Fail if not enough tokens in contract for buy size", async function() {
            const { tokenContract, icoContract, contractOwner, userLambda, userLambda2 } = await deployContracts(BigInt(1000));

            await tokenContract.write.transfer(
                [icoContract.address, BigInt(1)]
            );

            // advance time to start ICO
            await advanceTime(500);

            // now try to buy, order should fail
            await expect(icoContract.write.buy(
                {
                    account: userLambda.account,
                    value: BigInt(1000000)
                }
            )).to.be.rejectedWith("NotEnoughTokensRemainingToFillOrder");
        })

        it("Fail if ICO is closed", async function() {
            const { tokenContract, icoContract, contractOwner, userLambda, userLambda2 } = await deployContracts(BigInt(1000));

            await tokenContract.write.transfer(
                [icoContract.address, BigInt(1)]
            );

            // advance time to start ICO
            await advanceTime(5000);

            // now try to buy, order should fail
            await expect(icoContract.write.buy(
                {
                    account: userLambda.account,
                    value: BigInt(1000000)
                }
            )).to.be.rejectedWith("IcoClosed");
        })


        it("Admin withdraws funds after end ICO", async function() {
            const { tokenContract, icoContract, contractOwner, userLambda, userLambda2, publicClient } = await deployContracts(BigInt(1000));

            // maybe overflow? send funds from contractOwner to userLambda2
            await contractOwner.sendTransaction(
                {
                    to: userLambda2.account.address,
                    value: BigInt(50000000000)
                }
            );

            await tokenContract.write.transfer(
                [icoContract.address, BigInt(2500000)]
            );

            // advance time to start ICO
            await advanceTime(500);

            // now try to buy
            await icoContract.write.buy(
                {
                    account: userLambda.account,
                    value: BigInt(1000000)
                }
            );

            // try to withdraw, should fail since ICO not ended 
            await expect(
                icoContract.write.withdraw()
            ).to.be.rejectedWith("WithdrawalOnlyAfterEndIco")

            // advance time to end ICO
            await advanceTime(5000);

            // check balance of admin 
            const balance_admin_pre_withdraw = await publicClient.getBalance(
                {
                    address: contractOwner.account.address
                }
            );

            // check contract balance 
            const contract_balance_pre_withdraw = await publicClient.getBalance(
                {
                    address: icoContract.address
                }
            );            
            expect(contract_balance_pre_withdraw > BigInt(0));


            // withdraw 
            await icoContract.write.withdraw();


            // check end balances
            const contract_balance_post_withdraw = await publicClient.getBalance(
                {
                    address: icoContract.address
                }
            );
            
            expect(contract_balance_post_withdraw == BigInt(0));

            const balance_admin_post_withdraw = await publicClient.getBalance(
                {
                    address: contractOwner.account.address
                }
            );

            // end balance should be higher than beginning balance
            // CAREFUL: this is gas dependent
            expect(
                balance_admin_post_withdraw > balance_admin_pre_withdraw
            ).to.be.eq(true);
                  
        })
    })
});