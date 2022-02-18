// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract PaymentChannel{
    address payable public sender;
    address payable public receiver;
    uint public timeout;
    // constructor(address payable _receiver,uint _timeout) payable{
    //     sender = payable(msg.sender);
    //     receiver = _receiver;
    //     timeout = block.timestamp + _timeout;
    // }
    function claimPayment(uint _amount,bytes memory _signature) public{
        require(msg.sender == receiver,"You are not Authorized to claim Payment");
        require(validSign(_amount,_signature),"Your Signature is not Valid to claim Payment");
        receiver.transfer(_amount);
        selfdestruct(sender);
    }
    function claimTimeout() public{
        require(msg.sender == sender,"You are not Authorized to clam Timeout");
        require(timeout <= block.timestamp);
        selfdestruct(sender);
    }
    function validSign(uint _amount,bytes memory _sign) internal view returns(bool) {
        bytes32 message = getHash(keccak256(abi.encodePacked(_amount,this)));
        (uint8 v, bytes32 r, bytes32 s) = splitSignature(_sign);

        return ecrecover(message,v,r,s) == sender;
    }
    function splitSignature(bytes memory _sign) internal pure returns(uint8 v, bytes32 r, bytes32 s){
        require( _sign.length == 65);
        assembly{
            r:=mload(add(_sign,32))
            s:=mload(add(_sign,64))
            v:=byte(0,mload(add(_sign,96)))
        }
        return (v,r,s);
    }
    function getHash(bytes32 _hash) internal pure returns(bytes32){
        return keccak256(abi.encodePacked(_hash,"This is Signed msg"));
    }
    function generateSign(uint _amount) public view returns(bytes memory){
        return abi.encodePacked(_amount,this);
    }
    //just to check balance of this contract
    function balance() public view returns(uint){
        return address(this).balance;
    }
}