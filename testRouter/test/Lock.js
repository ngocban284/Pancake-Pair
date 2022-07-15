const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  var ethers = require("ethers");
  var provider = ethers.providers.getDefaultProvider();
  provider
    .getTransactionReceipt(
      "0xdd9edf74aea07b9877f4e222f6fa8c80fc71f708f5a1c5d163425bde8b897d61"
    )
    .then(function (transactionReceipt) {
      console.log(transactionReceipt);
    });
});
