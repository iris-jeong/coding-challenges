/* eslint-disable no-unused-vars */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
	let totalGas = 0;
	let totalCost = 0;
	let tank = 0;
	let startStation = 0;

	for (let i = 0; i < gas.length; i++) {
		totalGas += gas[i];
		totalCost += cost[i];
		tank += gas[i] - cost[i];

		// If tank is negative, this station cannot be a starting point.
		// Move the start to i + 1 and reset the tank.
		if (tank < 0) {
			startStation = i + 1;
			tank = 0;
		}
	}

	// If totalGas < totalCost, it's impossible to complete the circuit
	return totalGas >= totalCost ? startStation : -1;
};
