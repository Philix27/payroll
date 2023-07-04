// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IERC20Interface {
    function transferFrom(address sender, address recipient, uint256 amout) external;
    function approve(address sender, uint amount) external returns (bool);
    function balanceOf() external view returns (uint256);
}
contract MyContract {
    address public owner;
    mapping (address => bool) verifiedTokens;
    address[] public verifiedTokensList;

    struct Transactions {
        address sender;
        address receiver;
    } 
    constructor() {}
   function topup_account(address sender, address recipient, uint256 amout) public returns (uint) {}
   function pay_this_account() public returns (uint) {}
}