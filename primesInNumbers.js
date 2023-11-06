/* 
  -- INSTRUCTIONS --
  Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
 "(p1**n1)(p2**n2)...(pk**nk)"
  with the p(i) in increasing order and n(i) empty if n(i) is 1.
  Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

/* SOLUTION */
// eslint-disable-next-line no-unused-vars
function primeFactors(n) {
	let factors = "";
	let divisor = 2;

	while (n >= 2) {
		let count = 0;
		while (n % divisor === 0) {
			count++;
			n /= divisor;
		}
		if (count > 0) {
			factors += `(${divisor}`;
			if (count > 1) {
				factors += `**${count}`;
			}
			factors += ")";
		}
		divisor++;
	}

	return factors;
}
