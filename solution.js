/* Problem Description:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// Implementation //

const nums = [2, 7, 11, 15];
// change 'target' value from '9'
const target = 26;

// evaluate values of 'i' and 'j' against 'target'
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }   
}

// Call the function
twoSum(nums, target);