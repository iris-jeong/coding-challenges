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
// eslint-disable-next-line no-unused-vars
var productExceptSelf = function (nums) {
	const n = nums.length;
	let leftProducts = new Array(n);
	let rightProducts = new Array(n);
	const answer = new Array(n);

	// Calculate the products of all elements to the left of each index.
	leftProducts[0] = 1;
	for (let i = 1; i < n; i++) {
		leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
	}

	// Calculate the products of all elements to the right of each index.
	rightProducts[n - 1] = 1;
	for (let i = n - 2; i >= 0; i--) {
		rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
	}

	// Calculate final result.
	for (let i = 0; i < n; i++) {
		answer[i] = leftProducts[i] * rightProducts[i];
	}

	return answer;
};
