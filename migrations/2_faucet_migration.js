const FaucetContract = artifacts.require("Faucet") // this will get you the smart contract (bytecode of the smart contract)


module.exports = function (deployer) {
  deployer.deploy(FaucetContract)
}

