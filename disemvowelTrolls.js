/* 
  -- INSTRUCTIONS --
  Trolls are attacking your comment section!
  A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
  Your task is to write a function that takes a string and return a new string with all vowels removed.

  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

  Note: for this kata y isn't considered a vowel.
*/

/* SOLUTION */
function disemvowel(str) {
	// Approach: Create a new string by adding all non-vowels.

	// Create an array with all vowels.
	const vowels = ["a", "e", "i", "o", "u"];

	// Initialize the return string.
	let newStr = "";

	// Iterate through the given string.
	for (let i = 0; i < str.length; i++) {
		//Add any letters that aren't vowels to the return string. (Make sure to remove case sensitivity.)
		if (!vowels.includes(str[i].toLowerCase())) {
			newStr = newStr + str[i];
		}
	}

	// Return the newly created string.
	return newStr;
}
