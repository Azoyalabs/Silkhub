// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//import "./ERC1363.sol";

contract Token is ERC20, Ownable {
    constructor(string memory _tokenName, string memory _tokenTicker, uint256 _supply)
        ERC20(_tokenName, _tokenTicker)
        Ownable(msg.sender)
    {
        _mint(msg.sender, _supply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}