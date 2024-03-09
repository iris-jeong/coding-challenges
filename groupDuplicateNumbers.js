/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.
  Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:
  group([3, 2, 6, 2, 1, 3])
  >>> [[3, 3], [2, 2], [6], [1]]
  Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
*/

/* SOLUTION */
function group(arr) {
	// Return empty array
	if (arr.length === 0) return arr;

	// Map each number to its frequency count.
	let freqMap = new Map();
	arr.forEach((num) => {
		freqMap.set(num, (freqMap.get(num) || 0) + 1);
	});

	let groupedArr = [];
	let groupedIdx = 0;
	// Create the grouped arrays.
	for (const [key, val] of freqMap.entries()) {
		let group = [];
		for (let i = 0; i < val; i++) {
			group.push(key);
		}
		groupedArr.push(group);
		groupedIdx++;
	}

	return groupedArr;
}
