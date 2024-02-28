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

        // deploy token for airdrop
        const tokenContract = await hre.viem.deployContract("Token", []);
        const airdropContract = await hre.viem.deployContract("Airdrop", [tokenContract.address, BigInt(500)]);
        
        const publicClient = await hre.viem.getPublicClient();

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
            const { tokenContract } = await deployContracts();

        })      

    })

})