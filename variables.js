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
console.log(refExample);
let refExample = 'refExample'; // expected output is not defined cuz let variable can not be hoisted
