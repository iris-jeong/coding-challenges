/* 
  -- INSTRUCTIONS --
 There is an array of strings. All strings contains similar letters except one. Try to find it!

  findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
  findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
  Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

  It’s guaranteed that array contains more than 2 strings.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function findUniq(arr) {
	// Create a function to normalize the string and get a sorted set of unique characters from the string.
	const getCharSet = (str) =>
		[...new Set(str.replace(/\s/g, "").toLowerCase())].sort().join("");

	// Create a map to count the occurrences of each character set.
	const charSetCount = new Map();

	// Fill the map with the counts.
	for (let str of arr) {
		let charSet = getCharSet(str);
		charSetCount.set(charSet, (charSetCount.get(charSet) || 0) + 1);
	}

	// Find the character set with only one occurrence.
	for (let [charSet, count] of charSetCount) {
		if (count === 1) {
			// Find and return the original string with this character set.
			return arr.find((str) => getCharSet(str) === charSet);
		}
	}
}
