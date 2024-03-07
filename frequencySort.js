/* 
  -- INSTRUCTIONS --
  In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

  solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
  -- We sort by highest frequency to lowest frequency.
  -- If two elements have same frequency, we sort by increasing value.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function solve(arr) {
	// Map each number to its frequency
	let freqMap = new Map();
	arr.forEach((num) => {
		freqMap.set(num, (freqMap.get(num) || 0) + 1);
	});

	// Sort the map by frequency (descending order), then by value (ascending order)
	let sortedEntries = [...freqMap].sort((a, b) => {
		// If same frequencies, sort by value in ascending order
		if (a[1] === b[1]) {
			return a[0] - b[0];
		}
		// Otherwise, sort by frequency in descending order
		return b[1] - a[1];
	});

	// Create sorted array by frequency and return.
	let sorted = [];
	sortedEntries.forEach(([num, freq]) => {
		for (let i = 0; i < freq; i++) {
			sorted.push(num);
		}
	});

	return sorted;
}
