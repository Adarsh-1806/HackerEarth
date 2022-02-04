// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Bank{
    address private owner;
    uint public totalBalance;
    mapping (address=>uint) accHolders;

    constructor(){
        owner = msg.sender;
    }

    error NotEnoughFunds(uint requisted, uint available);

    //Function to Transfer Ether For account => this contract
    function DepositEther() public payable{
        accHolders[msg.sender] += msg.value;
        totalBalance += msg.value;
    }

    //Function to Transfer Ether For this Contract => account
    function WithdrawEther(uint _amount) public payable{
        uint money = _amount*(10**15);
        if(accHolders[msg.sender] < money){
            revert NotEnoughFunds(money, accHolders[msg.sender]);
        }
            payable(msg.sender).transfer(money);
            accHolders[msg.sender] -= money;
        
    }
    
    function acc() public view returns(address){
        return msg.sender;
    }
    function CheckBalance() public view returns(uint){
        return accHolders[msg.sender];
    }
}