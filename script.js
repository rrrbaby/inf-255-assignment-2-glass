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
	console.log("Name: " + animal.name + " Species: " + animal.species);
});

// ---------------------------------------------------------------------------
// Task 3 — Log each animal again with for...of
// ---------------------------------------------------------------------------

// Logging names with for...of
for (const animal of animals) {
	console.log("Age: " + animal.age + " Adopted: " + animal.adopted);
};
// ---------------------------------------------------------------------------
// Task 4 — Adopted and available animals with .filter()
// ---------------------------------------------------------------------------

// Array of adopted animals

const adoptedArray = animals.filter(function (animal) {
	return animal.adopted;
})


const adoptedAnimals = adoptedArray.map (function (animal) {
	return animal.name;
})

console.log(adoptedAnimals);


// Array of available animals

const availableArray = animals.filter(function (animal) {
	return !animal.adopted;
})

const availableAnimals = availableArray.map (function (animal) {
	return animal.name
	
})

console.log(availableAnimals);


// ---------------------------------------------------------------------------
// Task 5 — Available dogs with method chaining
// ---------------------------------------------------------------------------

// Array of avaliable dogs
const availableDogsArray = animals.filter(function (animal) {
	if (animal.species === "dog") {
		return !animal.adopted;
	}
})
 const availableDogs = availableDogsArray.map (function (animal) {
	return animal.name	
 })

 console.log(availableDogs);
 

// Array of adopted dogs
const adoptedDogsArray = animals.filter(function (animal) {
	if (animal.species === "dog") {
		return animal.adopted;
	}
})

const adoptedDogs = adoptedDogsArray.map(function (animal) {
	return animal.name
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

console.log(avgAge);

// ---------------------------------------------------------------------------
// Task 7 — Write isCat, isAdopted, and getName
// ---------------------------------------------------------------------------

function isAdopted (animal) {
	return animal.adopted
};

function isCat (animal) {
	if (animal.species === "cat") {
		return animal.species;
	}
}

function getName(animal) {
	return animal.name;
}

// ---------------------------------------------------------------------------
// Task 8 — Adopted cats, using your own functions as callbacks
// ---------------------------------------------------------------------------

//Not sure if I can use multiple functions in one variable, tried and it didn't work.
//Please let me know.
const catsArray = animals.filter(isCat);

const adoptedCatsArray = catsArray.filter(isAdopted);

const adoptedCats = adoptedCatsArray.map (getName);

console.log(adoptedCats);


// ---------------------------------------------------------------------------
// Task 9 — Write makeSpeciesChecker (a closure)
// ---------------------------------------------------------------------------

function makeSpeciesChecker(species) {
	return function (animal) {
		if (animal.species === species) {
			return animal.species;
		}
	};
};

// ---------------------------------------------------------------------------
// Task 10 — Build isDog and isRabbit, then log their names
// ---------------------------------------------------------------------------

//Create species checkers
const isDog = makeSpeciesChecker("dog");

const isRabbit = makeSpeciesChecker("rabbit");

//Create dogs array and call names
const dogsArray = animals.filter(isDog);

const dogs = dogsArray.map(getName);

console.log(dogs);

//Create rabbits array and call names
const rabbitsArray = animals.filter(isRabbit);

const rabbits = rabbitsArray.map(getName);

console.log(rabbits);




