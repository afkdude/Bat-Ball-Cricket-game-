// practice

console.log("This is my personnel practice Space");


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

// function sum(a, b) {
//   return a + b;
// }

// let add = sum(2, 4);
// console.log(add);



// function generateRandomMove() {
//   let random = Math.random();
//   let randomMove = random * 3;
//   return randomMove;
// }

// console.log(generateRandomMove());
// console.log(generateRandomMove());
// console.log(generateRandomMove());
// console.log(generateRandomMove());


// function greeting(name='uncle ji') {
//   console.log(`namaste ${name}`);
// }

// greeting('sharma ji');

// greeting();

//  odd or even

// function checkNumber(number) {
//   if (number % 2 == 0) {
//     return `No is even`;
//   } else {
//     return `No is odd`;
//   }
// }

// console.log(checkNumber(2));
// console.log(checkNumber(3));
// console.log(checkNumber(4));
// console.log(checkNumber(5));
// console.log(checkNumber(25));


// return larger


// function tellBig(no1, no2) {

//   if (no1 > no2) {
//     return `${no1} is greater then ${no2}`;
//   } else if (no1 === no2) {
//     return `Both are same`;
//   } else {
//     return `${no2} is greater then ${no1}`;

//   }

// }

// console.log(tellBig(2, 4));
// console.log(tellBig(56, 4));
// console.log(tellBig(2, 400));
// console.log(tellBig(200, 200));



// celsius to fahreinhieght


// function converter(celsius) {
//   return ((((9 / 5) * celsius) + 32));
// }

// console.log(converter(0));
// console.log(converter(10));
// console.log(converter(43));
// console.log(converter(56));


// topic - object


// let user={
//   name: 'shubham amrawat',
//   age: 20,
// };

// console.log(user.name, user.age)

// console.log(user['name'], user['age']);
// console.log(typeof (user));


// console.log(user)

// delete user.age;

// console.log(user)

// complex object

// let product = {
//   company: 'Mango',
//   itemName: 'Tshirt',
//   price: 871,
//   rating: {
//     stars: 4.5,
//     noOfReviews: 87,
//   },
//   displayPractice: function () {
//     console.log('shubham ');
//   }

// };

// console.log(product['company']);
// console.log(product['itemName']);
// console.log(product['price']);

// console.log(product['rating']);
// console.log(product['rating'].stars);
// console.log(product['rating'].noOfReviews);

// console.log(product['displayPractice']);
// product.displayPractice();

//  topic - autO Boxing


// practice exerscise

//  product from myntra

// let product = {
//   brand: "Urban Monkey",
//   name: 'Cotton Tshirt',
//   fit: 'relaxed fit',
//   price: 700,
//   dilveryTime: 'same day dilvery',
// };

// question 2 creating two references
// let product2 = product;
// console.log(product.brand);

// product2.brand = 'Roadster';

// console.log(product.brand);


// question 3

// console.log(product['dilveryTime']);

//QUESTION 4

// let objNew = {
//   message: 'good job',
//   status: 'complete',
// };

// let { message, status } = objNew;

// console.log(`${message} ${status}`);


// json

// let product = {
//   company: 'Mango',
//   itemName: 'Tshirt',
//   price: 871,
//   rating: {
//     stars: 4.5,
//     noOfReviews: 87,
//   },
//   displayPractice: function () {
//     console.log('shubham ');
//   }

// };

// let str = JSON.stringify(product);
// console.log(typeof product);
// console.log(product);

// console.log(typeof str);

// console.log(str);


// let newProduct = JSON.parse(str);

// console.log(typeof newProduct);
// console.log(newProduct);


// Local Storage


// let product = {
//   company: 'Mango',
//   itemName: 'Tshirt',
//   price: 871,
//   rating: {
//     stars: 4.5,
//     noOfReviews: 87,
//   },
//   displayPractice: function () {
//     console.log('shubham ');
//   }
// }

// localStorage.setItem('name', 'shubham');
// localStorage.setItem('Price', '2345');

// console.log(localStorage.getItem('name'));

// localStorage.setItem('Product', JSON.stringify(product));
// console.log(localStorage.getItem('Product'))

// let product2 = JSON.parse(localStorage.getItem('Product'));

// console.log(product2);

// localStorage.removeItem('Price')


// let score2 = {
//   win: 0,
//   lost: 0,
//   tie: 0,
// };

// localStorage.setItem('Score', JSON.stringify(score2));
// console.log(localStorage.getItem('Score'));
