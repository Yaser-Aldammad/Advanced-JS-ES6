/* Declaring variables in JS by var, let, const.The main difference among them is the way they handle varialbe reassignment, variable scope, and varialbe hoisting.
1. Varaiable reassignment: the ability to change or reassign the varaiable value at anytime
2. Varaible scope: the extent or area of the code from which the variable may be accessed
3. variable hoisting: the variable instantiation(the production of an instance انشاء مثيل) and assignment time in relation to the variables declaration.Some variables can be used before they are declared.
===========================================================================================================
var: all variables created with var can be reassigned, have function scopoe and have variable hoisting. It means variables with var can be hoisted to the top of the scope block, where they are defined and be accessed before declaration. */
// refernced before declaration
console.log(example); // undefiend ==> to correct it you have to give it value in the begining them declare it at the end, see scope.js
var example = 'example';

// variables with var are not constant, they can be created, assigned, and reassigned a value at will.
// Delcared and assigned
var example = { prop1: 'test' };
console.log('example:', example);
// expected output example: {prop1: 'test'}
// value reassigned
example = 5;
console.log(example); // expected output:5

/* ===============================================================================================================
let Vs var:
1. let and var allow us to declare a variable that can be reassigned at any time.
2. let is different from var in terms of scoping and hoisting properities.
3. varialbes declared with let are scoped at block level, they are defined in the block of code contained within a matching pair of curely braces {}.
4. let is not subject to hoisting. This means that accessing a varialbe declared with let before assignement will throw a run time error. this called Temporal Dead zone. */
// let can be reassigned anytime cuz it is not constant.
// declared and initialized
let letExample = { prop1: 'test' };
console.log('letExample:', letExample);
// expected output letExample: {prop1: 'test'}
// value reassigned
letExample = 5;
console.log(letExample);

//Refernced before declaration is undefined error because let variable cannot be hoisted
/* console.log(refExample);
let refExample = 'refExample'; */ // expected output is not defined cuz let variable can not be hoisted

/* ==============================================================================================================
const variable
1. const and let are similiar keywords becuase they have block scopoing and do not het hoisted to the top of the scope,
2. const signifies that the identifier can not be reassigned. the value written in const varialbe cannot be changed. if the value changed will throw a TypeError.
3. if an array or object is stored in a variable declared with const, the value can not be overwritten. However, the array content or object properties can be changed. The contents of an array can be modified with functions such as push (to add), pop (to remove), or map (to update) and object properities can be added, removed or updated.

in the professional world, always use let and const, becuase they provide all the functionality of var and allow the programmer to be specifica and restrictive with varialbe scope and usage.
 */

// const have block scope and do not get hoisted to the top of the scope
// referenced before declaration
/* console.log(constExample); // expected output ReferenceError cuz is nto defined
const constExample = 'constExample'; */ // expected output cannot access before initialization

// Declared and initialized
const constExampleDeclared = { prop1: 'test' };
// variables reassigned
/* constExampleDeclared = 5; */ // expected TypeError error because const variable cannot be reassigned

// object properity update
constExampleDeclared.prop1 = 500; // expected no error because subproperity was modified
console.log(constExampleDeclared);

/* var, let, const.
    The key differences are in the nature of const, the scope and the hoisting. var is function scoped, not ConstantSourceNode, and hoisted to the top of the scope block.let and const are both block-scoped and not hoisted.let is not Constant, while, const is constant but immutable.

    Exercise:
        To utilize the var, const, and let variable declaration keywords for variable hoisting and reassignment properties, perform the following steps:
    1. Log the string Hoisted before assignment: and the value of the hoisted variable.
    2. Define a variable called hoisted with the keyword var and assign it the value this got hoisted.
    3. Log the string hoisted after assignment: and the value of the hoisted variable.
    4. Create a try-catch block.
    5. Inside the try block, log the value of the variable called notHoisted1.
    6. Inside the catch block, give the catch block the err parameter, then log the string Not hoisted1 with error: and the value of errmessage.
    7. After the try-catch block, create the notHoisted1 variable with the let keyword and assign the value 5
    8. Log the string notHoisted1 after assignment and the value of notHoisted1.
    9. Create another try-catch block.
    10. Inside the try block, log the value of the notHoisted2 variable.
        11. Inside the catch block, give the catch block the err parameter, then log the string Not hoisted2 with error: and the value of err.message.
    12. After the second try-catch block, create the notHoisted2 variable with the keyword const and assign the value [1, 2, 3]
    13. Log the string notHoisted2 after assignment and the value of notHoisted2.
    14. Define a final try catch block.
    15. Inside the try block, reassign notHoisted2 to the new value string.
    16. Inside the catch block, give the catch block the err parameter, then log the stringb Not hoisted 2 was not able to be changed.
    17. After the try-catch block, push the value 5 onto the array in notHoisted2.
    18. Log the string notHoisted2 updated. Now is: and the value of notHoisted2. */

console.log('Hoisted before assignment', hoisted); // expected output undefined
var hoisted = 'this got hoisted';
console.log('hoisted after assignemnt', hoisted); // expected output Hoisted after assignment: this got hoisted
try {
	console.log(notHoisted1);
} catch (err) {}
/* console.log('Not hoisted1 with error', err.message); // expected output Not hoisted with error: is not defined
 */ let notHoisted1 = 5;
/* console.log('notHoisted1 after assignment', notHoisted1) // expected output notHoisted after assignment 5
 */ try {
	console.log(notHoisted2);
} catch (err) {
	console.log('Not hoisted2 with error', err.message); // Not hoisted2 with error notHoisted2 is not defined
}
const notHoisted2 = [1, 2, 3];
/* console.log('notHoisted2 after assignment', notHoisted2) // expected output notHoisted2 after assignemt [1,2,3]
 */ try {
	notHoisted2 = 'new value';
} catch (err) {
	console.log('Not hoisted 2 was not able to be changed'); // Not hoisted 2 was not able to be changed
}
notHoisted2.push(5);
console.log('notHoisted updated. Now is:', notHoisted2); // expected output notHoisted updated. Now is: [1,2,3,5]
