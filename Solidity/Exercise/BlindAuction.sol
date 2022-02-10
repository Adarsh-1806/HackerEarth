// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract BlindAuction{
    address payable public highestBidder;
    uint public highestBid;
    uint public auctiontime;
    address payable bidOwner;
    mapping(address => Bid[]) public bidders;

    struct Bid{
        bytes32 blindedBid;
        uint deposit;
    }

    constructor(uint endTime,address payable _bidOwner){
        auctiontime = block.timestamp + endTime;
        bidOwner = _bidOwner;
    }
    function addBid(uint _amount,bool fake) payable public{
        // uint amount = msg.value;
        bytes32 hashedBid;
        hashedBid = keccak256(abi.encodePacked(_amount, fake, "adarsh"));

    }
}