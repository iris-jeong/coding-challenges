/* 
  -- INSTRUCTIONS --
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example:
  "camelCasing"  =>  "camel Casing"
  "identifier"   =>  "identifier"
  ""             =>  ""
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function solution(string) {
	const lowerA = "a".charCodeAt(0);
	const lowerZ = "z".charCodeAt(0);
	const upperA = "A".charCodeAt(0);
	const upperZ = "Z".charCodeAt(0);

	let newStr = "";

	string.split("").forEach((letter) => {
		if (letter.charCodeAt(0) >= lowerA && letter.charCodeAt(0) <= lowerZ) {
			newStr += letter;
		} else if (
			letter.charCodeAt(0) >= upperA &&
			letter.charCodeAt(0) <= upperZ
		) {
			newStr += " ";
			newStr += letter;
		}
	});

	return newStr;
}
