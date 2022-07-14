pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token1 is ERC20 {
  constructor() ERC20('Token 4', 'TK4') {
    _mint(msg.sender, 100000);
  }
}