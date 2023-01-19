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
