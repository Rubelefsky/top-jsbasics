// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings

const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);

const single = 'Single Quotes';
const double = "Double Quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//Embedding
//Strings declared using backticks `` are a special kind of string
//These are called template literals
const name = 'Brandon'
const greeting = `Hello ${name}.`;
console.log(greeting); // Hello, Brandon.

const one = "Hello, ";
const two = "How are you?";
const joined = `${one}${two}`;
console.log(joined); // Hello, how are you?

