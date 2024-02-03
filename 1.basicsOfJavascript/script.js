// let name = "Amith";
// console.log(name);

// ----------- Variable ----------- //
// var
// let
// const

//----------- string literal ------------//

// let score = 200;
// score = 202;

// const scoreBoard = `hey folks score is ${score}`;

// console.log(scoreBoard);

// -------------- dataTypes ----------//

// https://github.com/thakurutkarsh22/Newton-Javascript-FSD-July-2023
// function mult(a, b) {
// 	const ans = a * b;
// 	return ans;
// }

// console.log(a);
// var a = 2;
// console.log(a);

// let tenSquared = function (x) {
// 	return x * x;
// };
// console.log(tenSquared(2));

// let arr = [1, 2, 3];

// let obj = {
// 	name: "ami",
// 	age: 24,
// 	canDrive: true,
// };

// for (let index = 0; index < arr.length; index++) {
// 	// const element = array[index];
// 	console.log(arr[index]);
// }

// let j = 0;
// while (j < arr.length) {
// 	console.log(arr[j]);
// 	j++;
// }

// for (const item of arr) {
// 	const element = item;
// 	console.log(element);
// }

// for (const key in obj) {
// 	const element = obj[key];
// 	console.log(key);
// 	console.log(element);
// }

// const obj = {
// 	name: "John",
// 	age: 25,
// 	city: "New York",
// };

// let result = "";

// for (let key in obj) {
// 	if (key === "age") {
// 		continue;
// 	}
// 	result += `${key}: ${obj[key]}, `;
// }

// console.log(result);

// var a = 1;
// var b = true;
// var c = "abcd";

// var obj = {
// 	name: "ami",
// };

// console.log(a, b, c);
// console.log(obj);

// alert("how r u");

// let person = {
// 	name: "ami",
// 	std: 12,
// 	"hello world": "hey's",
// };

// // console.log(person);

// const person2 = person;

// // person = null;

// console.log(person2, "person2 debug");

// console.log(person);

// person["hello world"] = "hii";

// console.log(person);

// let arr = [1, 2, 3, 4];

// console.log(arr[arr.length - 1]);

// let c = 13;

// function sum(a, b) {
// 	return a + b + c;
// }

// console.log(sum(1, 2));

// function child(name, standard, rollnumber, ...otherTHings) {
// 	console.log(name, standard, rollnumber, "importnant information"); // store in good place

// 	console.log(otherTHings);
// }

// // animesh child
// child(
// 	"animesh",
// 	"12",
// 	1,
// 	"utkarsh",
// 	"anamika",
// 	"3233 delhi",
// 	"gun",
// 	"asdas",
// 	"asdasd",
// 	"asdasd"
// );

// child("animesh", "12", 1);

// function add(x, y) {
// 	return x + y;
// }

// function sub(x, y) {
// 	return x - y;
// }

// function mul(x, y) {
// 	return x * y;
// }

// function loggingFunction(fn, x, y) {
// 	console.log(`%c ${x}, ${y} debug`, " color : red");
// 	return fn(x, y);
// }

// let ans = loggingFunction(add, 3, 4);

// let ans1 = loggingFunction(sub, 3, 4);

// let ans2 = loggingFunction(mul, 3, 4);

// console.log(ans, ans1, ans2);

// const cb = greeting(()=>{
// 	console.log("hello");
// })

// function square(x) {
// 	return x * x;
// }

// function higherOrderFunction(num, callback) {
// 	return callback(num);
// }

// console.log(higherOrderFunction(5, square));

// function greeting(name) {
// 	return function () {
// 		console.log("Hello, " + name + "!");
// 	};
// }

// const greetJane = greeting("Jane");

// greetJane();

// function myFunction(num1, num2, callback) {
// 	let sum = num1 + num2;
// 	callback(sum);
// }

// myFunction(2, 3, function (result) {
// 	console.log(result);
// });

// function greeting(name) {
// 	alert("Hello " + name);
// }
// function processUserInput(callback) {
// 	var name = prompt("Please enter your name.");
// 	callback(name);
// }
// processUserInput(greeting);

// const param1 = function () {
// 	console.log("param1");
// };

// const param2 = function () {
// 	console.log("param2");
// };

// function sum(obj1, obj2) {
// 	// obj1 and obj2 are functions and these are knows as par
// 	console.log("hey there i am functon sum");
// 	console.log(obj1);
// 	console.log(obj2);
// }

// sum(param1, param2);

// function person() {
// 	let inner = {
// 		name: "uttkarsh",
// 		class: 12,
// 	};

// 	return inner;
// }

// console.log(person());

// var x;

// function func() {
// 	var x = (y = 1);
// }

// func();

// console.log(x, y);

// var a = 9;

// function abc() {
// 	var a;
// 	console.log(a);
// }

// abc();

// let arr = [1, 2, 3, 4, 5, 5];

// console.log(arr.push(100)); //gives the length of the arr

// console.log(arr);

// console.log(arr.pop()); // it will give the last element

// console.log(arr);

// let slicedArr = arr.slice(1);

// console.log(slicedArr, "debug slice");

// let spliceArr = arr.splice(1, 2);

// console.log(spliceArr, "debug splice");

// console.log(arr, "original array");

// let arr = ["hi", "ami", "gm"];

// let eachFun = (item, h, a) => console.log(item, h, a, "amiWants");

// arr.forEach(eachFun);

// let arr = [1, 2, 3, 4];

// const mappedArray = arr.map((item) => {
// 	console.log(item * 3);
// 	return item * 3;
// });

// console.log(mappedArray);

// function find(fn){

// 		const element = array[i];
// 		const searchedElemnt = fn(item,index,arr);
// 		if(searchedElemnt==element){
// 			return true;
// 		}else{
// 			return false;
// 		}

// }

// function fn(item){
// 	for (let index = 0; index < array.length; index++) {
// 		const x = array[index];
// 		return x;
// 	}
// }

// function foo() {

// 	return "I'm the outer function";

// };

// function test() {

// 	console.log(bar);

// 	return foo();

// 	var bar = "I'm a variable";

// 	function foo() {

// 	return "I'm the inner function";

// 	}

// }

// 	console.log(test());

// 	const nums = [1,2,3,4,5,6,7];

// 	nums.forEach((n) => {

// 	if(n%2 === 0)

// 	break;

// 	console.log(n);

// 	});

// let num = [1, 2, 3, 4];

// let numArr = [];

// for (let index = 0; index < num.length; index++) {
// 	const element = num[index];
// 	numArr.push(element * 2);
// }
// console.log(numArr);

// let newArray = num.map((item) => {
// 	return item * 2;
// });

// console.log(newArray);

// let country = "india";

// let answer = country.substring(0, 1).toUpperCase() + country.substring(1);

// console.log(answer);

// console.log("a" > "Z");

// console.log("zebra".localeCompare("abcde"));
const fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); // banana
console.log(fruits.pop()); // mango
console.log(fruits.push("orange")); // 3
