/* 
  -- INSTRUCTIONS --
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
  The sum of these multiples is 23.

  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
  Additionally, if the number is negative, return 0.

  Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// eslint-disable-next-line no-unused-vars
function solution(number) {
	// Approach: Calculate all the multiples of 3 and 5 below a given number then add them.

	// If the number is negative return 0.
	if (number < 0) {
		return 0;
	}
	// Divide the given number by 3 and by 5.
	const numMultiplesOf3 = Math.floor(number / 3);
	const numMultiplesOf5 = Math.floor(number / 5);

	// Create a set to hold all the multiples.
	let multiples = new Set();

	// Multiply 3 by each number of multiples there are and add it to the set.
	for (let i = 1; i < numMultiplesOf3 + 1; i++) {
		multiples.add(3 * i);
	}

	// Multiply 5 by each number of multiples there are and add it to the set.
	for (let i = 1; i < numMultiplesOf5 + 1; i++) {
		multiples.add(5 * i);
	}

	// Sum up all the numbers in the set that are less than the given number.
	let sum = 0;
	for (const multiple of multiples) {
		if (multiple < number) {
			sum += multiple;
		}
	}

	//Return the sum.
	return sum;
}
