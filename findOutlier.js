/* 
  -- INSTRUCTIONS --
  You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
  The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
  Write a method that takes the array as an argument and returns this "outlier" N.

  Examples:
  [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
  [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function findOutlier(integers) {
	// Approach: Figure out whether the integers in the array are odd or even. Then find the outlier.

	// Check for two of three integers that are either odd or even.
	let count = { isOdd: 0, isEven: 0 };
	for (let i = 0; i < 3; i++) {
		if (integers[i] % 2 === 0) {
			count["isEven"]++;
		} else {
			count["isOdd"]++;
		}
	}
	const isOddIntegers = count["isOdd"] > 1 ? true : false;

	// Loop through the array to find the outlier.
	let outlier;
	for (let i = 0; i < integers.length; i++) {
		// If the array contains odd integers but the current number is even.
		if (isOddIntegers && integers[i] % 2 === 0) {
			outlier = integers[i];
			break;
		}
		// If the array contains even integers but the current number is odd.
		if (!isOddIntegers && integers[i] % 2 !== 0) {
			outlier = integers[i];
			break;
		}
	}

	return outlier;
}
