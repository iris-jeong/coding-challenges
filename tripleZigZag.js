/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.
  Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. More formally, your task is to construct an array of length numbers.length - 2, where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.

  Example:
  For numbers = [1, 2, 1, 3, 4], the output should be solution(numbers) = [1, 1, 0].
  (numbers[0], numbers[1], numbers[2]) = (1, 2, 1) is a zigzag, because 1 < 2 > 1;
  (numbers[1], numbers[2] , numbers[3]) = (2, 1, 3) is a zigzag, because 2 > 1 < 3;
  (numbers[2], numbers[3] , numbers[4]) = (1, 3, 4) is not a zigzag, because 1 < 3 < 4;
  For numbers = [1, 2, 3, 4], the output should be solution(numbers) = [0, 0];

  Since all the elements of numbers are increasing, there are no zigzags.
  For numbers = [1000000000, 1000000000, 1000000000], the output should be solution(numbers) = [0].
  Since all the elements of numbers are the same, there are no zigzags.

  Input/Output
  [execution time limit] 4 seconds (js)
  [memory limit] 1 GB
  [input] array.integer numbers
  An array of integers.

  Guaranteed constraints:
  3 ≤ numbers.length ≤ 100,
  1 ≤ numbers[i] ≤ 109.
  [output] array.integer
  Return an array, where the ith element equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.
*/

/* SOLUTION */
function tripleZigZag(numbers) {
	// Create pointers for the start, middle, and end.
	let curr = 1;
	let start = curr - 1;
	let end = curr + 1;

	// Create variable to hold the output array.
	let output = [];

	// Iterate through the numbers array.
	while (end != numbers.length) {
		// Check if it's a zigzag.
		if (
			(numbers[start] < numbers[curr] && numbers[curr] > numbers[end]) ||
			(numbers[start] > numbers[curr] && numbers[curr] < numbers[end])
		) {
			// If it is, add 1 to output array.
			output.push(1);
		} else {
			// Else, add 0 to output array.
			output.push(0);
		}
		// Increment pointers.
		curr++;
		start = curr - 1;
		end = curr + 1;
	}

	return output;
}
