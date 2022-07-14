// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const PancakeFactoryAbi = require("../abi/PancakeFactoryAbi.json");
const PancakeRouterAbi = require("../abi/PancakeRouterAbi.json");
const BitCoinAbi = require("../abi/BitCoinAbi.json");
const BUSDAbi = require("../abi/BUSDAbi.json");
const PolkadotAbi = require("../abi/PolkadotAbi.json");
const SolanaAbi = require("../abi/SolanaAbi.json");
const { ethers } = require("hardhat");

async function main() {
  //get owner accounts
  const [owner] = await hre.ethers.getSigners();
  // console.log(owner.address);

  //get contract instances
  const PancakeFactoryAddress = "0xB9A7DbcCBEb41F0E07170987338f951eE3644Bff";
  const PancakeFactory = await hre.ethers.getContractAt(
    PancakeFactoryAbi,
    PancakeFactoryAddress
  );

  const PancakeRouterAddress = "0xa5245A15a79af7Fb38CC098493307774F8EF271a";
  const PancakeRouter = await hre.ethers.getContractAt(
    PancakeRouterAbi,
    PancakeRouterAddress
  );

  const BitCoinAddress = "0x9F9E0BAC4a54DF23107a9bEcE5E6CDd3d9F1Fee0";
  const BTC = await hre.ethers.getContractAt(BitCoinAbi, BitCoinAddress);

  const BUSDAddress = "0x0bF40c92BB8f87a168345a82efC8f132386eDFBC";
  const BUSD = await hre.ethers.getContractAt(BUSDAbi, BUSDAddress);

  const PolkadotAddress = "0x0f9be414A10b3455e559d94F4835f5091a889ec2";
  const DOT = await hre.ethers.getContractAt(PolkadotAbi, PolkadotAddress);

  const SolanaAddress = "0x19972B5DE107bB4E76617b1Da315B50885dD5661";
  const SOL = await hre.ethers.getContractAt(SolanaAbi, SolanaAddress);

  //transfer token to owner
  // await BTC.transfer(owner.address, ethers.utils.parseEther("1000"));
  // await BUSD.transfer(owner.address, ethers.utils.parseEther("1000"));
  // await DOT.transfer(owner.address, ethers.utils.parseEther("1000"));
  // await SOL.transfer(owner.address, ethers.utils.parseEther("1000"));

  // create pair
  // const pair1Adress = await PancakeFactory.createPair(BTC.address, SOL.address);
  // 0x865431273679a45d5ca8e727152effcba7f2a8fbfd52c680b91431bb449f1252

  // const pair2Adress = await PancakeFactory.createPair(
  //   BUSD.address,
  //   DOT.address
  // );
  // 0xe619e1f7ea3d6029254a74894977ab857302fafffe5992c7d6a1b4a48ef8a00a

  // const pair3Adress = await PancakeFactory.createPair(DOT.address, SOL.address);
  // 0xd06d5a431ca68ea0fa8215351834944806b3a6f05e6b961eee609f779472712f

  // const pair4Adress = await PancakeFactory.createPair(
  //   BTC.address,
  //   BUSD.address
  // );
  // 0x8107f3e51f37b7ad8649f792f1681827cf4dbeddaa6580f5d0d101bdecbcc20c

  //approve router address to spend tokens
  await BTC.approve(PancakeRouter.address, ethers.utils.parseEther("1000"));
  await BUSD.approve(PancakeRouter.address, ethers.utils.parseEther("1000"));
  await DOT.approve(PancakeRouter.address, ethers.utils.parseEther("1000"));
  await SOL.approve(PancakeRouter.address, ethers.utils.parseEther("1000"));

  // add Liquidity to pair
  // await PancakeRouter.addLiquidity(
  //   BTC.address,
  //   SOL.address,
  //   10000,
  //   10000,
  //   10000,
  //   10000,
  //   owner.address,
  //   Math.floor(Date.now() / 1000) + 60 * 10
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
