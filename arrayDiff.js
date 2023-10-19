/* 
  -- INSTRUCTIONS --
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function arrayDiff(a, b) {
	// Approach: Check each item in list a against all numbers in b. If the item in list a isn't included in list b, add it to returning array.

	// Create a variable to hold the returning array.
	let newList = [];

	// Check if each item in a is in list b.
	for (let i = 0; i < a.length; i++) {
		// If it isn't, add to returning array.
		if (!b.includes(a[i])) {
			newList.push(a[i]);
		}
	}

	return newList;
}
