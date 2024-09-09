/* eslint-disable no-unused-vars */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	if (height.length === 0) return 0;

	let left = 0,
		right = height.length - 1;
	let leftMax = 0,
		rightMax = 0;
	let rain = 0;

	while (left < right) {
		if (height[left] < height[right]) {
			if (height[left] >= leftMax) {
				leftMax = height[left];
			} else {
				rain += leftMax - height[left];
			}
			left++;
		} else {
			if (height[right] >= rightMax) {
				rightMax = height[right];
			} else {
				rain += rightMax - height[right];
			}
			right--;
		}
	}

	return rain;
};
