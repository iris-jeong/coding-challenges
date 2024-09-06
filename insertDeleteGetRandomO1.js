var RandomizedSet = function () {
	this.map = new Map();
	this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	// If the item already exists, return false.
	if (this.map.has(val)) return false;

	// Otherwise, insert item val and map it to its array index and return true.
	this.map.set(val, this.list.length);
	this.list.push(val);

	return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	// Return false if the item doesn't exist.
	if (!this.map.has(val)) return false;

	// Otherwise remove it and return true.
	const index = this.map.get(val); // Get the index of the item to be removed.
	const lastVal = this.list[this.list.length - 1]; // Get the last item in the array.

	// Swap the item to be removed with last val.
	this.list[index] = lastVal;

	// Update the index of lastVal in the map.
	this.map.set(lastVal, index);

	// Remove the last element from the array.
	this.list.pop();

	// Remove val from the map.
	this.map.delete(val);

	return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	const randomIndex = Math.floor(Math.random() * this.list.length); // Pick a random index.
	return this.list[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
