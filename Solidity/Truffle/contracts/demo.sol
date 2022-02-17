// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

contract demo{
    string name;
    constructor(){
        name = "Adarsh";
    }
    function getname() view public returns(string memory){
        return name;
    }
}