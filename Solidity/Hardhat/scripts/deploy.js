async function main() {
    const [owner] = await ethers.getSigners();
    Token = await ethers.getContractFactory('Token');
    AdarshToken = await Token.deploy();
    console.log("Token-Address:",AdarshToken.address);
}
main().then(()=>process.exit(0)).catch((error)=>{
    console.log(error);
    process.exit(1);
})