/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  You are given a matrix numbers  which contains only digits from 1 to 9.  Consider a sliding window of size 3 x 3 which is sliding from left to right through the matrix. The sliding window has n - 2 positions when sliding through the initial matrix.
  Your test is to find whether or not each sliding window position contains all the numbers from 1 to 9 inclusive. Return an array of length n - 1 where the ith element is true if the ith state of the sliding window contains all the numbers 1 to 9 , and false otherwise.

  Example:
  For
    numbers = [ [1, 2, 3, 2, 5, 7],
    						[4, 5, 6, 1, 7, 6],
  	  					[7, 8, 9, 4, 8, 3]];
  the output should be solutions(numbers) = [true, false, true, false].

  Explanation:
  - The 1st state contains all digits from 1 - 9.
  - The 2nd state doesn’t contain digit 7.
  - The 3rd state contains all digits from 1 - 9.
  - The 4th state doesn’t contain digit 9.
  Summary, there are four states of the sliding window, and the resulted array is [true, false, true, false].
*/

/* SOLUTION */
function matrixNums(numbers) {
	// Set to keep track of numbers that have been seen.
	let numsSeen = new Set();

	// Variable to hold the output array.
	let output = [];

	// Pointer to keep position of each element in the row.
	let pos = 0;

	// Iterate through the numbers array while the pointer is less than numbers[i].length.
	while (pos < numbers[0].length - 2) {
		// For each number in the row of the sliding window, add it to the set.
		for (let i = pos; i < pos + 3; i++) {
			numsSeen.add(numbers[0][i]);
			numsSeen.add(numbers[1][i]);
			numsSeen.add(numbers[2][i]);
		}

		// If the set length is 9, add true to output array.
		output.push(numsSeen.size === 9 ? true : false);

		// Reset the number seen set.
		numsSeen.clear();

		// Increment sliding window position.
		pos++;
	}

	return output;
}
