// SPDX-License-Identifier: unlicensed
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC20Metadata.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IIcoController.sol";

enum IcoStatus {
    NotStarted,
    Open,
    Closed
}


contract IcoController is Ownable, IIcoController {
    uint256 tokenPriceInNative;

    // Multiplier used on token amount calculations
    uint256 public oneTokenInWei;
    uint256 public startTime;
    uint256 public endTime;

    ERC20 public icoToken;

    error IcoNotStarted(uint256 startTime, uint256 currentTime);
    error IcoClosed(uint256 endTime, uint256 currentTime);


    constructor(address _icoToken, uint256 _tokenPriceInNative, uint256 _startTime, uint256 _endTime) Ownable(msg.sender) {
        icoToken = ERC20(_icoToken);
        tokenPriceInNative = _tokenPriceInNative;
        oneTokenInWei = uint(10) ** IERC20Metadata(_icoToken).decimals();
        startTime = _startTime;
        endTime = _endTime;
    }

    function getIcoStatus() public view returns (IcoStatus) {
        if (block.timestamp < startTime) {
            return IcoStatus.NotStarted;
        } else if (block.timestamp >= endTime) {
            return IcoStatus.Closed;
        } else {
            return IcoStatus.Open;
        }
    }


    function getTokensRemaining() public view returns (uint256) {
        return icoToken.balanceOf(address(this));
    }

    /// Get number of tokens that can be bought from a given amount of native tokens
    function getNumberTokensFromValue(uint256 value) public view returns (uint256) {
        return value * oneTokenInWei / tokenPriceInNative;
    }

    /// Get number of tokens that can be bought from a given amount of native tokens
    /// constrained by supply available 
    function getClampedNumberTokensFromValue(uint256 value) public view returns (uint256) {
        uint256 numberFromValue = value * oneTokenInWei / tokenPriceInNative;
        uint256 tokensRemaining = getTokensRemaining();

        if (numberFromValue > tokensRemaining) {
            return tokensRemaining;
        } else {
            return numberFromValue;
        }
    }

    function buy() public payable {
        // can only buy if ICO has started and is not over 
        if (block.timestamp >= startTime) {
            revert IcoNotStarted(startTime, block.timestamp);
        } else if (block.timestamp < endTime) {
            revert IcoClosed(endTime, block.timestamp);
        }

        /*
        // https://github.com/avalaunch-app/xava-protocol/blob/master/contracts/sales/AvalaunchSaleV2.sol#L545
        // Compute the amount of tokens user is buying
        uint256 amountOfTokensBuying = (msg.value).mul(oneTokenInWei).div(sale.tokenPriceInAVAX);
        */

        uint256 amountOfTokensBuying = msg.value * oneTokenInWei / tokenPriceInNative;

        // check contract balance 
        if (getTokensRemaining() >= amountOfTokensBuying) {
            // can transfer 
            icoToken.transfer(
                msg.sender,
                amountOfTokensBuying
            );
        } else {
            revert("Not enough tokens remaining to fill order");
        }
    }

    // burn remaining tokens or send them to 0 address once ICO is over?
    function burn() public {
        if (getIcoStatus() != IcoStatus.Closed) {
            revert("Can only burn once Ico is finished");
        }

        // send to 0 address
        icoToken.transfer(
            address(0),
            icoToken.balanceOf(address(this))
        );
    }

    /// Returns the following data: 
    /// Ico status - uint256
    /// tokenAddress - address
    /// startTime - uint256
    /// endTime - uint256
    /// price - uint256
    /// nbTokensRemaining - uint256
    function getOverview() public view returns (IcoStatus, address, uint256, uint256, uint256, uint256) {
        return (
            getIcoStatus(),
            address(icoToken),
            startTime,
            endTime,
            tokenPriceInNative,
            icoToken.balanceOf(address(this))
        );
    }

    function withdraw() public onlyOwner {
        if (getIcoStatus() != IcoStatus.Closed) {
            revert("Can only withdraw funds once Ico is finished");
        }

        (bool sent, bytes memory data) = owner().call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }
}