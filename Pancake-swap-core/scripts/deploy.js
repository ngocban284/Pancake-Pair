// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  // console.log(owner);

  const PancakeFactoryAddress = "0xB9A7DbcCBEb41F0E07170987338f951eE3644Bff";
  const PancakeFactory = await hre.ethers.getContractAt(
    "PancakeFactory",
    PancakeFactoryAddress
  );
  // console.log(PancakeFactory);

  const PancakeRouterAddress = "0xa5245A15a79af7Fb38CC098493307774F8EF271a";
  const PancakeRouter = await hre.ethers.getContractAt(
    "PancakeRouter",
    PancakeRouterAddress
  );
  console.log(PancakeRouter);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
