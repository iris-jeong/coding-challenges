/* eslint-disable no-unused-vars */
/* 
  -- INSTRUCTIONS --
  Consider the following class:
  var Animal = { 
      name: "Cat", 
      numberOfLegs: 4 
  }
  Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.
  If an empty list is passed in, it should return an empty list back.
*/

/* SOLUTION */
function sortAnimal(animals) {
	if (!animals || animals.length === 0) {
		return [];
	}

	let sortedAnimals = [...animals];

	sortedAnimals.sort((a, b) => {
		if (a.numberOfLegs === b.numberOfLegs) {
			return a.name.localeCompare(b.name);
		}

		return a.numberOfLegs - b.numberOfLegs;
	});

	return sortedAnimals;
}
