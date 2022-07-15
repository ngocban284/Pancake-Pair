require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gas: 6500000,
      gasPrice: 20000000000,
      accounts: [`${process.env.ACCOUNT_0}`],
    },
  },
  solidity: "0.8.0",
};
