/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Given a character array tasks, where each character represents a unique task and a positive integer n that represents the cooling period between any two identical tasks, find the minimum number of time units the CPU will need to complete all the given tasks. 
  Each task requires one unit to perform, and the CPU must wait for at least n units of time before it can repeat the same task. 
  During the cooling period, the CPU may perform other tasks or remain idle.
*/

/* SOLUTION */
function leastTime(tasks, n) {
	// Count and store the frequencies of all the tasks.
	let frequencies = new Map();
	for (let task of tasks) {
		frequencies.set(task, frequencies.get(task) + 1 || 1);
	}

	// Sort the tasks based on the frequencies.
	let sortedFrequencies = Array.from(frequencies.entries()).sort(
		(a, b) => a[1] - b[1]
	);

	// Start scheduling the tasks in the descending order of their frequencies, and compute the idle time during the process.
	const maxFreq = sortedFrequencies[sortedFrequencies.length - 1][1];
	sortedFrequencies.pop();

	let idleTime = (maxFreq - 1) * n;

	while (sortedFrequencies.length > 0 && idleTime > 0) {
		idleTime -= Math.min(
			maxFreq - 1,
			sortedFrequencies[sortedFrequencies.length - 1][1]
		);
		sortedFrequencies.pop();
	}

	idleTime = Math.max(0, idleTime);

	// Calculate the total time by adding the number of tasks and the idle time.
	return tasks.length + idleTime;
}
