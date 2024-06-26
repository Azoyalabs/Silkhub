// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./ERC1363.sol";

contract ERC20_MintBurn is ERC20, ERC20Burnable, Ownable, ERC1363 {
    constructor(address initialOwner, string memory _tokenName, string memory _tokenTicker, uint256 _supply)
        ERC20(_tokenName, _tokenTicker)
        Ownable(initialOwner)
    {
        _mint(msg.sender, _supply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
