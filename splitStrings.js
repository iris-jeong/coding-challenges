/* 
  -- INSTRUCTIONS --
  Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

  Examples:
  * 'abc' =>  ['ab', 'c_']
  * 'abcdef' => ['ab', 'cd', 'ef']
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function solution(str) {
	let pairs = [];

	for (let i = 0; i < str.length; i += 2) {
		const firstChar = str[i];
		const secondChar = i + 1 < str.length ? str[i + 1] : "_";
		pairs.push(firstChar + secondChar);
	}

	return pairs;
}
