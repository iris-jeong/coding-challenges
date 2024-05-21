/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given an array where the element at the index i represents the price of a stock on day i, find the maximum profit that you can gain by buying the stock once and then selling it.
  Note: You can buy the stock on one specific day and sell it on a different day to make a profit. If no profit can be achieved, we return zero.

  Constraints:
  We can’t sell before buying a stock, that is, the array index at which stock is bought will always be less than the index at which the stock is sold.
  1 ≤ prices.length ≤ 10^3
  0 ≤ prices[i] ≤ 10^5
*/

/* SOLUTION */
function maxProfit(prices) {
	let maxProfit = 0;
	let buy = 0;

	// Iterate the sell pointer over the prices, computing the current profit.
	for (let sell = 0; sell < prices.length; sell++) {
		let currProfit = prices[sell] - prices[buy];

		// If the buy price is less than the sell prices, update max profit.
		if (prices[buy] < prices[sell]) {
			maxProfit = Math.max(maxProfit, currProfit);
		} else {
			// Otherwise reset the buying day to the current day because we want to take advantage of low price.
			// Any previous higher purchases would not be beneficial for maximizing profit.
			buy = sell;
		}
	}

	return maxProfit;
}
