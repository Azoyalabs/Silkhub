import { getAddress, parseGwei, Account, createWalletClient, getContractAddress, createPublicClient } from "viem";


import { http } from 'viem'
import * as viem from 'viem';

import { mnemonicToAccount } from 'viem/accounts'


import * as ContractData_ERC20_Mint from "../artifacts/contracts/ERC20_Mint.sol/ERC20_Mint.json";

//require('dotenv').config()

import * as dotenv from "dotenv";

import { botanix_testnet } from "./commons";

// changer ID dans le contrat
const URI = "https://avalanche-hackathon-web.vercel.app/api/nfts/" 


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
            abi: ContractData_ERC20_Mint.abi,
            account,
            args: [
                account.address, "Test ERC 20", "TERC", "500000000"
            ],
            bytecode: ContractData_ERC20_Mint.bytecode as `0x{string}`
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
    console.log(`Instantiation succeeded. Token at address: ${res.tokenAddress}`)
})
