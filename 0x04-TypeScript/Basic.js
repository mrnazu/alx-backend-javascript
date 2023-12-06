// In TypeScript, we support the same types as you would expect in JavaScript, with an extra enumeration type thrown in to help things along.

// Boolean
let isDone: Boolean = false;

// Number
let decimal: Number = 6;
let hex: Number = 0xf00d;
let binary: Number = 0b1010;
let octal: Number = 0o744;
let big: Bight = 100n;

// String

let color: String = 'blue';
color = "red";


let fullname: String = "Samuel Amsalu";
let sentence: String = `Hello, my name is ${fullname}.`;
console.log(sentence);

// Array

let list: number[] = [1, 2, 3];
console.log(list);

// Tuple
// Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK

// Initialize it incorrectly
x = [10, "hello"]; // Error
