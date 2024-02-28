// SPDX-License-Identifier: unlicensed
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC20Metadata.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20("MyToken", "TOKN") {
    constructor() {}
}