// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
var ethers = require("ethers");
var provider = ethers.providers.getDefaultProvider();

async function main() {
  // deploy the contract
  var transactionHash =
    "0x7baea23e7d77bff455d94f0c81916f938c398252fb62fce2cdb43643134ce4ed";
  provider
    .getTransactionReceipt(transactionHash)
    .then(function (transactionReceipt) {
      console.log(transactionReceipt);
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
