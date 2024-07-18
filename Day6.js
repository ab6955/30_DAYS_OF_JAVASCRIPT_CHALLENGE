// Activity 1
// task 1
const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// task 2
// console.log(arr[0]);
// console.log(arr[4]);
// or (another method)
// for (let i = 0; i < arr.length; i++) {
//   if (i === 0) {
//     console.log(`First Element is ${i}`);
//   } else if (i === arr.length - 1) {
//     console.log(`Last Element is ${i}`);
//   }
// }

// Activity 2
// task 3
arr.push(29);
// console.log(arr);

// task 4
arr.pop();
// console.log(arr);

// task 5
arr.shift();
// console.log(arr);

// task 6
arr.unshift(9);
// console.log(arr);

// Activity 3
// Task 7
const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = myarr.map((num) => {
  return num + num;
});
// console.log( newArr);

// Task 8
let createdArr = [];
myarr.filter((num) => {
  if (num % 2 == 0) {
    createdArr.push(num);
  }
  return createdArr;
});
// console.log(createdArr);

// Task 9
const newArr2 = myarr.reduce((acc, curvalue) => {
  return acc + curvalue;
}, 0);
// console.log(newArr2);

// Activity 4
// Task 10
for (let i = 0; i < myarr.length; i++) {
  const element = myarr[i];
  //   console.log(element);
}

// TAsk 11
myarr.forEach((item) => {
  //   console.log(item);
});

// Activity 12
// Task 12
// Note: Very interesting one!
const twoDArr =
  // easy way to build 2D array
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ];

// another is using loop.

// here we make a mistake(did not create 2d array) which we solved further
// let row = 4;
// let column = 5;
// let array = [i][j];
// for (let row = 1; row < 4; row++) {
//   for (let column = 1; column < 5; column++) {
//     console.log(`row: ${row} ; column:${column}`);
//   }
// }

let rows = 3;
let cols = 4;

// here we creare 2d array
let array = new Array(rows);
for (let i = 0; i < rows; i++) {
  array[i] = new Array(cols);
}

// here we initilize values in 2d array
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    array[i][j] = 3;
  }
}
// console.log(array);

// Task 13
console.log(array[2][3]); // although ans will be same for any input beacuse all values are same.
