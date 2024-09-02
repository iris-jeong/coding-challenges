/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
var removeElement = function (nums, val) {
	// Pointer to track the position of the next non-val element.
	let k = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[k] = nums[i]; // Place the element at index k.
			k++;
		}
	}

	return k;
};
