/* Declaring variables in JS by var, let, const.The main difference among them is the way they handle varialbe reassignment, variable scope, and varialbe hoisting.
1. Varaiable reassignment: the ability to change or reassign the varaiable value at anytime
2. Varaible scope: the extent or area of the code from which the variable may be accessed
3. variable hoisting: the variable instantiation(the production of an instance انشاء مثيل) and assignment time in relation to the variables declaration.Some variables can be used before they are declared.
===========================================================================================================
var: all variables created with var can be reassigned, have function scopoe and have variable hoisting. It means variables with var can be hoisted to the top of the scope block, where they are defined and be accessed before declaration. */
// refernced before declaration
console.log(example); // undefiend ==> to correct it you have to give it value in the begining them declare it at the end, see scope.js
var example = 'example';
