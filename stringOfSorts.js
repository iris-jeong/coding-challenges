/* 
  -- INSTRUCTIONS --
  Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.
  sortString("foos", "of")       => "oofs"
  sortString("string", "gnirts") => "gnirts"
  sortString("banana", "abn")    => "aaabnn"
  To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.
  Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function sortString(string, ordering) {
	let orderingSet = new Set(ordering);
	let charCount = {};
	let sorted = [];
	let unmatched = [];

	// Count the occurrences of each character in 'string'.
	for (let char of string) {
		charCount[char] = (charCount[char] || 0) + 1;
	}
	// Construct the sorted part.
	for (let char of orderingSet) {
		if (charCount[char]) {
			sorted.push(char.repeat(charCount[char]));
		}
	}
	// Handle the unmatched characters.
	for (let char of string) {
		if (!ordering.includes(char)) {
			unmatched.push(char);
		}
	}

	return sorted.join("") + unmatched.join("");
}
