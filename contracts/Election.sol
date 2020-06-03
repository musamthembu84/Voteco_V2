pragma solidity >=0.4.21 <0.7.0;
contract Election {

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping (uint => Candidate) public candidates;
    mapping (address => bool) public voters;   //store accounts that have voted
    uint public candidatesCount;


    constructor() public{
        addCandidates("Sasco");
        addCandidates("Daso");
        addCandidates("EFFSC");
        addCandidates("IFP");
    }

    function addCandidates(string memory _name) public {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount,_name,0);
    }

    event votedEvent(
        uint indexed _candidateID
    );

    function vote(uint _candidateID) public{

        require(!voters[msg.sender]); //require that person has not voted before

        require(_candidateID > 0 && _candidateID<=candidatesCount); //requires a valid candidate

        voters[msg.sender] = true;  //recording a vote

        candidates[_candidateID].voteCount ++; //update candidatesCount

    }
}
