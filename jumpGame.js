/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let maxReach = 0;

	for (let i = 0; i < nums.length; i++) {
		// If the current index is beyond the farthest reachable index, return false.
		if (i > maxReach) {
			return false;
		}
		// Update the farthest index we can reach from the current position.
		maxReach = Math.max(maxReach, i + nums[i]);

		// If the farthest we can reach is beyond or at the last index, return true.
		if (maxReach >= nums.length - 1) {
			return true;
		}
	}
	return false;
};
