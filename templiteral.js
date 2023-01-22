/* Template Literal are new form of string enclosed by the backtick Symbol(``) instead of the usual single or double quotes.
1. it allows to embed expressions in the string that are evaluated at runtime.
2. thus we can easily create dynamic strings form variables and variable expressions.
3. these expression are denoted with the dollar sign and curly braces(${ expression }).

    example: */
const example = 'pretty';
console.log(`Template literal are ${example} useful`); // expected output Template literal are pretty useful
/*
1. template literals are escaped like other strings in JS.
2. To escape a template literal, simply use a backslash(\) => `\` === "`"
3. template literal allow for mutliple strings.inside a template literal we press(Enter) key on the keyboard to split it on to two lines. it will give new line in the output
4. To replicate this in normal strings we have to use the(\n) character to generate a new line.

    example
using normal strings */
console.log('this is line 1 \n This is line 2');
// expected out out: this is line 1
// This is line 2

// using literal templates
console.log(`this is line 1
this is line 2`);
// expected output: This is line 1
// This is line 2

/* Exercise converting to template literals
to convert standard string object to template literals to demonstrate teh power of template literal expressions, perform the following steps:
1. create two variables, (a) and(b), and save numbers into them.
2. log the sum of (a) and (b) in the format a + b is equal to <result> using normal strings.
3. log the sum of (a) and (b) in the format a + b is equal to <result> using a single template literal.

*/
let a = 5, // you do not need to repeat let before every varialbe as you separate them by comma
	b = 5;

console.log('the sum of a and b is equal to', a + b);

console.log(`the sum of a and b is equal ${a + b}`);
console.log(`the sum of ${a} and ${b} is equla to ${a + b}`);
