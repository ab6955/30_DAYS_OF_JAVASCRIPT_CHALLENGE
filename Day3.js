// Activity 1
// Task 1
// const num1 = 23;
// const num1 = -23;
const num1 = 0;
if (num1 > 0) {
  console.log(`Number is Positive`);
} else if (num1 < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is Zero");
}

// Task 2
const ageOfPerson = 23;
if (ageOfPerson >= 18) {
  console.log("Person is eligible to Vote");
}

// Activity 2
// Task 3
let n1, n2, n3;
n1 = 43;
n2 = 314;
n3 = 45;
if (n1 > n2) {
  if (n1 > n3) {
    console.log("n1 is the largest number");
  } else {
    console.log("n3 is the largest number");
  }
} else if (n2 > n1) {
  if (n2 > n3) {
    console.log("n2 is the largest number");
  } else {
    console.log("n is the largest number");
  }
} else if (n3 > n1) {
  if (n3 > n2) {
    console.log("n3 is the largest number");
  } else {
    console.log("n2 is the largest number");
  }
}

// Activity 3
// Task 4
const numberOfDay = 7;
switch (numberOfDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Please write a number between 1 to 7 only");
}

// Task 5
let grade = 65;
switch (true) {
  case grade < 100 && grade >= 90:
    console.log("A");
    break;
  case grade < 89 && grade >= 80:
    console.log("B");
    break;
  case grade < 79 && grade >= 70:
    console.log("C");
    break;
  case grade < 69 && grade >= 60:
    console.log("D");
    break;
  case grade < 35:
    console.log("F");
    break;
  default:
    console.log("Please enter proper marks");
    break;
}

// Activity 4
// Task 6
const randomNum = 225;
randomNum % 2 == 0
  ? console.log("NUmber is Even")
  : console.log("Number is Odd");

// Activity 5
// Task 7

const year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
