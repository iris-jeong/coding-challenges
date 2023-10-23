/* 
  -- INSTRUCTIONS --
	Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

	Examples:
	spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
	spinWords( "This is a test") => returns "This is a test" 
	spinWords( "This is another test" )=> returns "This is rehtona test"
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function spinWords(string) {
	// Approach: Turn the string into an array, reverse any items with length >= 5. Turn it back into a string and return.

	// Convert given string into an array.
	let arr = string.split(" ");

	// Loop through the array
	for (let i = 0; i < arr.length; i++) {
		// Check if item length is >= 5.
		if (arr[i].length >= 5) {
			// Reverse the string and update the array with it.
			let reversedStr = arr[i].split("").reverse().join("");
			arr[i] = reversedStr;
		}
	}

	// Return the updated string.
	return arr.join(" ");
}
