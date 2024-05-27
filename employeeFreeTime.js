/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  You’re given a list containing the schedules of multiple employees. 
  Each person’s schedule is a list of non-overlapping intervals in sorted order. 
  An interval is specified with the start and end time, both being positive integers. 
  Your task is to find the list of finite intervals representing the free time for all the employees.

  Constraints:
  1 ≤ schedule.length, schedule[i].length ≤ 50
  0 ≤ interval.start < interval.end  ≤ 10^8, where interval is any interval in the list of schedules.
*/

/* SOLUTION */

function employeeFreeTime(schedule) {
	// Flatten the list of schedules (combine all the intervals from each employee into a single list).
	const allIntervals = [];
	for (const employeeSchedule of schedule) {
		for (const interval of employeeSchedule) {
			allIntervals.push(interval);
		}
	}

	// Sort the intervals by their start time.
	allIntervals.sort((a, b) => a[0] - b[0]);

	// Merge overlapping intervals.
	const mergedIntervals = [];
	for (const interval of allIntervals) {
		// If mergedIntervals is empty or if the end time of the last interval in mergedIntervals is less than the start of the current interval, there's no overlap so add the current interval to mergedIntervals.
		if (
			!mergedIntervals.length ||
			mergedIntervals[mergedIntervals.length - 1][1] < interval[0]
		) {
			mergedIntervals.push(interval);
		} else {
			// Otherwise there's an overlap so update the end of the last interval in mergedIntervals.
			mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
				mergedIntervals[mergedIntervals.length - 1][1],
				interval[1]
			);
		}
	}
	// Find the gaps between the merged intervals to get the free time.
	const freeTime = [];
	// For each interval, compare the end time of the previous interval with the start time of the current interval.
	for (let i = 1; i < mergedIntervals.length; i++) {
		const prevEnd = mergedIntervals[i - 1][1];
		const currStart = mergedIntervals[i][0];
		if (prevEnd < currStart) {
			freeTime.push([prevEnd, currStart]);
		}
	}
	return freeTime;
}
