/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given a sorted list of nonoverlapping intervals and a new interval, your task is to insert the new interval into the correct position while ensuring that the resulting list of intervals remains sorted and nonoverlapping. 
  Each interval is a pair of nonnegative numbers, the first being the start time and the second being the end time of the interval.

  Constraints:
  0 ≤ existing_intervals.length ≤ 10^4
  existing_intervals[i].length, new_interval[i].length == 2
  0 ≤ start time ≤ end time  ≤ 10^4
  The list of intervals is sorted in ascending order based on the start time.
*/

/* SOLUTION */
function insertInterval(existingIntervals, newInterval) {
	let newStart = newInterval[0];
	let newEnd = newInterval[1];
	let output = [];

	// Iterate through the existing intervals and append all intervals occurring before the new interval to the output list.
	let i = 0;
	while (i < existingIntervals.length && newStart > existingIntervals[i][0]) {
		output.push(existingIntervals[i]);
		i++;
	}

	// Check if there is an overlap between the last interval in the output list and the new interval.
	if (!output.length || output[output.length - 1][1] < newStart) {
		output.push(newInterval);
	} else {
		output[output.length - 1][1] = Math.max(
			output[output.length - 1][1],
			newEnd
		);
	}

	// Continue iterating through the remaining intervals and merge any overlapping intervals with the last interval in the output list.
	while (i < existingIntervals.length) {
		let ei = existingIntervals[i];
		let start = ei[0];
		let end = ei[1];

		if (output[output.length - 1][1] < start) {
			output.push(ei);
		} else {
			output[output.length - 1][1] = Math.max(
				output[output.length - 1][1],
				end
			);
		}
		i++;
	}

	return output;
}
