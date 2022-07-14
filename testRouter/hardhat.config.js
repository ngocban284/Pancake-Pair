require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gas: 6500000,
      gasPrice: 20000000000,
      accounts: [
        "0xa0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6",
      ],
    },
  },
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
