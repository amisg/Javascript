/// More about Function...
// Callbacks ....
// Higher order Functions .....

// var a = 1; // Primitive
// var b = true
// var c = "abcd"

// var obj = { // Non Primitive
//   name: "utkars",
// };

// console.log("hello");
// console.log(obj, a);

// function criticalFunctoin() {
//   const a = 10;
//   const b = 20;

//   const c = a + b;
//   // logic a + b;

//   // logging "a+b" // google services console.log() google.log()
//   throw Error("Google logger Number required but you send String"); // have i done anything about this error ?

//   return c;
// }

// console.log(criticalFunctoin());

// function criticalFunctoin() {
//   try {
//     const a = 11;
//     const b = 21;

//     const c = a + b;
//     // logic a + b;

//     // logging "a+b" // google services console.log() google.log()
//     throw Error("Google logger Number required but you send String"); // have i done anything about this error ?

//     return c;
//   } catch (error) {
//     // Handle the error gracefully..  Beautiful Page ....
//     console.log("----------");
//     alert(error.message);
//     console.log(error);
//   }
// }

// console.log(criticalFunctoin());

// let b = 9;
// const d = 12
// var x = 12;

// a = 12;

// console.log(a, x);

var a = 99;

function abc() {
	console.log(a);
}

abc();

// Question: What is HOF and callback function

// a and b are Parameters
// hof 1. accept a Function in parameter
// 2. a function that returns a function
// function abc(a , b) {
//   return () => {}
// }

// function sum(a,b) {

// }

// const sum1 = function (a,b) {

// }

// const sum2 = (a, b) => {

//   function abc() {

//   }
//   return () => {};
// }

// // sum1 -> is a function
// // sum1() // value

// abc( () => {}  ,3) // 1,3 are Arguments

// callback function -> its a function only but in Arguments.

// --------------- Doubts -------------------

// Q1
let a = 10,
	b = 10,
	c = 10;

if ((a == b) == c) {
	console.log("hello");
} else {
	console.log("bye");
}

// Q2
// TODO:
const fun = () => {
	let a = (b = 0);

	a++;

	return a;
};

fun();

console.log(typeof a);

console.log(typeof b);

// Q3
let x = [1, 2, 3]; // abc@123

let y = [1, 2, 3]; // abc@124

let z = y; //  abc@124

console.log(x == y); // false

console.log(x === y); // false

console.log(z == y); // true

console.log(z == x); // false

// Q4

let num = 0;

function test() {
	var num = 1;

	return num;
}

console.log(test());

console.log(num);

// 1 0
