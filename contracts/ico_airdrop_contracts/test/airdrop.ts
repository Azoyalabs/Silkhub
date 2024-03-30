import {
    time,
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";


import { expect } from "chai";
import hre from "hardhat";

import { toBytes, bytesToHex } from 'viem'
import { DeployContractConfig } from '@nomicfoundation/hardhat-viem/types'



describe("Airdrop", function () {
    async function deployContracts() {
        const [contractOwner, userLambda, userLambda2] = await hre.viem.getWalletClients();

        const publicClient = await hre.viem.getPublicClient();
        const curr_block = await publicClient.getBlock();

        // deploy token for airdrop
        const tokenContract = await hre.viem.deployContract("Token", ["MyToken", "TOK", BigInt(100000)]);
        const airdropContract = await hre.viem.deployContract("Airdrop", [tokenContract.address, curr_block.timestamp + BigInt(500)]);

        return {
            tokenContract,
            airdropContract,
            contractOwner,
            userLambda,
            userLambda2,
            publicClient
        }
    }

    async function advanceTime(nbBlocks: number) {
        // samples
        // mine 256 blocks
        //await hre.network.provider.send("hardhat_mine", ["0x100"]);

        // mine 1000 blocks with an interval of 1 minute
        //await hre.network.provider.send("hardhat_mine", ["0x3e8", "0x3c"]);
        

        await hre.network.provider.send("evm_increaseTime", [nbBlocks]);
        await hre.network.provider.send("evm_mine");
    }

    describe("Deployment", function () {
        it("It deploys successfully", async function() {
            const { tokenContract, airdropContract } = await deployContracts();
        })      
    })


    describe("Main Logic", function() {
        it("Create airdrop, send tokens, check overview", async function() {
            const { tokenContract, airdropContract, contractOwner, userLambda } = await deployContracts();

            await tokenContract.write.transfer(
                [airdropContract.address, BigInt(5000)]
            );

            let [status, token_address, start_time, token_balance, amount_whitelisted, amount_claimed] = await airdropContract.read.getOverview();
            
            expect(status).to.be.eq(0);
            expect(token_address.toLowerCase()).to.be.eq(tokenContract.address.toLowerCase());
            expect(token_balance).to.be.eq(BigInt(5000));
        })

        it("Set allowance", async function() {
            const { tokenContract, airdropContract, contractOwner, userLambda } = await deployContracts();

            await tokenContract.write.transfer(
                [airdropContract.address, BigInt(5000)]
            );

            await airdropContract.write.setAllowance(
                [
                    userLambda.account.address, 
                    BigInt(5000)
                ]
            );

            expect(await airdropContract.read.getClaimableAmount([userLambda.account.address])).to.be.eq(BigInt(5000));
        })

        it("Claim tokens", async function() {
            const { tokenContract, airdropContract, contractOwner, userLambda, userLambda2 } = await deployContracts();

            expect(await tokenContract.read.balanceOf([userLambda.account.address])).to.be.eq(BigInt(0));

            await tokenContract.write.transfer(
                [airdropContract.address, BigInt(5000)]
            );

            await airdropContract.write.setAllowance(
                [
                    userLambda.account.address, 
                    BigInt(5000)
                ]
            );

            // user try to withdraw before airdrop has started 
            await expect(airdropContract.write.claim(
                {
                    account: userLambda.account
                }
            )).to.be.rejectedWith("AirdropNotStarted");


            await advanceTime(5000);

            expect(await airdropContract.read.getAirdropStatus()).to.be.eq(1);

            await airdropContract.write.claim(
                {
                    account: userLambda.account
                }
            );

            expect(await tokenContract.read.balanceOf([userLambda.account.address])).to.be.eq(BigInt(5000));

            // try to claim again 
            await expect(airdropContract.write.claim(
                {
                    account: userLambda.account
                }
            )).to.be.rejectedWith("Nothing to claim");

            // try to claim with account with 0 allowance
            await expect(airdropContract.write.claim(
                {
                    account: userLambda2.account
                }
            )).to.be.rejectedWith("Nothing to claim");
        })
    })

})
