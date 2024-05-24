/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  For two arrays of closed intervals given as input, intervalListA and intervalListB, where each interval has its own start and end time, write a function that returns the intersection of the two interval arrays.
  For example, the intersection of [3,8][3,8] and [5,10][5,10] is [5,8][5,8].

  Constraints:
  0 ≤ intervalListA.length, intervalListB.length ≤ 1000
  0 ≤ start[i] < end[i] ≤ 10^9, where i is used to indicate intervalListA
  end[i] ≤ start[i + 1]
  0 ≤ start[j] < end[j] ≤ 10^9, where j is used to indicate intervalListJ
  end[j] ≤ start[j + 1]
*/

/* SOLUTION */
function intervalsIntersection(intervalListA, intervalListB) {
	// Array to hold intersections.
	let intersections = [];

	// Pointers to the start of each list.
	let i = 0,
		j = 0;

	// Iterate until the end of one or both of the lists.
	while (i < intervalListA.length && j < intervalListB.length) {
		// If intervalListB start is less than or equal to intervalListA end, there's an overlap so add the intersection to the output array.
		// Take whichever start is greater.
		const start = Math.max(intervalListA[i][0], intervalListB[j][0]);
		// Take whichever end is smaller.
		const end = Math.min(intervalListA[i][1], intervalListB[j][1]);

		// Make sure the start is less than or equal to the end.
		if (start <= end) {
			intersections.push([start, end]);
		}

		// Update the pointers.
		// If the end of list A is smaller than the end of list B, move list A's pointer forward.
		if (intervalListA[i][1] < intervalListB[j][1]) {
			i++;
		} else {
			// Otherwise move list B's pointer forward.
			j++;
		}
	}

	return intersections;
}
