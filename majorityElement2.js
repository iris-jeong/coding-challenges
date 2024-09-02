/**
 * @param {number[]} nums
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
var majorityElement = function (nums) {
	let candidate1 = null,
		candidate2 = null;
	let count1 = 0,
		count2 = 0;

	// Find potential candidates.
	for (let num of nums) {
		// If the current number is the same as candidate1, increment the count.
		if (candidate1 !== null && num === candidate1) {
			count1++;
		} else if (candidate2 !== null && num === candidate2) {
			// If the current number is the same as candidate2, increment the count.
			count2++;
		} else if (count1 === 0) {
			candidate1 = num;
			count1 = 1;
		} else if (count2 === 0) {
			candidate2 = num;
			count2 = 1;
		} else {
			count1--;
			count2--;
		}
	}

	// Validate the candidates.
	count1 = 0;
	count2 = 0;

	for (let num of nums) {
		if (num === candidate1) {
			count1++;
		} else if (num === candidate2) {
			count2++;
		}
	}

	// Prepare the result based on the actual counts.
	let result = [];
	let n = nums.length;

	if (count1 > Math.floor(n / 3)) {
		result.push(candidate1);
	}

	if (count2 > Math.floor(n / 3)) {
		result.push(candidate2);
	}

	return result;
};
