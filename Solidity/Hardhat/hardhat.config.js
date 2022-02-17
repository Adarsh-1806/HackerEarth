/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
const ALCHEMY_API_KEY = "iSu2BaOKTwNJ_r5LniOvyfl_r-zMc5IO";
const RINKEBY_PRIVATE_KEY = "43a675a9231904b580edfc7233206bb86eeabb8ace01f224176f3b4ad4aa78a8";
module.exports = {
  solidity: "0.8.11",
  networks:{
    rinkeby:{
      url:`https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${RINKEBY_PRIVATE_KEY}`], 
    }
  }
};
