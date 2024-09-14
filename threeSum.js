/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	// Sort the nums array in ascending order.
	nums.sort((a, b) => a - b);

	// Traverse the nums array.
	let result = [];
	for (let start = 0; start < nums.length - 2; start++) {
		// Skip duplicate elements for the start pointer.
		if (start > 0 && nums[start] === nums[start - 1]) continue;

		let mid = start + 1;
		let end = nums.length - 1;

		while (mid < end) {
			// Calculate sum.
			let sum = nums[start] + nums[mid] + nums[end];

			// If sum adds up to 0, add to result.
			if (sum === 0) {
				result.push([nums[start], nums[mid], nums[end]]);

				// Move the mid pointer and skip duplicates.
				while (mid < end && nums[mid] === nums[mid + 1]) mid++;

				// Move the end pointer and skip duplicates.
				while (mid < end && nums[end] === nums[end - 1]) end--;

				// Move both pointers after finding valid triplet.
				mid++;
				end--;
			} else if (sum < 0) {
				// If the sum is less than 0, move the mid pointer up.
				mid++;
			} else if (sum > 0) {
				// Else if the sum is greater than 0 move end pointer down.
				end--;
			}
		}
	}

	return result;
};
