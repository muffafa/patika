// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

/*
   i. Define 4 state variables that will hold the total, subtracted, multiplied, and divided values.
  ii. Write 4 functions that add, subtract, multiply, and divide the given inputs, respectively.
   Set the results to the corresponding state variables, and also perform the necessary checks inside these functions.
  iii. Write view functions that return the total, subtracted, multiplied, and divided values to the user. 
  (You can also write a single view function that returns all 4 values at once if you prefer.) 
 */


contract Counter {

    uint public total = 0;
    uint public subtracted = 0;
    uint public multiplied = 0;
    uint public divided = 0;
    
    function add(uint val1, uint val2) public {
        total = val1 + val2;
    }

    function subtract(uint val1, uint val2) public {
        subtracted = val1 - val2;
    }

    function multiply(uint val1, uint val2) public {
        multiplied = val1 * val2;
    }

    function dvide(uint val1, uint val2) public {
        divided = val1 / val2;
    }

    function showValues() view public returns(uint, uint, uint, uint){
        return (total, subtracted, multiplied, divided);
    }
}