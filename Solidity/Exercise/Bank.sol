// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Bank{

    uint public totalBalance;
    mapping (address=>uint) accounts;

    error NotEnoughFunds(uint requisted, uint available);

    //Function to Transfer Ether For account => this contract
    function depositEther() public payable{
        accounts[msg.sender] += msg.value;
        totalBalance += msg.value;
    }

    //Function to Transfer Ether For this Contract => account
    function WithdrawEther(uint _amount) public{
        uint money = _amount*(10**15);
        if(accounts[msg.sender] < money){
            revert NotEnoughFunds(money, accounts[msg.sender]);
        }
            accounts[msg.sender] -= money;
            payable(msg.sender).transfer(money);
        
    }
    
    function currentAccount() public view returns(address){
        return msg.sender;
    }
    function checkBalance() public view returns(uint){
        return accounts[msg.sender];
    }
}