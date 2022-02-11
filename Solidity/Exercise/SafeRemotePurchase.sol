// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract SafeRemotePurchase{
    uint public price;
    address payable public seller;
    address payable public buyer;

    enum State {created,locked,received,completed}
    State public status;

    error addProperAmount(string);
    error unAuthorizedAccess(string);
    error invalidStatus(string);
    event RefundSuccessfull(string);
    event paymentSuccessfull(string,uint);
    modifier enoughAmount(uint _amount){
        if(msg.value != (2*price))
            revert addProperAmount("Please, add correct amount");
        _;
    }
    modifier checkStatus(State _status){
        if(status != _status)
            revert invalidStatus("Invalid State");
        _;
    }
    modifier isBuyer(address account){
        if(buyer != account)
            revert unAuthorizedAccess("You are not authorized to update status (buyer Only)");
        _;
    }
    modifier isSeller(address account){
        if(seller != account)
            revert unAuthorizedAccess("You are not authorized to update status (seller Only)");
        _;
    }
    //seller create contract and set the value of the Product
    constructor(uint _price) payable {
        require(msg.value != 0,"Price shoud be non Zero");
        price = _price;
        seller = payable(msg.sender);
        if(msg.value != (2*price))
            revert addProperAmount("Please, add correct amount");
        
    }
    //buyer purchase Item and add double amount into contract
    function purchaseItem() payable public enoughAmount(msg.value) checkStatus(State.created){
        buyer = payable(msg.sender);
        status = State.locked;
        emit paymentSuccessfull("Amount Paid:",msg.value);
    }
    function itemrecieved() public isBuyer(msg.sender) checkStatus(State.locked){
        status = State.received;
    }
    function refund() public isSeller(msg.sender) checkStatus(State.received){
        status = State.completed;
        seller.transfer(3*price);
        buyer.transfer(price);
        emit RefundSuccessfull("Amount is Refunded. Transaction Complete!!");
    }

    function balance() public view returns(uint){
        return address(this).balance;
    }
}