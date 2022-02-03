// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Bank{
    address private owner;
    address[] public accounts;
    uint public bankbalance;
    // address payable reciever = payable(msg.sender);
    mapping (address=>uint) accountSheet;
    constructor(){
        owner = msg.sender;
        bankbalance=0;
    }
    function showowner() public view returns(address){
        return owner;
    }
    //Function to Deposit Ether For account => this contract
    function DepositEther() public payable{
        if(msg.value>1 ether){
            accounts.push(msg.sender);
            bankbalance += msg.value;
            accountSheet[msg.sender] = msg.value;
        }
    }

    //Function to Transfer Ether For this Contract => account
    function WithdrawEther(address payable _reciever,uint _amount) public{
       if(_amount >= accountSheet[_reciever]){
           _reciever.transfer(_amount);
           bankbalance -= _amount;
           accountSheet[_reciever] -= _amount;
       }
    }
    function CheckBalance() public view returns(uint){
        return address(this).balance;
    }
    function balanceof(address _account) public view returns(uint){
        return accountSheet[_account];
    }
}