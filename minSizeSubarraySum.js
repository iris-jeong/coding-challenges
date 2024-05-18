/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given an array of positive integers, nums, and a positive integer, target, find the minimum length of a contiguous subarray whose sum is greater than or equal to the target. 
  If no such subarray is found, return 0.

  Constraints:
  1 ≤ target ≤ 10^9
  1 ≤ nums.length ≤ 10^5
  1 ≤ nums[i] ≤ 10^4
*/

/* SOLUTION */
function minSubArrayLen(target, nums) {
	let minLength = Infinity;
	let sum = nums[0];
	let left = 0;

	if (sum >= target) return 1;

	// Iterate through the length of the array.
	for (let right = 1; right < nums.length; right++) {
		// Calculate the sum.
		sum += nums[right];

		// If the sum is greater than or equal to target, update min length.
		while (sum >= target) {
			if (sum >= target) {
				minLength = Math.min(minLength, right - left + 1);
			}

			// Move left pointer up.
			sum -= nums[left];
			left++;
		}
	}

	return minLength !== Infinity ? minLength : 0;
}
