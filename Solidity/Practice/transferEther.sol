// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract transfer1{
    address payable acc_hex ;
    function addEther() public payable{

    }
    function getBalance() public view returns(uint){
        return address(this).balance;
    }
    function payEther() public {
        acc_hex.transfer(1 ether);
    }
    function setAddress(address payable _acc_hex) public{
        acc_hex = payable(_acc_hex);
    }
    function acc_balance() public view returns(uint){
        return address(acc_hex).balance;
    }
}