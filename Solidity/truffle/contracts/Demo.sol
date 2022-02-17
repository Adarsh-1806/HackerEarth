// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Demo{
    uint value ;
    function setData(uint _number) public {
        value = _number;
    }   
    function getData() public view returns(uint){
        return value;
    }   
}