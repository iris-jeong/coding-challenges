/* eslint-disable no-unused-vars */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	// Sort the citations in descending order.
	citations.sort((a, b) => b - a);

	let h = 0;

	// Loop through sorted citations.
	for (let i = 0; i < citations.length; i++) {
		// Increase h-index as long as there are h papers w/ at least h citations.
		let numPapers = i + 1;
		if (citations[i] >= numPapers) {
			h = numPapers;
		} else {
			break;
		}
	}

	return h;
};
