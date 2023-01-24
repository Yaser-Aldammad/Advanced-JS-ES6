/* ES6 syntactic sugar
it is a syntax that is designed to make expressions easier to read and express.It makes the syntax "sweet" becuase code can be expressed concisely

Object Properties
ES5 VS ES6

A. ES5:
1. we need to define the object properties with a key name and a value: */

function getPersionES5(name, age, height) {
	return {
		name: name,
		age: age,
		height: height,
	};
}
getPersionES5('Zachary', 23, 195); // expected output {name: Zachary, age: 23, height 195}
