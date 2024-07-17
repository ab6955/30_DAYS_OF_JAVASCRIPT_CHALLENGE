// Activity 1
// Task 1
function check(number) {
  if (number % 2 === 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd");
  }
}
// check(42);

// Task 2
function square(number) {
  let result = number * number;
  return result;
}
const numberSquare = square(4);
// console.log(numberSquare);

// Activity 2
// Task 3
function maximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
// console.log(maximum(1212312,2381221));

// Task 4
function concat(str1, str2) {
  return str1 + str2;
}
// console.log(concat("Abd", "ans"));

// Activity 3
// Task 5
const sum = (num1, num2) => {
  return num1 + num2;
};
// console.log(sum(243, 32));

// Task 6
const contain = (str) => {
  return str.includes("A");
};
// console.log(contain("Abdullah"));

// Activity 4
// Task 7
const product = (num1, num2 = 4) => {
  return num1 * num2;
};
// console.log(product(2));

// Task 8
const greeting = (name, age = 45) => {
  return `Hello ${name} and your age is ${age} `;
};
// console.log(greeting("Abdullah"));

// Activity 5
// Task 9
const repeatFunction = (func, number) => {
  for (let i = 0; i < number; i++) {}
  func("Abdullah");
};
const printme = (name) => {
  console.log(`Hello ${name}`);
};

// repeatFunction(printme, 3);

// Task 10
const bigFunction = (fun1, fun2, value) => {
  const result1 = fun1(value);
  console.log(result1);
  const result2 = fun2(result1);
  return result2;
};

const f1 = (x) => {
  return x + 2;
};
const f2 = (x) => {
  return x * 10;
};

console.log(bigFunction(f1, f2, 3));
