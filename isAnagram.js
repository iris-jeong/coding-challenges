/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
  An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

/* SOLUTION */
class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {boolean}
	 */
	isAnagram(s, t) {
		// If s.length != t.length, return false.
		if (s.length !== t.length) return false;

		// Create a map to count the occurrences of chars in s.
		let sMap = new Map();
		for (let char of s) {
			sMap.set(char, sMap.get(char) + 1 || 1);
		}

		// Create a map to count the occurrences of chars in t.
		let tMap = new Map();
		for (let char of t) {
			tMap.set(char, tMap.get(char) + 1 || 1);
		}
		// Iterate through the sMap and check for the letter in tMap and see if they have the same occurrence.
		for (const [key, val] of sMap) {
			if (!tMap.get(key) || tMap.get(key) !== val) {
				return false;
			}
		}

		// Return true.
		return true;
	}
}
