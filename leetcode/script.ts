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