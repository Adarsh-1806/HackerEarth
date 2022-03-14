/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
const ALCHEMY_API_KEY = "868412380c3b4a13bfd60c45ff18005f";
const RINKEBY_PRIVATE_KEY = "b54c69512037b6b1faa32f116be807c86035642891786fda4c12aff1bc8854ab";
module.exports = {
  solidity: "0.8.11",
  networks:{
    rinkeby:{
      url:`https://rinkeby.infura.io/v3/${ALCHEMY_API_KEY}`,
      accounts:[`${RINKEBY_PRIVATE_KEY}`], 
    }
  }
};
