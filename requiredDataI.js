/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  We need a function that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented below:
  [(1), (2), (3), [[(4)], 5]]
  (1) - Total amount of received integers.
  (2) - Total amount of different values the array has.
  (3) - Total amount of values that occur only once.
  (4) and (5) both in a list
  (4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, the elements should be sorted (by their value obviously)
  (5) - Maximum occurrence of the integer(s)
*/

/* SOLUTION */
function countSel(array) {
	let result = [];

	// (1) Total amount of received integers
	result.push(array.length);

	// Map each number to its occurrences
	let occurrences = new Map();
	array.forEach((num) => {
		occurrences.set(num, (occurrences.get(num) || 0) + 1);
	});

	// (2) Total amount of different values the array has
	result.push(occurrences.size);

	// (3) Total amount of values that occur only once
	let singleOccurrenceCount = [...occurrences.values()].filter(
		(count) => count === 1
	).length;
	result.push(singleOccurrenceCount);

	// (4) and (5) Maximum occurrence and the elements with that occurrence
	let maxOccurrence = Math.max(...occurrences.values());
	let maxOccurrenceElements = [...occurrences]
		.filter(([num, count]) => count === maxOccurrence)
		.map(([num]) => num)
		.sort((a, b) => a - b);
	result.push([maxOccurrenceElements, maxOccurrence]);

	return result;
}
