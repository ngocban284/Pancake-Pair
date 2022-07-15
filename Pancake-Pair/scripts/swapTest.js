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

// const owner = "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43";

const poolTokenAdressArray = [
  [
    "0x3703DC4F1272BF8da5d4d113E3249687A22A0bb9",
    "0xc9526760C889B88ace3F260B3056586D99862000",
  ],
  [
    "0x0BFFAaC246B2Fc5860aB63283297640492B9Ff34",
    "0x86E38220DBa5B34b50e0B035E145A75ecd93B196",
  ],
  [
    "0xc9526760C889B88ace3F260B3056586D99862000",
    "0x0BFFAaC246B2Fc5860aB63283297640492B9Ff34",
  ],
  [
    "0x3703DC4F1272BF8da5d4d113E3249687A22A0bb9",
    "0x86E38220DBa5B34b50e0B035E145A75ecd93B196",
  ],
];

const amountArray = [
  [ethers.utils.parseEther("100"), ethers.utils.parseEther("90")],
  [ethers.utils.parseEther("200"), ethers.utils.parseEther("190")],
  [ethers.utils.parseEther("300"), ethers.utils.parseEther("290")],
  [ethers.utils.parseEther("400"), ethers.utils.parseEther("390")],
];

async function main() {
  //get owner accounts
  const [owner] = await hre.ethers.getSigners();
  // console.log(owner.address);

  //get contract instances
  const PancakeFactoryAddress = "0x346CB84cdF074855Df9d4f1B080a8eeEDb8Ac8dd";
  const PancakeFactory = await hre.ethers.getContractAt(
    PancakeFactoryAbi,
    PancakeFactoryAddress
  );

  const PancakeRouterAddress = "0x78cF9D6fdFADF79CDAdFea23d42c1b6E80D1076f";
  const PancakeRouter = await hre.ethers.getContractAt(
    PancakeRouterAbi,
    PancakeRouterAddress
  );

  const BitCoinAddress = "0x3703DC4F1272BF8da5d4d113E3249687A22A0bb9";
  const BTC = await hre.ethers.getContractAt(BitCoinAbi, BitCoinAddress);

  const BUSDAddress = "0xc9526760C889B88ace3F260B3056586D99862000";
  const BUSD = await hre.ethers.getContractAt(BUSDAbi, BUSDAddress);

  const PolkadotAddress = "0x0BFFAaC246B2Fc5860aB63283297640492B9Ff34";
  const DOT = await hre.ethers.getContractAt(PolkadotAbi, PolkadotAddress);

  const SolanaAddress = "0x86E38220DBa5B34b50e0B035E145A75ecd93B196";
  const SOL = await hre.ethers.getContractAt(SolanaAbi, SolanaAddress);

  //transfer token to owner
  // await BTC.transfer(owner.address, ethers.utils.parseEther("10000000000"));
  // await BUSD.transfer(owner.address, ethers.utils.parseEther("10000000000"));
  // await DOT.transfer(owner.address, ethers.utils.parseEther("10000000000"));
  // await SOL.transfer(owner.address, ethers.utils.parseEther("10000000000"));

  // create pair
  // const pair1Adress = await PancakeFactory.createPair(BTC.address, SOL.address);
  // 0x6623e68e060dd895909a1f00b8f86866430280561f4c275b9222303d755931fb

  // const pair2Adress = await PancakeFactory.createPair(
  //   BUSD.address,
  //   DOT.address
  // );
  // 0xf3cee9d13be68984ecbc2ddfc9c503cd2e606298470c2b7fc7d634d7696400d0

  // const pair3Adress = await PancakeFactory.createPair(DOT.address, SOL.address);
  // 0x862cebd63b9ddb709c2a95e2982e6c79fad6ac93cbfe135aae9f9e0eabb1efe7

  // const pair4Adress = await PancakeFactory.createPair(
  //   BTC.address,
  //   BUSD.address
  // );
  // 0x5234f3f5729052dd289aefdff222abe99830d54cea360035d1d35fe11689be3a

  //approve router address to spend tokens
  await BTC.approve(
    PancakeRouter.address,
    ethers.utils.parseEther("100000000000")
  );
  await BUSD.approve(
    PancakeRouter.address,
    ethers.utils.parseEther("100000000000")
  );
  await DOT.approve(
    PancakeRouter.address,
    ethers.utils.parseEther("100000000000")
  );
  await SOL.approve(
    PancakeRouter.address,
    ethers.utils.parseEther("100000000000")
  );

  /*
   BTC-BUSD :0x01ed9d8b180eEB66F3c58eDB159F69f6d90827C9

    DOT-SOL:0xe342DeC5a6820E302543cca7C8c70176FA7297c8

    BUSD-DOT:0x0B0B321aF6B0CD590bab3C3ac9701D6cf76b9deB

    BTC-SOL:0xEE40a285c7Dcc75012Ac00Db055ea5f07FBD59E6
    */

  //swap tokens
  //   const tx = await PancakeRouter.swapExactTokensForTokens(
  //     ethers.utils.parseEther("100"),
  //     ethers.utils.parseEther("90"),
  //     [DOT.address, SOL.address],
  //     owner.address,
  //     Math.floor(Date.now() / 1000) + 60 * 10
  //   );

  async function randomRuntime() {
    var min = 1,
      max = 60;

    var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    var i = rand % 4;

    const tx = await PancakeRouter.swapExactTokensForTokens(
      amountArray[i][0],
      amountArray[i][1],
      poolTokenAdressArray[i],
      owner.address,
      Math.floor(Date.now() / 1000) + 60 * 10
    );

    console.log("next transaction will be created in " + rand + " seconds");

    setTimeout(randomRuntime, rand * 1000);
  }

  randomRuntime();

  //   console.log(tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
