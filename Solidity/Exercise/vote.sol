// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Election {
    struct Voter{
        bool voted;
        bool right;
        address voterId;
        address votedTo;
    }
    struct Candidate{
        address candidateId;
        string name;
        uint voteCount;
    }
    address private board;
    mapping(address => Voter) public voters;
    Candidate[] public candidates;

    event votedSucessfully(string);
    event candidateAdded(string);
    constructor(){
        board = msg.sender;

    }
    function addCandidate(address _id,string memory _name) public{
        require(msg.sender == board, "You have not Authorized to add Candidate");
        //Add new candidate only by board
        candidates.push(Candidate({
            name:_name,
            candidateId:_id,
            voteCount:0
        }));
        emit candidateAdded("candidate has been added Successfully");
    }
    function giveRight(address _voter) public{
        require(msg.sender == board,"You have not Authorized to give Right");
        voters[_voter].right = true;
        voters[_voter].voterId = _voter;
    }
    function castVote(uint _id) public{
        require(voters[msg.sender].right == true,"You have not right to vote!!");
        require(voters[msg.sender].voted == false,"You have already Voted!!");
        require(_id < candidates.length,"Select Valid Candidate!!");
        voters[msg.sender].voted = true;
        voters[msg.sender].votedTo = candidates[_id].candidateId;
        candidates[_id].voteCount += 1;
        emit votedSucessfully("You have voted successfully");
    }
    function winner() public view returns(string memory,uint){
        uint maxVote;
        uint winnerCandidate ;
        
        for(uint i=0;i<candidates.length;i++){
            if(maxVote < candidates[i].voteCount){
                maxVote = candidates[i].voteCount;
                winnerCandidate = i;
            }
        }
        return (candidates[winnerCandidate].name,candidates[winnerCandidate].voteCount);
    }
}
