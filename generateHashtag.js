/* 
  -- INSTRUCTIONS --
  The marketing team is spending way too much time typing in hashtags.
  Let's help them with our own Hashtag Generator!

  Here's the deal:
  It must start with a hashtag (#).
  All words must have their first letter capitalized.
  If the final result is longer than 140 chars it must return false.
  If the input or the result is an empty string it must return false.

  Examples:
  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
  "    Hello     World   "                  =>  "#HelloWorld"
  ""                                        =>  false
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function generateHashtag(str) {
	// Approach: Convert the given string into an array of words and capitalize each letter of the first word. Join it into a single word with a hashtag at the beginning.

	// Return false if str is empty.
	if (str.trim().length < 1) {
		return false;
	}

	// Convert string into an array of words.
	let words = str.trim().split(" ");

	// Capitalize the first letter of each word.
	let capitalizedWords = [];
	words.forEach((word) => {
		if (word !== "") {
			const capitalizedWord = word[0].toUpperCase() + word.slice(1);
			capitalizedWords.push(capitalizedWord);
		}
	});

	// Flatten the array into a single word string with hashtag in front.
	const hashtag = "#" + capitalizedWords.join("");

	// If the result is longer than 140 chars return false.
	if (hashtag.length > 140) {
		return false;
	}
	// Else, return the hashtag string.
	return hashtag;
}
