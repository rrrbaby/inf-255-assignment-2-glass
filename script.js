const animals = [
	{ id: 1, name: "Luna", species: "cat", age: 3, adopted: false },
	{ id: 2, name: "Biscuit", species: "dog", age: 7, adopted: true },
	{ id: 3, name: "Pepper", species: "cat", age: 1, adopted: true },
	{ id: 4, name: "Moose", species: "dog", age: 5, adopted: false },
	{ id: 5, name: "Charly", species: "dog", age: 4, adopted: false },
	{ id: 6, name: "Bill", species: "cat", age: 0.5, adopted: true },
	{ id: 7, name: "Chompers", species: "rabbit", age: 0.5, adopted: false },
	{ id: 8, name: "Beowulf", species: "dog", age: 7, adopted: true },
];

// Instructions for every task are in README.md.
// Write your code below each heading,
// Be sure to add your own comments to the code you are writing

// ---------------------------------------------------------------------------
// Task 1 — Animal names with .map()
// ---------------------------------------------------------------------------
const names = animals.map (function (animal) {
	return animal.name;
});

console.log(names);
// ---------------------------------------------------------------------------
// Task 2 — Log each animal with .forEach()
// ---------------------------------------------------------------------------

// Logging names with .forEach
animals.forEach(function(animal) {
	console.log(animal.name);
});

// ---------------------------------------------------------------------------
// Task 3 — Log each animal again with for...of
// ---------------------------------------------------------------------------

// Logging names with for...of
for (const animal of animals) {
	console.log(animal.name);
};
// ---------------------------------------------------------------------------
// Task 4 — Adopted and available animals with .filter()
// ---------------------------------------------------------------------------

// Array of adopted animals
const adopted = animals.filter(function (animal) {
	return animal.adopted;
})
console.log(adopted);


// Array of cats
const cats = animals.filter(function (animal) {
	if (animal.species === "cat") {
		return animal.species;
	}
})
console.log(cats);


// ---------------------------------------------------------------------------
// Task 5 — Available dogs with method chaining
// ---------------------------------------------------------------------------

// Array of avaliable dogs
const availableDogs = animals.filter(function (animal) {
	if (animal.species === "dog") {
		return !animal.adopted;
	}
})
console.log(availableDogs);

// Array of adopted dogs
const adoptedDogs = animals.filter(function (animal) {
	if (animal.species === "dog") {
		return animal.adopted;
	}
})
console.log(adoptedDogs);

// ---------------------------------------------------------------------------
// Task 6 — Average age with .reduce()
// ---------------------------------------------------------------------------

// Array of ages
const ages = animals.map(function (animal) {
	return animal.age;
});

// Averaging age
const avgAge = (ages.reduce(getSum, 0))/animals.length;

// Sum function for .reduce
function getSum (x, y) {
	return x + y;
}

console.log(age);

// ---------------------------------------------------------------------------
// Task 7 — Write isCat, isAdopted, and getName
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Task 8 — Adopted cats, using your own functions as callbacks
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 9 — Write makeSpeciesChecker (a closure)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 10 — Build isDog and isRabbit, then log their names
// ---------------------------------------------------------------------------
