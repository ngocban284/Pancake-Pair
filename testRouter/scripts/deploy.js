// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // deploy the contract
  const _Factory = "0x346CB84cdF074855Df9d4f1B080a8eeEDb8Ac8dd";
  const _WETH = "0xF524F9A7d8fE9D79Fb6b2Ec2ca13782f27EdBfB3";
  const PancakeRouter = await hre.ethers.getContractFactory("PancakeRouter");
  const PancakeRouterInstance = await PancakeRouter.deploy(_Factory, _WETH);

  console.log(await PancakeRouterInstance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
