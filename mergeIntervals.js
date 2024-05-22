/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  We are given an array of closed intervals, intervals, where each interval has a start time and an end time. The input array is sorted with respect to the start times of each interval. 
  For example, intervals = [[1,4], [3,6], [7,9]][ [1,4], [3,6], [7,9]] is sorted in terms of start times 1, 3, and 7.
  Your task is to merge the overlapping intervals and return a new output array consisting of only the non-overlapping intervals.

  Constraints:
  We can’t sell before buying a stock, that is, the array index at which stock is bought will always be less than the index at which the stock is sold.
  1 ≤ intervals.length ≤ 10^4
  intervals[i].length = 2
  0 ≤ start time ≤ end time  ≤ 10^4
*/

/* SOLUTION */
function mergeIntervals(intervals) {
	let result = [];
	// Insert the first interval from the input list into the output list.
	result.push(intervals[0]);

	// Variables to hold the interval start and end.
	let intervalStart = intervals[0][0];
	let intervalEnd = intervals[0][1];

	//Start a loop to iterate over each interval of the input list, except for the first.
	for (let i = 1; i < intervals.length; i++) {
		let currStart = intervals[i][0];
		let currEnd = intervals[i][1];

		// If the current interval is overlapping with the last interval in the output list, merge these two intervals.
		if (currStart <= intervalEnd) {
			intervalEnd = Math.max(intervalEnd, currEnd);
			// Update the last interval with the merged interval.
			result[result.length - 1] = [intervalStart, intervalEnd];
		} else {
			// Otherwise, if the current interval does not overlap with the last interval in the output list, add the current interval to the output list.
			intervalStart = currStart;
			intervalEnd = currEnd;
			result.push(intervals[i]);
		}
	}

	return result;
}
