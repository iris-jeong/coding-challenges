/**
 * @param {number[]} nums
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
var removeDuplicates2 = function (nums) {
	if (nums.length <= 2) {
		return nums.length;
	}

	let k = 1; // Pointer for the position of the next valid element.
	let count = 1; // Occurrences of the current element.

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			count++;
		} else {
			count = 1;
		}

		if (count <= 2) {
			nums[k] = nums[i];
			k++;
		}
	}

	return k;
};
