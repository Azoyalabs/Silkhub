use ethers::{
    contract::abigen,
    etherscan::contract,
    providers::{Http, Middleware, Provider},
    types::Address,
};
use eyre::Result;
use std::sync::Arc;

const RPC: &str = "https://node.botanixlabs.dev";

#[tokio::main]
async fn main() -> Result<()> {
    println!("Hello, world!");

    let provider = Provider::try_from(RPC).unwrap();
    let client = Arc::new(provider);
    abigen!(IERC20, "./abis/IERC20.json");
    // let block = provider.get_block();



    let block = client.get_block(0).await?.unwrap();
    println!("{:#?}", block);

    let address: Address = "0x7a3a4c42f9acd7327fd69373812dc8bc0a981318".parse()?;
    let user_address: Address = "0x84c6441055aca0895e6515dee9f3f35818048227".parse()?;
    let contract = IERC20::new(address, client);

    if let Ok(balance) = contract.balance_of(user_address).await {
        println!("current balance of {user_address:?} is {balance:?}");
    }

    /*
    match contract.total_supply().call().await {
        Ok(supply) =>  println!("contract total supply is {supply:?}"),
        Err(e) => eprint!("{}", e),

    }
     */

    Ok(())
}
