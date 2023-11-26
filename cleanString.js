/* 
  -- INSTRUCTIONS --
  Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
  Your task is to process a string with "#" symbols.
  
  Examples:
  "abc#d##c"      ==>  "ac"
  "abc##d######"  ==>  ""
  "#######"       ==>  ""
  ""              ==>  ""
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function cleanString(s) {
	let cleanStr = "";
	// Loop through the given string.
	for (let char of s) {
		// If it's not '#', add the char to the clean string.
		if (char !== "#") {
			cleanStr += char;
		} else {
			// Else, if there are characters in the clean string, remove the last character.
			if (cleanStr.length > 0) {
				cleanStr = cleanStr.slice(0, cleanStr.length - 1);
			}
		}
	}

	return cleanStr;
}
