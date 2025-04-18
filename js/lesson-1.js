
//Завдання 1:
//Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().
//////////////////////////////////////////////////////////////////////////////////////////////////////
// //let username = "Mango";
// username = "Poly";
// console.log(typeof username);


// let userName;
// userName = "Petia";
// console.log(typeof userName);
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(c);
// const name = "Mango " + 33;
// //const message = name + "25" + " heppy" + "!";
// console.log(message);


// const username = "Poly";
// const message = "Welcome, " + username + "!";
// console.log(typeof message);
// console.log("5" + 2);
// console.log(typeof  "10" + false);



// function getGreetingMessage(firstName, lastName) {
//     return `Привіт, ${firstName} ${lastName}! Ласкаво просимо на сайт.`;
// }

// getGreetingMessage("Олена", "Петренко");
//     console.log(getGreetingMessage("Олена", "Петренко"));

// const product = "Дрон";
// const price = 350;
// const quentity = 3;
 
//  function getOrderSummary(product, price, quentity) {
//     const total = price * quentity;
//     return `Товар: ${product}. Ціна за одиницю: ${price} грн. Кількість: ${quentity}. Загальна сума: ${total} грн.`;


//  }
     

//  console.log(getOrderSummary("Дрон", 400, 3));


//  function greetUser(name) {
//     return `Вітаємо, ${name}! Гарного вам дня!`;
//  }

// const name = ["Оля", "Вася", "Іра"];
// name.forEach(name => {
//     console.log(greetUser(name));
// });

// function greetWithCity(name, city) {
//     return `Привіт, ${name}! Як там у ${city} сьогодні?`;
// }

// console.log(greetWithCity("Галюня", "Чоповичі"));

// function orderInfo(product, quantity, pricePerItem) {
//     const totalPrice = quantity * pricePerItem;
//     return `Ви замовили ${quantity} шт. товару "${product}" за ціною ${pricePerItem} грн. Загальна сума: ${totalPrice} грн.`;
// }
// console.log(orderInfo("Планшет", 2, 4500));



// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`;
// console.log(message);


// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength -1];
// console.log(lastElement);

// const a = "5";
// const b = 5;

// console.log(a == b);
// console.log(a === b);
// console.log(Number("5" * 2));
// console.log(5 - true);

// const value = "42";
// const number = Number.parseInt(value);
// console.log(number);
// function doStuff() {
//     // Тіло функції
//     console.log('Log inside multiply function');
//   }

// doStuff()
// Оголошення параметрів x, y, z
// function foo() {
// 	// Локальна змінна
// 	const value = "I'm a local variable";
// 	// Можна звернутися до локальної змінної
// 	console.log(value); // "I'm a local variable"
// }

//  foo();
//  console.log(value);
// function makeTransaction(quantity, pricePerDroid) {
//       const totalPrice = quantity * pricePerDroid;
//       return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// };
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
////////////////////////////////////////////////////////////////////////////////////////////////////


function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee

    return `Shipping to ${country} will cost ${totalPrice} credits`;

};

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
////////////////////////////////////////////////////////////
function getElementWidth(content, padding, border) {
    const contentNambr = parseInt(content);
    const paddingNamber = parseInt(padding);
    const borderNamber = parseFloat(border);
    
    return contentNambr + (paddingNamber * 2) + (borderNamber * 2); 

};

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
