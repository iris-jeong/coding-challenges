/* 
  -- INSTRUCTIONS --
  Given an array of integers, find the one that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.

  Examples
  [7] should return 7, because it occurs 1 time (which is odd).
  [0] should return 0, because it occurs 1 time (which is odd).
  [1,1,2] should return 2, because it occurs 1 time (which is odd).
  [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
  [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function findOdd(A) {
	// Approach: For each number, count up how many times it appears in the array and return the one that appears an odd number of times.

	// Create an object to keep track of number occurrences.
	let numberCounts = {};

	// Count up the occurrences.
	for (const number of A) {
		if (numberCounts[number]) {
			numberCounts[number]++;
		} else {
			numberCounts[number] = 1;
		}
	}

	// Find the number with the odd occurrences and return.
	for (const number in numberCounts) {
		if (numberCounts[number] % 2 !== 0) {
			return parseInt(number);
		}
	}
	return 0;
}
