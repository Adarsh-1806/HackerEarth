// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Election {
    struct Voter{
        bool voted;
        address voterId;
    }
    struct Candidate{
        address candidateId;
        string name;
        uint voteCount;
    }
    address private board;
    mapping(address => Voter) public voters;
    // mapping(address => Candidate) public candidates;
    Candidate[] public candidates;
    uint totalCandidate;
    constructor(){
        board = msg.sender;

    }
    function addCandidate(address _id,string memory _name) public{
        require(msg.sender == board, "You have not Authorized");
        //Add new candidate only by board
        Candidate memory newCandidate = Candidate({
            name:_name,
            candidateId:_id,
            voteCount:0
        });
        candidates[totalCandidate++] = newCandidate;
    }
    function castVote(uint _id) public{
        require(voters[msg.sender].voted == false,"You have already Voted");
        voters[msg.sender].voted = true;
        candidates[_id].voteCount += 1;
    }
    function winner() public view returns(uint){
        uint maxVote;
        uint winnerCandidate ;
        
        for(uint i=0;i<totalCandidate;i++){
            if(maxVote < candidates[i].voteCount){
                maxVote = candidates[i].voteCount;
                winnerCandidate = i;
            }
        }
        return winnerCandidate;
    }
}
