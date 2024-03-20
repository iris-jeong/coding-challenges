/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given an array of integers, nums, and an integer value, target, determine if there are any three integers in nums whose sum is equal to the target, taht is nums[i] + nums[j] + nums[k] === target.
  Return TRUE if three such integers exist in the array. Otherwise, return FALSE.
*/

/* SOLUTION */
function findSumOfThree(nums, target) {
	nums.sort((a, b) => {
		return a - b;
	});

	for (let i = 0; i < nums.length - 2; i++) {
		let low = i + 1;
		let high = nums.length - 1;

		while (low < high) {
			let triple = nums[i] + nums[low] + nums[high];

			if (triple == target) {
				return true;
			} else if (triple < target) low++;
			else high--;
		}
	}

	return false;
}
