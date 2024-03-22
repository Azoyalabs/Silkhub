import { getAddress, parseGwei, Account, createWalletClient, getContractAddress, createPublicClient } from "viem";


import { http } from 'viem'
import * as viem from 'viem';

import { mnemonicToAccount } from 'viem/accounts'


import * as contractData from "../artifacts/contracts/Airdrop.sol/Airdrop.json";


//require('dotenv').config()

import * as dotenv from "dotenv";

import { botanix_testnet } from "./commons";

// changer ID dans le contrat
const URI = "https://avalanche-hackathon-web.vercel.app/api/nfts/" 


const TOKEN_ADDRESS = "0xc6306d597fe69c45f5f9f3a0855461142bc863cb"

async function main() {
    dotenv.config();

    const account = mnemonicToAccount(process.env.ADMIN_PASSPHRASE!!)

    console.log(`admin address: ${account.address}`)

    const publicClient = createPublicClient({
        chain: botanix_testnet,
        transport: http(botanix_testnet.rpcUrls.default.http[0])
    })

    const wallet = createWalletClient(
        {
            account: account,
            chain: botanix_testnet,
            transport: http(botanix_testnet.rpcUrls.default.http[0])
        }
    )

    // deploy the token receiver 
    let txHash = await wallet.deployContract(
        {
            abi: contractData.abi,
            account,
            args: [
                TOKEN_ADDRESS, BigInt(1713793250)
            ],
            bytecode: contractData.bytecode as `0x{string}`
        }
    )


    // get instantiation address 
    let receipt = await publicClient.waitForTransactionReceipt(
        {
            hash: txHash
        }
    );

    let tokenAddress = receipt!.contractAddress;
    



    // perform verification after deployment? 
    // https://blog.chain.link/how-to-verify-smart-contract-on-etherscan-hardhat/

    //const verify_command = `npx hardhat verify --network snowtrace ${summitAddress} "${account.address}" "${accessController.address}" "${receiverAddress}" "100" "${URI}"`

    return {
        tokenAddress
    }
}


main().then((res) => {
    console.log(`Instantiation succeeded. Airdrop at address: ${res.tokenAddress}`)
})
