/* eslint-disable no-unused-vars */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
	let candies = new Array(ratings.length).fill(1);

	// Left to right pass.
	for (let i = 1; i < ratings.length; i++) {
		if (ratings[i] > ratings[i - 1]) {
			candies[i] = candies[i - 1] + 1;
		}
	}

	// Right to left pass.
	for (let i = ratings.length - 2; i >= 0; i--) {
		if (ratings[i] > ratings[i + 1]) {
			candies[i] = Math.max(candies[i], candies[i + 1] + 1);
		}
	}

	// Sum up candies and return.
	return candies.reduce((a, b) => a + b, 0);
};
