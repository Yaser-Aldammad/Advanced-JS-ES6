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
