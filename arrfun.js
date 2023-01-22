/* Arrow function or fat function is used to simplify function syntax. it is called fat function becuase it is denoted with the character(=> ), which make the arrow looks fat.

used with the following:
1. callback chains
2. promise chains
3. array methods
4. unregistered functions

the key differnce between the arrow function and normal function:
    1. arrow function is anonymous
    2. arrow function is not named
    3. arrow function is not bound to an identifier
    4. arrow function can be assigned to a variable to allow for reuse.

To create an arrow function remove the function keyword and place an arrow between the function argument and the body.
For example: () => { };
arrow function are more precise way of writing functions in JS.


arrow function syntax vary on several factors depending on the number of argument passed:
1. single input argument
2. no input arguments
3. single line function body
4. single expression broken over multiple lines
5. object literal return value

Exercise:
1. Create a function that takes in parameters and returns the sum of the two
parameters. Save the function into a variable called fn1.
2. Convert the function you just created to an arrow function and save into another
variable called fn2.
To convert the function, remove the function keyword. Next, place an arrow
between the function arguments and the function body.
3. Call both functions and compare the output.
 */
const fn1 = function (a, b) {
	return a + b;
};
const fn2 = (a, b) => {
	return a + b;
};
console.log(fn1(5, 6), fn2(6, 6));

/*
Arrow Function Syntax

1. We do not use parenthesis around the argument, if we only have one argument.
arg1 => {Do function stufll here}
2. We use parenthesis around the argument, if we have more than one parameter.
3. we use parenthesis, if we add a default value or perform operations in the function.
(arg1 = 10)=>{Do function stuff here}
4. if we create an arrow function with no argument, then we need to include the parenthesis, but they will be empty
    ()=> {Do function stuff here }



the function syntax varies, depending on the body of the function.
1. Multiline ==> we must surrond it with {}
2. single line ==> we do not need to include the curly braces around the body of the function
 */
// multiple line body arrow function
(arg1, arg2) => {
	console.log(`this is arg1: ${arg1}`);
	console.log(`this is arg2: ${arg2}`);
	//many more lines of code can go here
};

// single line body arrow function
(arg1, arg2) => console.log(`This is arg1: ${arg1}`);

/* using arrow function in a single line Syntax, we exclude { return } keyword.The arrow function automatically returns the resolved value of the expression on that line. */

//with return keyword - not necessary
(num1, num2) => {
	return num1 + num2;
};

// if called with arguments num1 = 5 and num2=5, expected output is 10

// without return keyword or braces
(num1, num2) => num1 + num2;

// if called with arguments num1=5 and num2=5, expected output is 10

/* since arrow function with single expression bodies can be defined without the curly braces, we need special syntax to allow us to split the single expression over multiple lines.To do this, we can wrap the multi - line expression i parentheses.The JS interpreter sees that the line are wrapped in parentheses and treats it as if it were a single line of code.
 */
// arrow function with a single line body
// assume numArray is an array of numbers
(numArray) =>numArray.filter((n) => n > 5).map((n) => n - 1).every((n) => n < 10)

// arrow function with a sinlge line body brokein into mulitple lines
// assume numArray is an array of numbers
(numArray) =>
	numArray
		.filter((n) => n > 5)
		.map((n) => n - 1)
		.every((n) => n < 10);

/* Object literal is a comma - separated list of name - value pairs inside of curly braces.
if we have an arrow function returning an object literal, we will need special SyntaxError.in ES6, scope blocks, function bodies, and object literals are all defined with curly braces.
Since a single line arrow functions do not need curly braces, we must use the specil syntax to prevent the object literal's curly braces from being interpreted as either function body curly braces or scope block curly braces. To do this we surround the returned object leteral with parentheses. This instruction the JS engine to interpret curly braces inside the parentheses as an expresion instead of function body of scope block delcaration. */

//arrow function with an object literal in the body
(num1, num2) => ({ prop1: num1, prop2: num2 }) // return an object


/*
Arrow function scope
arrow function follow normal scoping rule in JS, with exception of the(this) scope.
1. in normal JS function recall(this) is assigned to a scope.
2. in arrow function (this) is not assigned.

arrow functions inherit their parent's (this) scope and cannot have a new (this) scope bound to them. This means that, as expected, arrow functions have access to the scope of the parent function, and subsequently, the variables in that scope, but the scope of (this) cannot be changed in an arrow function.
using the.apply(), .call(), or.bind() function modifiers will not change the scope of an arrow function' (this) property. IF you are in a situation where you must bind (this) to another scope, then you must use a normal JS function.

    in Summary, arrow function provide us with a way to simplify the syntax of anonymous functions.To write an arrow function, simply omit the function keyword and add an arrow between the argument and function body.


Special syntax can then be applied to the function argument and body to simplify the arrow function even more.if the function has a single input argument, then we can omit the parentheses around it.if the function body has a sinle line, we can omit the { return } keyword and the curly braces around it.However, single - line functions that return an ojbect literal must be surrounded with parentheses.

    finally, we can also use parentheses around the function body to break a sinlge line body into multiple lines for readability.

 */

    // exercises
    //1. convert fn1 with basic ES6 Remove the function keyword before the function arguments. Add an arrow between the function arguments and function body.
const fn1 = function (a, b) {
    b++;
    a++;
    return a + b
    }

const fn1(a, b) => {
    b++;
    a++;
    return a +b
}
