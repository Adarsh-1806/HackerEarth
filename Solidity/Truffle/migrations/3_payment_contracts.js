var PaymentChannel = artifacts.require("./PaymentChannel.sol");

module.exports = function(deployer) {
  deployer.deploy(PaymentChannel,'0xF958dAc73CB29319295F589087c6927B485087c9',300);
};
