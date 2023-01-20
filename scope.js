// funciton scope ==> use var ==> created inside functions
// Block scope ES6 ==> let, const
var example = 5; // Global scope ==> parent scope: section of code that the function was defined in
function test() {
	var testVariable = 10; // functional scope
	var example = 15; // funcitonal scope
	console.log(example);
	console.log(testVariable);
}
test();
console.log(example); // global scope
// expected results 15, 10, 5
/* ==========================================================================================================
Function Scope Hoisting==> Functions and variables declared using var are hoisted in JavaScript; that is, a function or a variable can be used before it has been declared.be careful to not use that variable before it has been assigned a value. */
example = 7; // assigned value
console.log(example); // expected output 7
var example; // Declare varialbe with var. It can be hoisted ==> used before being delcared
/*  بتعطي قيمة وبعدين بتسمي او بتبن طبيعتهvar يعني
 */
/* ================================================================================================================
Block Scope is created with curely braces {} and use let & const varialbes. it could be used anywhere in the function to define new scope.
block: let, const variables;
Variables are not hoisted ==> can not be accessed until they are declared
 */

//Top level scope
/* function scopeExample() {
	//starting scope block 1
	for (let i = 9; i < 10; i++) {
		 Scope block 2
	}
	if (true) {
		 Scope block 3
	} else {
		Scope block 4
	}
	{
		 braces without keywords create scope block 5
	}

	// end of scope block 1
} */
// Top level Scope
/* لا يمكن استعمال المتغير قبل ما تبين طبيعته , بتسميه وبعدين بتعطيه قيمةLet & const
 */ let blockScope;
blockScope = 50;
console.log(blockScope); // expected results 50

/* Exercise 1: Implementing Block Scope
To implement block scope principles with variables, perform the following steps:
1. Create a function called fn1 as shown (function fn1()).
2. Log the string as scope 1.
3. Create a variable called scope with the value of 5.
4. Log the value of the variable called scope.
5. Create a new block scope inside of the function with curly braces ({}).
6. Inside the new scope block, log the string called scope 2.
7. Create a new variable called scope, inside the scope block and assign the value
different scope.
8. Log the value variable scope inside our block scope (scope 2).
9. Outside of the block scope defined in step 5 (scope 2), create a new block scope
(use curly braces).
10. Log the string called scope 3.
11. Create a variable inside the scope block (scope 3) with the same name as the
variables (call it scope) and assign it the value a third scope.
12. Log the new variable's value.
13. Call fn1 and observe its output */
function fn1() {
	console.log('scope 1');
	let scope = 5;
	console.log(scope);
	{
		console.log('scope 2');
		let scope = 'different scope';
		console.log(scope);
	}
	{
		console.log('scope 3');
		let scope = 'a third scope';
		console.log(scope);
	}
}
fn1();
