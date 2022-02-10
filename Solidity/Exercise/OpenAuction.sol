// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract openAuction{
    address payable public highestBidder;
    uint public highestBid;
    uint public auctiontime;
    address payable bidOwner;
    mapping(address => uint) public bidders;

    error AuctionEnded(string);
    error NotEnoughFund(string);
    error NotAuthorized(string);
    event BidSuccessfully(string,uint);
    constructor(uint endTime,address payable _bidOwner){
        auctiontime = block.timestamp + endTime;
        bidOwner = _bidOwner;
    }
    function addBid() public payable{
        if(msg.value == 0)  revert("Please add ethers (non Zero)");
        if (block.timestamp > auctiontime)
            revert AuctionEnded("Sorry, Auction has been Ended!!");
        require(msg.sender != bidOwner,"You cannot place bid by yourself");
        // require(msg.value > highestBid,"Place a higher Bid!!");
        bidders[msg.sender] += msg.value;
        if(bidders[msg.sender] > highestBid){
            highestBid = bidders[msg.sender];
            highestBidder = payable(msg.sender);
        }
        emit BidSuccessfully("You have place a bid of total:",bidders[msg.sender]);
    }
    function withdrawBid() public{
        require(msg.sender != highestBidder,"Highest Bidder cannot withdraw money!!");
        if(bidders[msg.sender] == 0){
            revert NotEnoughFund("Sorry,You have not Enough Fund for withdrawal!!");
        }

        uint money = bidders[msg.sender];
        bidders[msg.sender] = 0;
        payable(msg.sender).transfer(money);
    }
    // function balance() view public returns(uint){
    //     return address(this).balance;
    // }
    function endAuction() public{
        if(msg.sender != bidOwner)
            revert NotAuthorized("Sorry,You can't end Auction, not Authorized!!");
        auctiontime = block.timestamp;
        bidOwner.transfer(highestBid);
    }
}