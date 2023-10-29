/* 
  -- INSTRUCTIONS --
  Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

  Example:
  input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
  ouptut: 5 
  The most frequent number in the array is -1 and it occurs 5 times.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function mostFrequentItemCount(collection) {
	// Create a map of key val pairs of integers and the number of occurrences.
	let integerMap = new Map();

	// Create a variable to keep track of the most frequent occurrence.
	let mostOccurrence = 0;

	// Loop through the array and count how many times each integer occurs.
	for (let i = 0; i < collection.length; i++) {
		if (integerMap.has(collection[i])) {
			integerMap.set(collection[i], integerMap.get(collection[i]) + 1);
		} else {
			integerMap.set(collection[i], 1);
		}

		if (integerMap.get(collection[i]) > mostOccurrence) {
			mostOccurrence = integerMap.get(collection[i]);
		}
	}

	return mostOccurrence;
}
