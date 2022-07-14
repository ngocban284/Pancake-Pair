require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [
        "0xa0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6",
      ],
    },
  },
  solidity: "0.5.16",
};
