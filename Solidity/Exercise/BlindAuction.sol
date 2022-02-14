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
    mapping(address => uint) pendingReturns;
    constructor(uint endTime,address payable _bidOwner){
        auctiontime = block.timestamp + endTime;
        bidOwner = _bidOwner;
    }
    function addBid(bytes32 _hashedBid) payable public{
        bidders[msg.sender].push(Bid({
            blindedBid:_hashedBid,
            deposit:msg.value
        }));
    }
    function revealBids(uint[] calldata _amounts,bool[] calldata _fakes,string[] calldata _secrets) public{
        uint totalBids = bidders[msg.sender].length;
        require(_amounts.length == totalBids,"Enter Valid Bids");
        require(_fakes.length == totalBids,"Enter Valid Bids");
        require(_secrets.length == totalBids,"Enter Valid Bids");
        uint refundAmount;
        for(uint i=0;i<totalBids;i++){
            Bid storage currentBid = bidders[msg.sender][i];
            if(currentBid.blindedBid != keccak256(abi.encodePacked(_amounts[i], _fakes[i], _secrets[i]))){
                continue;
            }
            refundAmount += currentBid.deposit;
            if(!_fakes[i] && currentBid.deposit>=_amounts[i]){
                if(checkforHighestBid(msg.sender,currentBid.deposit)){
                    refundAmount -= _amounts[i];
                }
            }
        }
        payable(msg.sender).transfer(refundAmount);
    }
    function checkforHighestBid(address _bidder, uint _currentBidAmount) private returns(bool){
        if (_currentBidAmount <= highestBid) {
            return false;
        }
        if (highestBidder != address(0)) {
            pendingReturns[highestBidder] += highestBid;
        }
        highestBid = _currentBidAmount;
        highestBidder = payable(_bidder);
        return true;
    }
      function withdraw() external {
        uint amount = pendingReturns[msg.sender];
        if (amount > 0) {
            pendingReturns[msg.sender] = 0;
            payable(msg.sender).transfer(amount);
        }
    }
    function gethHash(uint _value,bool _fake,string memory _secret) public pure returns(bytes32){
        return keccak256(abi.encodePacked(_value, _fake, _secret));
    }
}