// SPDX-License-Identifier: unlicensed
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IAirdrop.sol";

enum AirdropStatus {
    NotStarted,
    Open
}


contract Airdrop is Ownable, IAirdrop {
    uint256 public allocated;
    uint256 public claimed;

    ERC20 public airdropToken;

    uint256 public startTime;

    bool private isFirstClaimHappened;

    mapping (address => uint) whitelist;

    bool public isInitialized;

    error AirdropNotStarted(uint256 startTime, uint256 currentTime);

    constructor(address _token, uint256 _startTime) Ownable(msg.sender) {
        airdropToken = ERC20(_token);
        startTime = _startTime;

        isFirstClaimHappened = true;
    }

    function setAllowance(address beneficiary, uint256 amount) external onlyOwner {
           whitelist[beneficiary] = amount;
    }

    function batchSetAllowance(address[] calldata beneficiaries, uint256[] calldata amounts) external onlyOwner {
        require(beneficiaries.length == amounts.length, "Mismatch length beneficiaries and amounts");

        for (uint i = 0; i < beneficiaries.length; i++) {
            whitelist[beneficiaries[i]] = amounts[i];
        }
    }

    function claim() external {
        if (block.timestamp < startTime) {
            revert AirdropNotStarted(startTime, block.timestamp);
        }

        uint256 amount = whitelist[msg.sender];

        require(amount > 0, "Nothing to claim");
        whitelist[msg.sender] = 0;
        claimed += amount;
        airdropToken.transfer(msg.sender, amount);
    }

    function isClaimable() external view returns (bool) {
        return block.timestamp >= startTime;
    } 

    function getClaimableAmount(address target) external view returns (uint) {
        return whitelist[target];
    }

    function getAirdropStatus() public view returns (AirdropStatus) {
        if (block.timestamp < startTime) {
            return AirdropStatus.NotStarted;
        } else {
            return AirdropStatus.Open;
        }
    }

    /// Returns the following data:
    /// Airdrop status - AirdropStatus
    /// token address - address
    /// start time - uint256
    /// remaining to claim - uint256
    function getOverview() public view returns (AirdropStatus, address, uint256, uint256) {
        return (
            getAirdropStatus(),
            address(airdropToken),
            startTime,
            airdropToken.balanceOf(address(this))
        );
    }
}