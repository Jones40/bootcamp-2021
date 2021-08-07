// One line comment
// disable a line of code, explain
/*
    Multiple line 
    of comment
*/
/* To show off ! */

/********************
 **** Decoration ****
 ********************/
/* Copyright : mine®️ */
/*
    disable();
    multiple();
    line_of_code(){}
*/
// ! Better comments by Aaron Bond
// ? Shouldn't this code work ?
// * I need money $
// TODO : Fix all the things!

/******************************
 ** Already defined FUNCTIONS **
 ******************************/
// [2 INPUTS] - [3 OUTPUTS]
// INPUT : prompt('sentence')
const name = prompt('Enter you name');
// INPUT : confirm('question');
const legal = confirm('Are you above 18 ?');

// OUTPUT : alert('message')
alert('Hello');
// OUTPUT : document.write('<h2>ok</h2>')
document.write('<h2>ok</h2>');
// OUTPUT FOR THE DEVS : console.log('message');
console.log('Im a dev');

/*********************
 ***** VARIABLES *****
 *********************/

const teacher = 'igor'; //  declaration + Assigment
let age; // declaration
age = 32; // assigment/ intialisation
age = 100;
let lastName = 'MARTY'; // use camelCase
// ! don't use "var", never, ever, for life and behond
// ? Var is for losers
// * you have to use "const" and "let"

const email = prompt('Enter your email');
alert('Thank you, we will spam the email : ' + email);

const fullName = teacher + lastName;

/*********************
 ******* TYPES *******
 *********************/
// default
let friends; // undefined
console.log(friends);
friends = null; // Null -> A dev choose to reset the value

// [String] - sentense, words, letters, set of chars
friends = 'Timmy';
friends = "Timmy's girlfriend";
friends = "Timmy's girlfriend";
// -> allowed operation : concatenation
friends = 'Igor' + ' ' + 'MARTY';
console.log(friends);

// [Number] -...
let temperature = 15.6;
temperature = -10;
temperature = 2 / 3;
temperature = 1.4 + 1.2; // It's a computer, with it's fails
alert(9 - 3 / 3 + 1); // BODMAS/PEMDAS

let score = 0;
score = score + 1;
score += 1;
score++;

score -= 1;
score *= 1;
score /= 1;
score--;

// [Boolean] : true / false
const teacherIsGood = true;
const luxembourgIsSunny = false;
const notGood = 'false';
// falsy  : false, 0, null, undefined, NaN(Not a Number)
// Truthy : Everything Else.

//Smart typing
console.log('1' + 9); // '19

// from number to string
const money = '' + 1 || (1).toString();
// from string to number
const currency = +'9' || Number('9');

/*
THE TOP
 _  _
| || |
| || |_
|__   _|
   |_|   ERRORS
OF JS DEVELOPPERS
(the 4th is really surprising)
*/

// ?  ReferenceError: life is not defined
// console.log(life);
// Solution Define the variable using const/let
// Example : let life = "nice";

// ? Uncaught SyntaxError: Unexpected token ':'
// let me: 1;
// Solution : seek for red in VScode and correct the specied line (or next to it...)

// ? Uncaught TypeError: Assignment to constant variable.
// teacher = 'Simon';
// solution change the "const" to a "let"

// ?  YOU - Brain
let budget = 10;
let sandwich = 4;
// solution : Become Sherlock Holmes
debugger;
budget = budget + sandwich;
console.log(budget);
