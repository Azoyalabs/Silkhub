import { createWalletClient, createPublicClient, http } from "viem";

import { mnemonicToAccount } from 'viem/accounts'

import { botanix_testnet } from "./commons";


import * as contractData from "../artifacts/contracts/Airdrop.sol/Airdrop.json";

import * as viem from "viem";

require('dotenv').config()


const AIRDROP_ADDRESS = "0xf42bbf139299b2702cf65c02e5c7171c43cc738d"


async function main() {
    const adminAccount = mnemonicToAccount(process.env.ADMIN_PASSPHRASE!);   //process.env.ACCESS_CONTROLLER_PASSPHRASE!!)
    console.log(adminAccount.address);

    const wallet = createWalletClient(
        {
            account: adminAccount,
            chain: botanix_testnet,
            transport: http(botanix_testnet.rpcUrls.default.http[0])
        }
    );

    /*
    let airdropContract = viem.getContract({
        abi: contractData.abi,
        address: AIRDROP_ADDRESS,
        walletClient: wallet
        //publicClient: publicClient
    });
    */


    let tx = await wallet.writeContract(
        {
            abi: contractData.abi,
            address: AIRDROP_ADDRESS,
            functionName: "batchSetAllowance",
            args: [
                [adminAccount.address],
                [BigInt(500)]
            ]
        }
    )

    return tx;
}

main().then((res) => {
    console.log(`Batch set allowance succeeded. TX: ${res}`)
})