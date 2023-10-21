/* 
  -- INSTRUCTIONS --
  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
  
  Example:
  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function moveZeros(arr) {
	// Approach: Create a new array that will push each item into the new array unless it's a 0. Count the number of times 0 appears. Push that number of 0's in the array at the end.

	// Create new array.
	let sortedArr = [];

	// Create a count variable.
	let zeroCount = 0;

	// Loop through the given array.
	for (let i = 0; i < arr.length; i++) {
		// If the current item is a 0, add to the count.
		if (arr[i] === 0) {
			zeroCount++;
		} else {
			// If the current item isn't a 0, add item to the sorted array.
			sortedArr.push(arr[i]);
		}
	}

	// For each zero, add it to the sorted array.
	for (let i = 0; i < zeroCount; i++) {
		sortedArr.push(0);
	}

	return sortedArr;
}
