/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given a string, s, that represents a DNA subsequence, and a number k, return all the contiguous subsequences (substrings) of length k that occur more than once in the string. 
  The order of the returned subsequences does not matter. 
  If no repeated substring is found, the function should return an empty set.

  Constraints:
  1 ≤ s.length ≤ 10^4
  s[i] is either A, C, G, or T
  1 ≤ k ≤ 10
*/

/* SOLUTION */
function findRepeatedSequences(s, k) {
	const n = s.length;

	if (n < k) {
		return new Set();
	}

	// Create a hash map that maps each nucleotide to a number.
	const mapping = new Map([
		['A', 1],
		['C', 2],
		['G', 3],
		['T', 4],
	]);

	// Variable to hold the base value.
	let a = 4;

	// Create an array that maps each letter in the given string to its corresponding number.
	// Numeric representation of the given string.
	const numbers = new Array(n);
	for (let i = 0; i < n; i++) {
		numbers[i] = mapping.get(s[i]);
	}

	// Create a hash set to store all of the seen hash numbers.
	let hashSet = new Set();

	// Create a set to store the output.
	let output = new Set();

	// Variable to store the current hash value.
	let hashValue = 0;

	// Iterate through the given string n - k + 1 times.
	for (let i = 0; i < n - k + 1; i++) {
		// Calculate the hash number of the k-length sequence substring
		// If the window is at its initial position, calculate from scratch.
		if (i === 0) {
			for (let j = 0; j < k; j++) {
				hashValue += numbers[j] * Math.pow(a, k - j - 1);
			}
		} else {
			// Otherwise, utilize the previous hash value.
			// Subtract the hash value for the previous nucleotide from the current hash value and add the next nucleotide hash value.
			const prevHashValue = hashValue;
			hashValue =
				(prevHashValue - numbers[i - 1] * Math.pow(a, k - 1)) * a +
				numbers[i + k - 1];
		}

		// If the hash number has been seen, add it to the output.
		if (hashSet.has(hashValue)) {
			output.add(s.substring(i, i + k));
		}

		// Add hash value to hash set.
		hashSet.add(hashValue);
	}

	return output;
}
