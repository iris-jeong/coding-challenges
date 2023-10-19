/* 
  -- INSTRUCTIONS --
  You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
  Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

  []                                -->  "no one likes this"
  ["Peter"]                         -->  "Peter likes this"
  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
  Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function likes(names) {
	// Approach: Depending on how many people like something, create a different string for output.

	// If no one likes it.
	if (names.length === 0) {
		return "no one likes this";
	}
	// If one person likes it.
	if (names.length === 1) {
		return names[0] + " likes this";
	}
	// If two people like it.
	if (names.length === 2) {
		return names[0] + " and " + names[1] + " like this";
	}
	// If three people like it.
	if (names.length === 3) {
		return names[0] + ", " + names[1] + " and " + names[2] + " like this";
	}
	// If four or more people like it.
	if (names.length > 3) {
		const numPeople = names.length - 2;
		return (
			names[0] +
			", " +
			names[1] +
			" and " +
			numPeople +
			" others like this"
		);
	}
}
