/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const n = nums.length;
	k = k % n; // Handle cases where k > n.

	// Create a reverse helper function.
	function reverse(start, end) {
		while (start < end) {
			[nums[start], nums[end]] = [nums[end], nums[start]];
			start++;
			end--;
		}
	}

	// Reverse the entire array.
	reverse(0, n - 1);

	// Reverse the first k elements.
	reverse(0, k - 1);

	// Reverse the remaining n - k elements.
	reverse(k, n - 1);
};
