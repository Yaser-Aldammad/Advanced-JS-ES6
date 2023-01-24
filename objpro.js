/* ES6 syntactic sugar
it is a syntax that is designed to make expressions easier to read and express.It makes the syntax "sweet" becuase code can be expressed concisely

Object Properties
ES5 VS ES6

A. ES5:
1. we need to define the object properties with a key name and a value: */

function getPersionES5(name, age, height) {
	return {
		name: name, // doublication
		age: age,
		height: height,
	};
}
const output = getPersionES5('Zachary', 23, 195); // expected output {name: Zachary, age: 23, height 195}
console.log(output);

/* B.ES6:
In ES6 we remove the repetition.we can simply state the variable in the object literal declaration and it will create a property with a key that match the variable name and a value that matches the variable value. */

function getPersionES6(name, age, height) {
	return {
		name,
		age,
		height,
	};
}
const outputES6 = getPersionES6('Adam', 5, 115); // expected output { name: 'Adam', age: 5, height: 115 }
console.log(outputES6);

/* Function Declarations:
Declaring function method inside objects.

    A.ES5
we had to state the property name, then define it as a function */

function getPersionES5(name, age, height) {
	return {
		name: name,
		height: height,
		getAge: function () {
			return age;
		},
	};
}
const outputES5 = getPersionES5('Zachary', 23, 195).getAge();
console.log(outputES5); // expected output 23

/* B.ES6
As with the property declartion, we do not need to a key value pair to create the function. The function name becomes the key name. */

function getPersionES6Age(name, age, height) {
	return {
		name,
		height,
		getAge() {
			return age; // Notice the difference in the function declaration. We omit the function keyword and the colon after the property key name. Once again, this saves us a bit of space and simplifies things a little.
		},
	};
}
const outPutES6 = getPersionES6Age('Adam', 5, 115).getAge();
console.log(outPutES6); // expected output 5

/* Computed Properties
creates property names from variables through computed property notation []. */

const varName = 'firstName';
const person = {
	[varName]: 'Adam',
	lastName: 'Aldammad',
};
console.log(person.firstName); // Adam

console.log(person.lastName); // Aldammad
console.log(person); //Adam Aldammad

/* the property name of varName was computed to be firstName.When accessing the property, we simply reference it as person.firstName.When creating computed property in object literals, the value that's computed in the brackets does not need to be a variable, it can be almost expression, even function.
 */

const varName2 = 'first';
function computedNameType(type) {
	return type + 'Name';
}
const person2 = {
	[varName2 + 'Name']: 'Elias',
	[computedNameType('last')]: 'Aldammad',
};
console.log(person2); // Elias Aldammad
console.log(person2.firstName); // Elias
console.log(person2.lastName); // Aldammad
