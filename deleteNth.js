/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
  For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
  With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

/* SOLUTION */
function deleteNth(arr, n) {
	// Create a map that will map each number to the num of occurrences.
	let occurrences = new Map();

	// Create a variable to hold the return array
	let returnArr = [];

	// Iterate through the array
	for (let i = 0; i < arr.length; i++) {
		let count = occurrences.get(arr[i]) || 0;
		// If the count is less than the input number, add it to the return array
		if (count < n) {
			returnArr.push(arr[i]);
			occurrences.set(arr[i], count + 1);
		}
	}

	// Return the array
	return returnArr;
}
