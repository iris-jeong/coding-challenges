/* eslint-disable no-unused-vars */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxProfit = 0;

	// If there are fewer than one price, return no profit.
	if (prices.length <= 1) {
		return maxProfit;
	}

	let lowestPrice = prices[0];
	for (let i = 1; i < prices.length; i++) {
		let currentPrice = prices[i];

		// If the current price is lower, update the lowest prices.
		if (currentPrice < lowestPrice) {
			lowestPrice = currentPrice;
		} else if (currentPrice - lowestPrice > maxProfit) {
			// Else if the difference of the current price and the lowest price > maxProfit, update maxProfit.
			maxProfit = currentPrice - lowestPrice;
		}
	}

	return maxProfit;
};
