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

/* Nesting
Template literals allow for expression nesting.new template literal can be put inside the expression of a template literal.since teh nested lemplate literal is part of the expression, it will be parsed as a new template literal and will not interfere with the external template literal.in some cases, nesting a template literal is the easiest and most readable way to create a string. */

function javascriptOrPlusPlus() {
	return 'Javascript';
}
const outputLiteral = `we are learing about ${`professional ${javascriptOrPlusPlus()}`}`;
console.log(outputLiteral);
// expected output: we are learning about professional Javascript

/* Tagged template literals
can be parsed with a special function called Tag functions, and can return a manipulated string or any other value.
1. the first input argument of a tag function is an array containing string values.
2. the string values represent the parts of the input string, broken at each template expression.
3. the remaining arguments are the values of the template expression in the string.
4. Tag functions are not called like normal functions.
5. to call a tag function, we omit the parentheses and any whitespace around the template literal argument. */

// Define the tag function
function tagFunction(strings, numExp, fruitExp) {
	const str0 = strings[0]; // "we have"
	const str1 = strings[1]; // "of"
	const quantity = numExp < 10 ? 'very few' : 'a lot';
	const str2 = strings[2]; // "exciting"
	let fruit = fruitExp;
	if (numExp > 1) fruit += 's';
	return str0 + quantity + str1 + fruit + str2;
}

const fruit = 'apple',
	num = 10;
// note: lack of parentheses or whitespace when calling tag function
const output = tagFunction`we have ${num} of ${fruit}. Exciting`;
console.log(output);

/* IN summary,
1. the template literals allow for the simplification of complicated string expressions.
2. Template literal allows you to embed variables and complicated expression into strings.
3. Template literal can even be nested into the expression fields of other template literals.
4. If a template literal is broken into multiple line in the source code, the interpreter will interpret that as a new line in the string and insert one accordingly
5. Template literals alos provide a new way to parse and manipulate strings with the tagged template function.
6. The taged template functions also give access to the raw strings as they were entered, ignoring any escape sequences.

Excerise Template Literals Conversion:

You are building a website for a real estate company. You must build a function that
takes in an object with property information and returns a formatted string that states
the property owner, where the property is located (address), and how much they are
selling it for (price). Consider the following object as input:
{
address: '123 Main St, San Francisco CA, USA',
floors: 2,
price: 5000000,
owner: 'John Doe'
}

To utilize a template literal to pretty-print an object, perform the following steps:
1. Create a function called parseHouse that takes in an object.
2. Return a template literal from the function. Using expressions, embed the owner,
address, and price in the format <Owner> is selling the property at <address>
for <price>.
3. Create a variable called house and save the following object into it: { address: "123
Main St, San Francisco CA, USA", floors: 2, price: 5000000, owner: "John
Doe" }
4. Call the parseHouse function and pass in the house variable.
5. Log the output.
 */

function parseHouse(property) {
	return `${property.owner} is selling the property at ${property.address} for ${property.price} USD`;
}

const house = {
	address: '123 Main St, San Francisco CA, USA',
	floors: 2,
	price: 5000000,
	owner: 'John Doe',
};
console.log(parseHouse(house)); // expected output John Doe is selling the property at 123 Main St, San Francisco CA, USA for 5000000 USD
