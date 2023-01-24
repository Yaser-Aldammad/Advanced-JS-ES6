/* ES6 syntactic sugar
it is a syntax that is designed to make expressions easier to read and express.It makes the syntax "sweet" becuase code can be expressed concisely.
ES6 add three ways to simplify the declaration of object literals: property notation, computed property, and function notation.
1. to simplify property creation in objects, when properties are created from variables, we can omit the key name and the colon.
2. the name property that's created is set to the variable name and the value is set to the value of the varialbe.
3. to add a function as a property to an object, we can omit the colon and function keyword. the name of the property that's created is set to the function name and the value of the property is the function itself.
4. we can create property names from computed expressions during the declaration of the object lieteral. we simply replace the key name with the expression in the brackets.

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

we create 2 variables. the first contains the string 'first' and the second contains a function that returns a string. we then create an object and use computed property notation to create dynamic object key names. the first key name is equal to 'firstName'. When 'person.firstName' is accessed, the value that is saved will be returned. the Second key name is equal to 'lastName'. When 'person.lastName' is accessed, the value that was saved will be returned.
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

/* Exercise:
you are building a simple JS math package to publish to Node Package Manage NPM.Your module will export an object that contains several constants and functions.Using ES6 syntax:
Create the export object with the following functions and values:
1. the value of pi
2. the ratio to convert inches to feet
3. function that sums two arguments
4. function that substracts two arguments
5. log the object after it has been created
steps:
1. Create an object and save it into the exportObject variable.
2. Create a variable called PI that contains the value of pi (3.1415).
3. Create a variable called INCHES_TO_FEET and save the value of the inches to feet
conversion ratio (0.083333).
Using ES6 enhanced property notation, add a property called PI from the variable
PI. Add a property called INCHES_TO_FEET from the INCHES_TO_FEET variable, which
contains the inches to feet conversion ratio.
Add a function property called sum that takes in two input arguments and returns
the sum of the two input arguments.
Add a function property called subtract that takes in two input arguments and
returns the subtraction of the two input arguments.
4. Log the object exportObject.
 */
const PI = 3.1415;
const Inches_To_Feet = 0.083333;
const exportObject = {
	PI, // 3.1415
	Inches_To_Feet, //0.083333
	sum(n1, n2) {
		return n1 + n2; //sum: [function : sum]
	},
	subtract(n1, n2) {
		return n1 - n2; // sum: [function : subtract]
	},
};
console.log(exportObject.subtract(100, 50), exportObject.sum(5, 10)); // 50, 15
console.log(exportObject.subtract(100, 50)); // 50
console.log(exportObject.sum(5, 10)); // 15
