// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

struct student{
    uint id;
    string name;
}

contract School{
    student public std;
    constructor(uint _id, string memory _name){
        std.id = _id;
        std.name = _name;
   }
   function change(uint _id, string memory _name) public {
       student memory  new_student = student({
           id:_id,
           name:_name
       });
       std = new_student;
   }
}

contract use_enum{
    enum state {access, not_access, hold }
    state public s1 = state.access;
    uint public lottery = 1000;

    function find() public{
        if(s1 == state.access){
            lottery++;
        }
    }
}

