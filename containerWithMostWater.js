/* eslint-disable no-unused-vars */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	// Keep track of max water amount.
	let maxWater = 0;

	// Create pointers to the left and right of the array.
	let left = 0,
		right = height.length - 1;

	// Traverse through the array while left is < right.
	while (left < right) {
		// Calculate the amount of water.
		let shorterLine = Math.min(height[left], height[right]);
		let spaceBetween = right - left;
		let amount = shorterLine * spaceBetween;

		// Update the max water if the amount is greater.
		maxWater = Math.max(maxWater, amount);

		// Move the line that is shorter.
		if (shorterLine === height[left]) {
			left++;
		} else {
			right--;
		}
	}

	return maxWater;
};
