/* 
  -- INSTRUCTIONS --
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  Example 1:
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  Example 2:
  Input: strs = [""]
  Output: [[""]]
  Example 3:
  Input: strs = ["a"]
  Output: [["a"]]
  
  Constraints:
  1 <= strs.length <= 104
  0 <= strs[i].length <= 100
  strs[i] consists of lowercase English letters.
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
var groupAnagrams = function (strs) {
	// Create return array
	let groupedAnagrams = [];

	// Create a map of anagrams
	let map = new Map();

	// Loop through the given strs array
	for (let str of strs) {
		// Sort the string
		const sorted = str.split('').sort().join('');

		// If the string is in the map, add the unsorted word to the grouped anagrams array
		if (map.has(sorted)) {
			const index = map.get(sorted);
			groupedAnagrams[index].push(str);
		} else {
			// Else, add the unsorted word to the grouped anagrams array with the index of the group using the grouped anagrams length and add to the map.
			const index = groupedAnagrams.length;
			map.set(sorted, index);
			groupedAnagrams.push([str]);
		}
	}

	return groupedAnagrams;
};
