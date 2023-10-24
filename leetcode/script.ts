/**
 * 1. Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * */ 

/*
loop through nums array
    in each iteration use a nested loop and loop through nums
        ignore the same indexing values
*/ 

function twoSum(nums: number[], target: number): number[] | undefined {
    for (let i = 0; i < nums.length; i++) {
      let currentNumber: number = nums[i];
  
      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          const answer: number = currentNumber + nums[j];
          if (answer === target) {
            return [i, j];
          }
        }
      }
    }
}


/**
 * 342. Power of Four
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 * An integer n is a power of four, if there exists an integer x such that n == 4x.
 * */ 

function isPowerOfFour(n: number): boolean {
  let powerResult = 0;
  for (let i = 0; powerResult < n || powerResult === 0; i++) {
      let currentIterationResult = 4 ** i;
      powerResult = currentIterationResult;
  }
  if (powerResult === n) {
      return true;
  } else {
      return false;
  }
};


/**
 * 9. Palindrome Number
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * */

function isPalindrome(x: number): boolean {
  let arrayConverted: string[] = x.toString().split("");
  let reverseArrayConverted: string[] = [];

  for (let i = arrayConverted.length - 1; i >= 0; i--) {
      reverseArrayConverted.push(arrayConverted[i]);
  }

  let originalNumConverted: number = Number(arrayConverted.join(""));
  let reverseNumConverted: number = Number(reverseArrayConverted.join(""));

  if (originalNumConverted === reverseNumConverted) {
      return true;
  } else {
      return false;
  }
};