/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given an array of integers, numbers, compare the sum of the elements on even positions against the sum of elements on odd positions. 
  Return “even” if the sum of elements on even positions is greater, “odd” if the sum of elements on odd positions is greater, or “equal” if both sums are equal.
  
  **Examples:**
  1. For `numbers = [1, 2, 3, 4, 5]`, the output should be `solution(numbers) = "even"`.
    **Explanation:**
    - Sum of elements on even positions is `1 + 3 + 5 = 9`
    - Sum of elements on odd positions is `2 + 4 = 6`
    - `9 >6`, so the expected output is "even".
  2. For `numbers = [-1, 4, 3, 2]`, the output should be `solution(numbers) = "equal"`.
    **Explanation:**
    - Sum of elements on even positions is `(-1) + 3 = 2`
    - Sum of elements on odd positions is `4 + (-2) = 2`
    - `2 = 2` , so the expected output is “equal”.

  **Guaranteed constraints:**
  0 ≤ numbers.length ≤ 1000
  -1000 ≤ numbers[i] ≤ 1000
*/

/* SOLUTION */
function compareSums(numbers) {
	if (numbers.length === 0) {
		return 'equal';
	} else if (numbers.length === 1) {
		return 'even';
	}

	// Create pointers for even and odd positions.
	let even = 0,
		odd = 1;

	// Variables to hold the sums of even and odd numbers.
	let evenSum = 0,
		oddSum = 0;

	// Iterate through numbers array while the pointers are less than length of array.
	while (even < numbers.length) {
		// Sum even and odd numbers.
		evenSum += numbers[even];
		oddSum += numbers[odd] ? numbers[odd] : 0;

		// Increment pointers.
		even += 2;
		odd += 2;
	}

	// If the sum of even is greater, return even.
	if (evenSum > oddSum) {
		return 'even';
	} else if (oddSum > evenSum) {
		// Else if the sum of odd is greater, return odd.
		return 'odd';
	}

	// Else return equal.
	return 'equal';
}
