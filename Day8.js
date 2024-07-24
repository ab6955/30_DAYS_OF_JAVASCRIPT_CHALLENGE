// Activity 1
// Task 1
const name = "Abdullah";
const age = 20;
const str = `My name is ${name} and I am ${age} years old.`;
// console.log(str);

// Task 2
const multiLineStr = `He heard the loud impact before he ever saw the result.
It had been so loud that it had actually made him jump back in his seat.
    As soon as he recovered from the surprise, he saw the crack in the windshield.
        It seemed to be an analogy of the current condition of his life.`;
// console.log(multiLineStr);

// Activity 2
// Task 3
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const { 0: firstElement } = arr;
const { 1: secondElement } = arr;
// const { 2: thirdElement } = arr;
// const { 3: fourthElement } = arr;
// const { 4: fifithElement } = arr;
// const { 5: sixthElement } = arr;

// console.log(firstElement);
// console.log(secondElement);
// console.log(thirdElement);
// console.log(fourthElement);
// console.log(fifithElement);
// console.log(sixthElement);

// Task 4
const book = {
  title: "Atomic Habits",
  author: "James clear",
  price: 799,
  publisher: "Penguin",
};
const { title: t } = book;
const { author: a } = book;
// console.log(t);
// console.log(a);

// Activity 3
// Task 5
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const newArr = [...arr1, ...arr2];
// console.log(newArr);

// Task 6
function add(...valuen) {
  let sum = 0;
  for (const value of valuen) {
    sum += value;
  }
  return sum;
}
// console.log(add(1,2,3,4,5));

// ACtivity 4
// Task 7
function product(value1, value2 = 2) {
  return value1 * value2;
}

// console.log(product(4));

// Activity 5
// Task 8
const propName1 = "first_name";
const propName2 = "middle_name";
const propName3 = "last_name";
const val1 = "Abdullah";
const val2 = "Ansari";
const val3 = "Ahmed";

const myObject = {
  [propName1]: val1,
  [propName2]: val2,
  [propName3]: val3,
  age: 20,

  greet: function () {
    console.log(
      `Hello my name is ${this.first_name} and I am ${this.age} year old.`
    );
  },
};
// console.log(myObject[propName1]);
myObject.greet();

// Task 9
const property1 = "first_Name";
const property2 = "Middle_Name";
const property3 = "age";
const value1 = "Abdullah";
const value2 = "Ahmed";
const value3 = 20;

const obj = {
  [property1]: value1,
  [property2]: value2,
  [property3]: value3,
};
// console.log(obj[property1]);
// console.log(obj[property2]);
// console.log(obj[property3]);
