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

    const publicClient = createPublicClient({
        chain: botanix_testnet,
        transport: http(botanix_testnet.rpcUrls.default.http[0])
    })

    const wallet = createWalletClient(
        {
            account: adminAccount,
            chain: botanix_testnet,
            transport: http(botanix_testnet.rpcUrls.default.http[0])
        }
    );


    let res = await publicClient.readContract(
        {
            abi: contractData.abi,
            address: AIRDROP_ADDRESS,
            functionName: "getClaimableAmount",
            args: [
                adminAccount.address
            ]
        }
    )



    return res;
}

main().then((res) => {
    console.log(`Queried allowance amount. Res: ${res}`)
})