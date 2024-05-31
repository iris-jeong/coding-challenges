/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

  The input string s is valid if and only if:
  Every open bracket is closed by the same type of close bracket.
  Open brackets are closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
  Return true if s is a valid string, and false otherwise.
*/

/* SOLUTION */
class Solution {
	/**
	 * @param {string} s
	 * @return {boolean}
	 */
	isValid(s) {
		const brackets = { '(': ')', '{': '}', '[': ']' };

		let stack = [];
		for (let char of s) {
			// If the char is an opening bracket, add the closing bracket to the stack.
			if (brackets[char]) {
				stack.push(brackets[char]);
			} else {
				// If it's a closing bracket, pop from the stack and check if it matches the current char.
				if (stack.pop() !== char) return false;
			}
		}

		return stack.length === 0 ? true : false;
	}
}
