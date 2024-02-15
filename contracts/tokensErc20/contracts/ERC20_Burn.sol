// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract ERC20_Burn is ERC20, ERC20Burnable {
    constructor(string memory _tokenName, string memory _tokenTicker, uint256 _supply) ERC20(_tokenName, _tokenTicker) {
        _mint(msg.sender, _supply * 10 ** decimals());
    }
}