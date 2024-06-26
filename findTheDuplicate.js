/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given an unsorted array of positive numbers, nums, such that the values lie in the range [1,n], inclusive, and that there are n+1 numbers in the array, find and return the duplicate number present in nums. There is only one repeated number in nums.
  Note: You cannot modify the given array nums. You have to solve the problem using only constant extra space.
  Constraints:
  1 ≤ n ≤ 10^3
  nums.length = n + 1
  1 ≤ nums[i] ≤ n
  All the integers in nums are unique, except for one integer that will appear more than once.
*/

/* SOLUTION */
function findDuplicate(nums) {
	// Find the intersection point.
	let slow = nums[0];
	let fast = nums[nums[0]];

	while (slow !== fast) {
		slow = nums[slow];
		fast = nums[nums[fast]];
	}

	// Find the entrance to the cycle, which is the duplicate element.
	slow = 0;
	while (slow !== fast) {
		slow = nums[slow];
		fast = nums[fast];
	}

	return fast;
}
