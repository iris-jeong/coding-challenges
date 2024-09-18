/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Write an algorithm to determine if a number n is a happy number.
  We use the following process to check if a given number is a happy number:
  Starting with the given number n, replace the number with the sum of the squares of its digits.
  Repeat the process until:
  - The number equals 1, which will depict that the given number n is a happy number.
  - The number enters a cycle, which will depict that the given number n is not a happy number.
  
  Return TRUE if n is a happy number, and FALSE if not.

  Constraints:
  1 ≤ n ≤ 2^31 - 1
*/

/* SOLUTION */
function sumOfSquaredDigits(number) {
	let totalSum = 0;
	while (number > 0) {
		let temp = Math.floor(number / 10),
			digit = number % 10;
		number = temp;
		totalSum += digit ** 2;
	}
	return totalSum;
}

function isHappyNumber(n) {
	// Set up fast and slow pointers.
	let slowPointer = n;
	let fastPointer = sumOfSquaredDigits(n);

	while (fastPointer !== 1 && slowPointer !== fastPointer) {
		slowPointer = sumOfSquaredDigits(slowPointer);
		fastPointer = sumOfSquaredDigits(sumOfSquaredDigits(fastPointer));
	}

	if (fastPointer === 1) {
		return true;
	}

	return false;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let seen = new Set();
	let num = n;

	do {
		let sum = 0;

		// Calculate the sum of the squares of the digits.
		while (num !== 0) {
			let digit = num % 10;
			sum += digit ** 2;
			num = Math.floor(num / 10);
		}

		// If the sum of squares of its digits has been seen, there's a cycle.
		if (seen.has(sum)) return false;

		// Otherwise add it to the set.
		seen.add(sum);

		// Update the num.
		num = sum;
	} while (num !== 1);

	return true;
};
