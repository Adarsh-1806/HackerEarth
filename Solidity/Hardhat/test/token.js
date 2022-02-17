const {expect} = require("chai");
const { ethers } = require("hardhat");

let Token;
let AdarshToken;
let add1;
let add2;
let addrs;
let owner;
beforeEach(async function () {
    Token = await ethers.getContractFactory('Token');
    [owner,add1,add2,...addrs] = await ethers.getSigners();
    AdarshToken = await Token.deploy();
})
describe("Token contract",function () {
    it("Right Owner",async function(){
        expect(await AdarshToken.owner()).to.equal(owner.address);
    });
    it("Check Total Supply",async function(){
        const ownerBalance = await AdarshToken.balanceOf(owner.address);
        expect(await AdarshToken.totalSupply()).to.equal(ownerBalance);
    });
    
    it("Transfer Token",async function(){
        await AdarshToken.transfer(500,add1.address);
        expect(await AdarshToken.balanceOf(add1.address)).to.equal(500);
    });

    // it("Transfer Function",async function (){
    //     const [owner,add1,add2] = await ethers.getSigners();

    //     const Token = await ethers.getContractFactory('Token');
    //     const AdarshToken = await Token.deploy();

    //     await AdarshToken.transfer(500,add1.address);
    //     expect(await AdarshToken.balanceOf(add1.address)).to.equal(500);

    //     await AdarshToken.connect(add1).transfer(250,add2.address);
    //     expect(await AdarshToken.balanceOf(add2.address)).to.equal(250);
    // });
});