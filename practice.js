// practice


// let age = Math.random()
// let gender = Math.random('Male', 'Female');
// let age = 60;
// let gender = 'female';
// let finalDiscount;

// if (age <= 5) {
//   finalDiscount = 100;
// } else if (gender === 'female') {
//   finalDiscount = 50;
// } else if (age <= 8) {
//   finalDiscount = 50;
// } else if (age >= 65) {
//   finalDiscount = 30;

// } else {
//   finalDiscount = 0;
// }
// console.log(`your final discount is ${finalDiscount}`);

//  topic - Functions

// function greet(name) {
//   console.log(`Hello  Mr ${name}`);
// }

// greet("Shubham Amrawat ");


// function age(old) {

//   console.log(`You are ${old} years old`);

// }

// age(21)

function sum(a, b) {
  return a + b;
}

let add = sum(2, 4);
console.log(add);



function generateRandomMove() {
  let random = Math.random();
  let randomMove = random * 3;
  return randomMove;
}

console.log(generateRandomMove());
console.log(generateRandomMove());
console.log(generateRandomMove());
console.log(generateRandomMove());
