// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Maths {
    function testUnderflow() public pure  returns (uint) {
        uint x = 0;
        x--;
        return x;
    }
}