// Activity 1
// Task 1
for (let i = 1; i <= 10; i++) {
  const element = i;
  //   console.log(element);
}

// Task 2
for (let i = 1; i <= 10; i++) {
  const number = 5;
  //   console.log(`${number} * ${i} = ${number * i}`);
}

// While loop
// Task 3
let i = 0;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}
// console.log(sum);

// Task 4
let num = 10;
while (num >= 1) {
  //   console.log(num);
  num--;
}

// Activity 3
// Task 5
let x = 1;
do {
  // console.log(x);
  x++;
} while (x <= 5);

// Task 6
let mul = 10;
let fact = 1;
let numb = 1;
do {
  fact = fact * numb;
  numb++;
} while (numb <= mul);
// console.log(fact);

// Activity 4
// Task 7
for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star = star + "* ";
  }
  console.log(star);
}

//Activity 5
// Task 8
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  //   console.log(i);
}

// console.log("");

// Task 9
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  //   console.log(i);
}
