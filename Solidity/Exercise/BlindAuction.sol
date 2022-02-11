// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract BlindAuction{
    address payable public highestBidder;
    uint highestBid;
    uint auctiontime;
    address payable bidOwner;

    struct Bid{
        bytes32 blindedBid;
        uint deposit;
    }
    mapping(address => Bid[]) public bidders;

    // constructor(uint endTime,address payable _bidOwner){
    //     auctiontime = block.timestamp + endTime;
    //     bidOwner = _bidOwner;
    // }
    constructor(){
        auctiontime = block.timestamp + 120;
        bidOwner = payable(msg.sender);
    }
    function addBid(uint _amount,bool _fake,string memory _secret) payable public{
        bytes32 hashedBid = keccak256(abi.encodePacked(_amount, _fake, _secret));
        bidders[msg.sender].push(Bid({
            blindedBid:hashedBid,
            deposit:msg.value
        }));
    }
    function revealBids(uint[] calldata _amounts,bool[] calldata _fakes,string[] calldata _secrets) public{
        uint totalBids = bidders[msg.sender].length;
        require(_amounts.length == totalBids);
        require(_fakes.length == totalBids);
        require(_secrets.length == totalBids);
        uint refundAmount;
        for(uint i=0;i<totalBids;i++){
            if(bidders[msg.sender][i].blindedBid == keccak256(abi.encodePacked(_amounts[i], _fakes[i], _secrets[i])))
            {
                refundAmount += bidders[msg.sender][i].deposit;
            }
        }
        payable(msg.sender).transfer(refundAmount);
    }
}