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
(arg1, arg2)=> {
    console.log(´this is arg1: ${arg1}´)
    console.log(`this is arg2: ${arg2}`)
    //many more lines of code can go here
}
