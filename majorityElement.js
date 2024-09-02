/**
 * @param {number[]} nums
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
var majorityElement = function (nums) {
	let candidate = null;
	let count = 0;

	for (let num of nums) {
		// If the count is 0, choose the current number as the new candidate.
		if (count === 0) {
			candidate = num;
			count++;
		} else if (num === candidate) {
			// If the current num is the same as candidate, increase the count.
			count++;
		} else {
			// If the current num is different from candidate, decrease the count.
			count--;
		}
	}

	// The candidate that's left after the loop will be the majority element.
	return candidate;
};
