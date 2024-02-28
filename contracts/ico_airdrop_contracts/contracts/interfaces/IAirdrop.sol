// SPDX-License-Identifier: unlicensed
pragma solidity ^0.8.20;


interface IAirdrop {
    function getClaimableAmount(address target) external view returns (uint);
    //function isClaimable() external view returns (bool);

    function claim() external;

    function setAllowance(address beneficiary, uint256 amount) external;
    function batchSetAllowance(address[] calldata beneficiaries, uint256[] calldata amounts) external;

}