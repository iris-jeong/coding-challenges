/* 
  -- INSTRUCTIONS --
  Return the number (count) of vowels in the given string.
  
  We will consider a, e, i, o, u as vowels for this Kata (but not y).
  The input string will only consist of lower case letters and/or spaces.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function getCount(str) {
	//Initalize vowel count.
	let vowelCount = 0;

	//Create an array with the vowels to check the string against.
	const vowels = ["a", "e", "i", "o", "u"];

	//Iterate through the given string.
	for (let i = 0; i < str.length; i++) {
		//Check if the letter is in the vowels array.
		if (vowels.includes(str[i])) {
			//Add to vowel count if letter is in the vowels array.
			vowelCount++;
		}
	}

	//Return the count.
	return vowelCount;
}
