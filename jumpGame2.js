/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	let jumps = 0;
	let farthest = 0; // The farthest index that can be reached.
	let currentEnd = 0; // The end of the current jump's range.

	for (let i = 0; i < nums.length; i++) {
		// Update the farthest index you can reach.
		farthest = Math.max(farthest, i + nums[i]);

		// When you reach the end of the current jump range, make another jump.
		if (i === currentEnd) {
			jumps++;
			currentEnd = farthest;

			// If the farthest you can reach is beyond or at the last index, stop.
			if (currentEnd >= nums.length - 1) break;
		}
	}

	return jumps;
};
