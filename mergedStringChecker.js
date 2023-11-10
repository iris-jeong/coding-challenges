/* 
  -- INSTRUCTIONS --
  At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
  The restriction is that the characters in part1 and part2 should be in the same order as in s.
  The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

  For example:
  'codewars' is a merge from 'cdw' and 'oears':
  s:  c o d e w a r s   = codewars
  part1:  c   d   w         = cdw
  part2:    o   e   a r s   = oears
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function isMerge(s, part1, part2) {
	// Memoization table to store and reuse previously computed results
	const memo = new Map();

	function canForm(sIdx, p1Idx, p2Idx) {
		if (sIdx === s.length) {
			return p1Idx === part1.length && p2Idx === part2.length;
		}

		const memoKey = `${p1Idx}:${p2Idx}`;
		if (memo.has(memoKey)) {
			return memo.get(memoKey);
		}

		if (
			p1Idx < part1.length &&
			part1[p1Idx] === s[sIdx] &&
			canForm(sIdx + 1, p1Idx + 1, p2Idx)
		) {
			memo.set(memoKey, true);
			return true;
		}

		if (
			p2Idx < part2.length &&
			part2[p2Idx] === s[sIdx] &&
			canForm(sIdx + 1, p1Idx, p2Idx + 1)
		) {
			memo.set(memoKey, true);
			return true;
		}

		memo.set(memoKey, false);
		return false;
	}

	return canForm(0, 0, 0);
}
