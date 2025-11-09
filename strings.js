// * https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings

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

//TODO: Create some Test cases
/**
 * * Important Info Highlighted
 * ! Deprecated
 * ? Question mark?
 * TODO - Todo
 * @param myParam - Parameter fir this method
 */

// * Expressions in strings
const song = "Fight the youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);

// * MultiLine Strings
const newline = `One day you finally knew 
what you had to do, and began.`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began
*/

// * Muliline with break character \n
const newline2 = "One day you finally knew\nwhat you had to do, and began.";
console.log(newline2);


// * Quotes in JS
const goodQuotes1 = 'She said "I think so"!'
const goodQuotes2 = `She said "I am not going in there."`;
console.log(goodQuotes1);
console.log(goodQuotes2);

// * Escaping characters
const bigmouth = 'I\'ve got no right to take my place…'; // Escape the character for I've
console.log(bigmouth);