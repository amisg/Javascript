/*
    Callback Function
*/

// function greeting(func) {
//   // own work

//   const a = 12;
//   console.log("my log is ", a);

//   //   later on it is calling the func..
//   func();
// }

// function hindi() {
//   console.log("Namaste!!");
// }

// function english() {
//   console.log("Hello!");
// }

// function french() {
//   console.log("borjour!!!");
// }

// // greet Hindi people

// greeting(hindi);

// hindi is a callback function

/*

    Arrays.map 

*/

// const arr = [1, 2, 3, 4, 5];

// double each element inside this array..
// const newArray = [];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArray[index] = 2 * element;
// }

// const mappedArray = arr.map((item) => {
//   return 2 * item;
// });

// console.log(mappedArray);
// console.log(arr);

// {} + 1

// {} + {}

// [] + []

/*

    


*/
let sum = 0;
for (let i = 1; i <= 10; i++) {
	if (i % 2 == 0) {
		continue;
	}
	if (i > 5) {
		break;
	}
	sum += i;
}
console.log(sum);
