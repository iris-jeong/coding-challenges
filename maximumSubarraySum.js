/* 
  -- INSTRUCTIONS --
  The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // should be 6: [4, -1, 2, 1]

  Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
  Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
var maxSequence = function (arr) {
	// Keep track of the max sum found so far and the ending index.
	let currMaxSum = 0;
	let currMaxEnd = 0;

	// Loop through each number in the given array.
	for (let i = 0; i < arr.length; i++) {
		// Update the current max end.
		currMaxEnd = currMaxEnd + arr[i];

		// If it's negative, set it to 0.
		if (currMaxEnd < 0) {
			currMaxEnd = 0;
		}
		// Update current max sum if the current max sum is less than current max end.
		if (currMaxSum < currMaxEnd) {
			currMaxSum = currMaxEnd;
		}
	}

	return currMaxSum;
};
