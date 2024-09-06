/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  You must write an algorithm that runs in O(n) time and without using the division operation.

  Example 1:
  Input: nums = [1,2,3,4]
  Output: [24,12,8,6]
  Example 2:
  Input: nums = [-1,1,0,-3,3]
  Output: [0,0,9,0,0]

  Constraints:
  2 <= nums.length <= 105
  -30 <= nums[i] <= 30
  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

/* SOLUTION */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let answer = new Array(nums.length).fill(1);

	// Calculate the products to the left of each index.
	let leftProduct = 1;
	for (let i = 0; i < nums.length; i++) {
		answer[i] = leftProduct;
		leftProduct *= nums[i];
	}

	// Calculate the products to the right of each index.
	let rightProduct = 1;
	for (let j = nums.length - 1; j >= 0; j--) {
		answer[j] *= rightProduct;
		rightProduct *= nums[j];
	}

	return answer;
};
