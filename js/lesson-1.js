
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
// // console.log(a === b);
// // console.log(Number("5" * 2));
// // console.log(5 - true);

// // const value = "42";
// // const number = Number.parseInt(value);
// // console.log(number);
// // function doStuff() {
// //     // Тіло функції
// //     console.log('Log inside multiply function');
// //   }

// // doStuff()
// // Оголошення параметрів x, y, z
// // function foo() {
// // 	// Локальна змінна
// // 	const value = "I'm a local variable";
// // 	// Можна звернутися до локальної змінної
// // 	console.log(value); // "I'm a local variable"
// // }

// //  foo();
// //  console.log(value);
// // function makeTransaction(quantity, pricePerDroid) {
// //       const totalPrice = quantity * pricePerDroid;
// //       return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// // };
// // console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// // console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// // console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
// ////////////////////////////////////////////////////////////////////////////////////////////////////


// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee

//     return `Shipping to ${country} will cost ${totalPrice} credits`;

// };

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
// ////////////////////////////////////////////////////////////
// function getElementWidth(content, padding, border) {
//     const contentNambr = parseInt(content);
//     const paddingNamber = parseInt(padding);
//     const borderNamber = parseFloat(border);
    
//     return contentNambr + (paddingNamber * 2) + (borderNamber * 2); 

// };

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
// ///////////////////////////////////////////////////////////////////


// function getPrice(subscription) {
//     let prais = 0;
//     if (subscription === "pro") {
//         prais = 100;
       

//     }
//     return prais;
// }
// console.log(getPrice("pro"));
// console.log(getPrice("free"));

// // function checkAge(age) {
// //     if (age >= 18) {
// //       console.log("You are an adult");;
    
// //     }  else {
// //         console.log("No adult");
// //     }
// //     }
// //     //checkAge(20);
// //     console.log(checkAge(17));

// function checkStorage(available, ordered) {
//     if (available >= ordered) {
//       console.log("Order is processed, our manager will contact you")
//     } else {
//       console.log("Not enough goods in stock!")
//     }
//   }
//   checkStorage(10, 50);
//   checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);
// /////////////////////////////////////////////////////////////////

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return correctPassword === password ? "Access granted" : "Access denied, wrong password!";
//   }
//   console.log(checkPassword("jqueryismyjam"));
//   console.log(checkPassword("angul4r1sl1f3"));
//   console.log(checkPassword("r3actsux"));
//   ////////////////////////////////////////////////////////////////////////

//   function getSubscriptionPrice(type) {
//     switch (type) {
//       case "starter":
//         console.log(0);
//         break;
//       case "professional":
//         console.log(20);
//         break;
//       case "organization":
//         console.log(50);
//         break;
//        default:
//       console.log("Invalid subscription type!"); 
//     }
//   }
//   console.log(getSubscriptionPrice("professional"));
//   console.log(getSubscriptionPrice("organization"));
//   ////////////////////////////////////////////////////////////////////////

//   function makeTransaction(quantity, pricePerDroid, customerCredits) {
//       const priceOrder = quantity * pricePerDroid;
//       if (customerCredits >= priceOrder ) {
//         return `You ordered ${quantity} droids worth ${priceOrder} credits!`;
        
//       } else {
//         return "Insufficient funds!";
//       }
//   }

//   console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// function isNumberInRange(start, end, number) {
//     return start <= number && end >= number;
      
    
//   }
//   console.log(isNumberInRange(10, 30, 17));
//   console.log(isNumberInRange(10, 30, 5));
//   isNumberInRange(20, 50, 24);
//   isNumberInRange(20, 50, 76);
//   ////////////////////////////////////////////////////////////////////////

//   function checkAccess(subType) {
//     return subType === "pro" || subType === "vip";
//   }
//   console.log(checkAccess("pro"));
//   console.log(checkAccess("starter"));
//   checkAccess("vip");
//  console.log( checkAccess("free"));
//  //////////////////////////////////////////////////////////////
//  const message = "Привіт як справи!";
//  console.log(message.toUpperCase());
//  ////////////////////////////////////////////////////////////////////
   
//  function getSubstring(string, length) {
//     return string.slice(0, length);
//   }
//    console.log( getSubstring("Hello world", 3));
//   console.log(getSubstring("Hello world", 5));
//   console.log(getSubstring("Hello world", 8));
//   console.log(getSubstring("Hello world", 11));
  //////////////////////////////////////////////////////////////////////


//   function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//       return "File extension matches";
//     } else {
//       return "File extension does not match";
//     }
  
//   }
  
//  console.log(checkFileExtension("styles.css", ".css"));
//   console.log(checkFileExtension("styles.css", ".js"));
//   console.log(checkFileExtension("app.js", ".js"));
//   console.log(checkFileExtension("app.js", ".html"));
//   checkFileExtension("index.html", ".html");
//   checkFileExtension("index.html", ".css");
//   checkFileExtension("index.html", ".js");
//   ////////////////////////////////////////////////////////////////////////////
//   function getFileName(file) {
//     const symbolIndex = file.indexOf(".");
//     console.log(symbolIndex);
//   }
//   console.log(getFileName("styles.css"));
//   console.log(getFileName("app.js"));
//   console.log(getFileName("app"));
//   getFileName("index.js");
//   getFileName("index.html");
//   getFileName("index.css");
//   getFileName("index");
//   ///////////////////////////////////////////////////////////////////////////////////
//   function getFileName(file) {
//     const dotIndex = file.indexOf(".")
//     if (dotIndex === -1) {
//       return file;
//      }
//     return file.slice(0, dotIndex);
//   }
//  //console.log( getFileName("styles.css"));
//   getFileName("app.js");
//   getFileName("app");
//   getFileName("index.js");
//   getFileName("index.html");
//   getFileName("index.css");
//   getFileName("index");
//   ///////////////////////////////////////////////////////////////////////////
// //   let count = 0;

// // while (count < 10) {
// //   console.log(`Count: ${count}`);
// //   count += 1;
// // }
//   /////////////////////////////////////////////////////////////
//   function countClients(clientCounter, maxClients) {
//     let client = clientCounter;
//     while (client < maxClients) {
//         console.log(client);
//         client += 1;
        
//   }
  
// }
//   countClients(18, 25)
//   ////////////////////////////////////////////////////////////////
//   function calculateTotal(number) {
//     let total = 0;
//     let i = 1;
//     while (i <= number) {
//       total += i;
//       i += 1;
//     }
//     return total;
//   }
//   calculateTotal(1);
//   calculateTotal(3);
//   calculateTotal(0);
//   console.log(calculateTotal(18));
//   console.log(calculateTotal(24));
//  ///////////////////////////////////////////////////////////////////////////////
 
// //  function calculateTotal(number) {
// //     let sum  0;


// //  }

// //  calculateTotal(1);
// // calculateTotal(0);
// // calculateTotal(7);
// //  calculateTotal(18);
// // calculateTotal(24);
// // calculateTotal();
// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // Виведи довжину рядка "JavaScript is fun!"
// const string = "JavaScript is fun!";
// console.log(string.length)
// ////////////////////////////////////////////////////////////////////////////

// function formatMessage(message, maxLength) {
//     const messageLength = message.length;
//     //console.log(messageLength);
//     if (messageLength <= maxLength) {
//         return message;
//     } else {
//         return `${message.slice(0, maxLength)}...`;
//     }
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function checkForSpam(message) {
//     const messageToUpper = message.toUpperCase();
      
//       if (messageToUpper.includes("spam") || messageToUpper.includes("sale")) {
//         return true;

//       } else {
//         return false;
//       }

// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// /////////////////////////////////////////////////////////////////////////////////////
// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i += 5) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }

// }
// const browserType = "mozilla";

// if (browserType.includes("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }
//////////////////////////////////////////////////////////
//Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().
//  const user = prompt("ВЕДІТЬ ЧИСЛО!");
//  const number = Number(user);
// //  if (number === 10) {
// //     alert('Вірно');
    
    
// //  } else {
// //     alert('Невірно');
// //  }
// number === 10 ? alert('Вірно') : alert('Невірно');
/////////////////////////////////////////////////////////////////////////////////


// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// const min = Math.floor(Math.random() * 60);
// let message;
// if(min >= 0 && min <= 14) {
//     message = `${min} входить в першу чверть години`;
// } else if(min <= 15 && min <= 29) {
//     message = `${min} входить в другу чверть години`;

// }  else if(min <= 30 && min <= 44) {
//     message = `${min} входить в третю чверть години`;
    
// } else if(min <= 45 && min <= 49){
//     message = `${min} входить в четверту чверть години`;

// } else {
//     message = "Щось пошло не так!!";
// }
// alert(message);
//////////////////////////////////////////////////////////////////
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

//  const user = Number(prompt("Ведіеь число від 0 до 4"));
//     let result;
//  switch (user) {
//      case 1:
//          result = "зима";
//          break;
//         case 2:
//          result = "весна";
//          break;
//          case 3:
//          result = "літо";
//          break;
//          case 4:
//          result = "осінь";
//          break;
//          default:
//              result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";



//  }
//  alert(result);
//  console.log(result);
////////////////////////////////////////////////////////////////////

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
// const user = prompt("Введіть кількість хвилин");
// console.log(formatTaim(user));



// function formatTaim(totalMinuts) {
//     const hora = Math.floor(totalMinuts / 60);
// //console.log(typeof hora);
//        const modificHora = String(hora).padStart(2, "0");
//        const minuts = totalMinuts % 60;
//        const modificMinuts =String(minuts).padStart(2, "0");

//     return `${modificHora}:${modificMinuts}`;

// }
 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// 
// function getNumbers(min, max) {
    
//     let sum = 0;
//     for(let i = max; i >= min; i -= 1) {
//         console.log(i);
//         if(i % 2 === 0) {
//             sum += i;

//         }

//     }
//     return sum;
// }
// console.log(getNumbers(2, 10));
//////////////////////////////////////////////////////////////////////////////

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const user = prompt("Введіть логін");

// if(user === "Адмін") {
//     const password = prompt("Введіть пароль");
//     if(password === "пароль") {
//         alert("Добрий день!");
    
//     } else if(password === "" || password === null) {
//         alert("Скасовано");


//     } else {
//         alert("Невірний пароль");
//     }
// } else if (user === "" || user === null) {
//     alert("Скасовано");

// } else {
//     alert("Я вас не знаю");
// }
/////////////////////////////////////////////////////////////////////////////////////
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.


// function numeros(dosdecimas) {
//     let count = 0;
//     while (count <= dosdecimas) {   
//         console.log(`Count: ${count}`);
//         count++;
    
//     }
//     return count;
// }

// numeros(20)
/////////////////////////////////////////////////////////////////////////////

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
//  function min(a, b) {

//     if(typeof a !== "number" || typeof b !== "number") {
//       return 'Not a number!';

//     }
//     return a < b ? a : b;
//  }
//  console.log(min(5, 10));      
// console.log(min(15, 3));      
// console.log(min("5", 10));    
// console.log(min(5, "hello")); 
///////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).


// function isAdult(age) {
//   if (age >= 18 ) {
//         return true;
//   }  else {
//     return confirm("Ви впевнені що хочете продовжити?");

//   }
// }


// console.log(isAdult(20));
// console.log(isAdult(17));
///////////////////////////////////////////////////////////////////////////////////
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
// function fizzBuzz(num) {
     

//     for(let i = 1; i <= num; i += 1) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
 
//         } else if(i % 3 === 0) {
//             console.log('fizz');
//         } else if(i % 5 === 0) {
//             console.log('buzz');

//         } else {
//             console.log(i);
//         }
//     }

    
// }
// fizzBuzz(15);
//////////////////////////////////////////////////////////////////////////////////
// function getShippingCost(country) {
//     let price;
//     switch(country) {
//         case "China":
//             price = 100;
//             break;  
//         case "Chile":
//             price = 250;
//             break;   
//         case "Australia":
//             prais = 170;
//             break;
//         case "Jamaica":
//             prais = 120;
//             break;
             
//          default: 
//             return `Sorry, there is no delivery to your country`;
//         }
//         return `Shipping to ${country} will cost ${price} credits`;
// }
// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const fruits = ["apple", "plum", "pear", "orange"];
// const fruitsOrang = fruits[3];
// console.log(fruitsOrang.toUpperCase());
// fruits[0] = "fresa";
// console.log(fruits);
// const planets = [ ' Земля' , 'Марс' , 'Венера' ];
// const planet = planets[planets.length -1]

// console.log(planet);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function getLastElementMeta(array) {
//     const indexArrey = array.length -1;
//     const elementArray = array[indexArrey];
//     return [indexArrey, elementArray];
//   }
//   console.log( getLastElementMeta(["apple", "peach", "pear", "banana"]));
//    getLastElementMeta(["apple", "peach", "pear"]);
//    getLastElementMeta(["apple", "peach"]);
//    getLastElementMeta(["apple"]);
///////////////////////////////////////////////////////////////////////////////////////////
  
// function getExtremeElements(array) {
//     const elementArray = array[array.length -1]
//     return [array[0], elementArray];
//   }
//   getExtremeElements([1, 2, 3, 4, 5]);
//      console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//      getExtremeElements(["apple", "peach", "pear", "banana"]);
////////////////////////////////////////////////////////////////////////////////////////////////////


    // const getExtremeElements = ["apple", "peach", "pear", "banana"];
    // console.log(getExtremeElements.join());
///////////////////////////////////////////////////////////////////////////
// function getLength(array) {
//     const arrayString = array.join("");
    
//     return arrayString.length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// getLength(["M", "a", "n", "g", "o"]);
// getLength(["top", "picks", "for", "you"]);
///////////////////////////////////////////////////////////////////////////////
// const words = ["JavaScript", "це", "класна", "мова"];
// const string = words.join(" ");
// console.log(string);
// /////////////////////////////////////////////////////////////////////
// const fruits = ["яблуко", "банан", "апельсин"];
// const allFruits = `Вивід: "${fruits.join(", ")}"`;
// console.log(allFruits);
// // Вивід: "яблуко, банан, апельсин"
// /////////////////////////////////////////////////////////////////////
// const phoneDigits = [0, 9, 7, 1, 2, 3, 4, 5, 6, 7];
// const numeroPhone = `${phoneDigits.slice(0, 3).join("")}-${phoneDigits.slice(3, 6).join("")}-${phoneDigits.slice(6, 10).join("")}`;
// console.log("Вивід:", numeroPhone);

// // Вивід: "097-123-4567"
// ////////////////////////////////////////////////////////////////////////////////

// // Маємо масив частин адреси електронної пошти
// const emailParts = ["user", "example", "com"];
// // Завдання: з'єднай частини через символ "@", потім "." щоб отримати "user@example.com"
// const email = `${emailParts.slice(0, 1)}@${emailParts.slice(1, 2)}.${emailParts.slice(2, 3)}`;
// console.log(email);
// ///////////////////////////////////////////////////////////////////////////////////////////////
// function calculateEngravingPrice(message, pricePerWord) {
//     const arrayWords = message.split(" ").length;
//     return arrayWords * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log( calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log( calculateEngravingPrice("Web-development is creative work", 40));
//  calculateEngravingPrice("Web-development is creative work", 20);
// ///////////////////////////////////////////////////////////////////////////////////////////
// 
// function getSlice(array, value) {
//     const elementArray = array.indexOf(value);
    
//     if(elementArray === -1) {
//         return "Елемент не знайшли!!!";
//     }
//     return array.slice(0, elementArray + 1);
//   }


// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// getSlice(["Mango", "Poly", "Ajax"], "Mango");
// getSlice(["Mango", "Poly", "Ajax"], "Jacob");
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));

////////////////////////////////////////////////////////////////////////////////
// function createArrayOfNumbers(min, max) {
//   const arrayNumbers = [];
//   for (let i = min; i <= max; i++) {
//     arrayNumbers.push(i)
//   }
// return arrayNumbers;
// }

//  createArrayOfNumbers(1, 3);
//    console.log(createArrayOfNumbers(14, 17));
//    createArrayOfNumbers(29, 34);
////////////////////////////////////////////////////////////////////////////////////
// function slugify(title) {
//     const arrayTitle = title.toLowerCase().split(" ");

// return arrayTitle.join("-");
// }


// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
// ///////////////////////////////////////////////////////////////////////////////////

// function makeArray(firstArray, secondArray, maxLength) {
//      const array = firstArray.concat(secondArray);
//      //console.log(array);
//      return array.slice(0, maxLength);
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//    const array = [];
//    for (let i = 0; i < numbers.length; i++) {
    
//     if (numbers[i] > value) {
//         array.push(numbers[i])
//     }
//     }
//    return array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
/////////////////////////////////////////////////////////////////////////////////

// function calculateTotalPrice(order) {
//     let suma = 0;
//       for (let i = 0; i < order.length; i++) {
//         suma += order[i];
//       }
//       return suma;
//     }
//    console.log( calculateTotalPrice([12, 85, 37, 4]));
//     console.log(calculateTotalPrice([164, 48, 291]));
//     console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
///////////////////////////////////////////////////////////////////////////////////////////
// function getEvenNumbers(start, end) {
//     const evenNumbers = [];


// //      if (typeof start !== "number" || typeof end !== "number") {
// //        console.log("Введіть два числа");
// //          return [];

// //      }
// //     for (let i = start; i <= end; i++) {
// //       if (i % 2 === 0) {
// //         evenNumbers.push(i);
// //         }
// //       }
// //     return evenNumbers;
// //     }
// //   console.log(getEvenNumbers(2, 5));
// //  console.log( getEvenNumbers(3, 11));
// //   getEvenNumbers(6, 12);
// //   getEvenNumbers(8, 8);
// //   getEvenNumbers(7, 7);
// // console.log(getEvenNumbers());
//   //////////////////////////////////////////////////////////////////////////
//   function checkStorage(storage, item) {
//     const itemToLowerCase = item.toLowerCase();
//     if (storage.includes(itemToLowerCase)) {
//         return `${itemToLowerCase} is available to order!`;
  
//   } else {
//     return "Sorry! We are out of stock!";
//   }
  
// }  
//   console.log( checkStorage(["apple", "plum", "pear"], "pLuM"));
//     console.log(checkStorage(["apple", "plum", "pear"], "pear"));
//    console.log( checkStorage(["apple", "plum", "pear"], "pEAr"));
//     console.log(checkStorage(["apple", "plum", "pear"], "orange"));
//     console.log(checkStorage(["apple", "plum", "pear"], "carrot"));
/////////////////////////////////////////////////////////////////////////////

// function getCommonElements(array1, array2) {
//     const arrayNumbers = [];
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             arrayNumbers.push(array1[i]);
//         }
//     }
//   return arrayNumbers;
// }
//  console.table(getCommonElements([1, 2, 3], [2, 4]), [1, 2]);
//       console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//       getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
//       getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
//       getCommonElements([1, 2, 3], [10, 20, 30]);
//////////////////////////////////////////////////////////////////////////////////
// function calculateTotalPrice(order) {
//     let suma = 0;
//     for (const item of order) {
//       suma += item;
      //     }
//     return suma;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   calculateTotalPrice([164, 48, 291]);
//   calculateTotalPrice([412, 371, 94, 63, 176]);
//   calculateTotalPrice([]);
///////////////////////////////////////////////////////////////////////////////////

// function foo() {
//     // У змінній args буде повноцінний масив з усіх аргументів
//     const args = Array.from(arguments);
//       return args.join(" , ");
//       return args;
//   }
  
//   console.log(foo(1, 2, 3)); // Поверне "1-2-3"
  
  

// const a = [1, 2, 3,];
// const b = a

// a[1] = 500;
// console.log("a", a);
// console.log(a === b);

// const makeArray = ["Mango", "Poly", "Houston", "Ajax", "Chelsea"];

// for (let i = 0; i < makeArray.length; i++) {
// console.table(`${i + 1}: -${makeArray[i]}`);
// }
////////////////////////////////////////////////////////////////////////////

// const number = [1, 2, 5, 56, 7, 8, 10]
// let total = 0;
// for (let i = 0; i < number.length; i++) {
//     if (!(number[i] % 2))
//         total += number[i];
// }

// console.log(total);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
 
// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// const nuwStyle = ["classic"];
// //styles[1] = "classic";
// const nuwStyles = nuwStyle.concat(styles);


// const str = nuwStyles.indexOf("blues");
// if (str !== -1) {
//     nuwStyles[str] = "pop";
// }
// nuwStyles[str] = "pop";

// //nuwStyles.shift();
// //nuwStyles.pop();
// console.log(nuwStyles);
// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i +1} - ${array[i]}`);
//     }
// }
//logItems(styles)
///////////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//     const userName = prompt("Введи своє ім`я");
//     if (userName === null || userName.trim() === "") {
//         alert("Введення скасовано або порожнє");
//         return;

//     }

//     if (array.includes(userName)) {
//         alert (`"Welcome, ${userName}!"`);
//     } else {
//         alert ("User not found");
//     }
// }

// const logins = ["Peter", "John", "Igor", "Sasha"];

// checkLogin(logins);
/////////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...arg) {
//  for (let i ) {

//  }
// }

// console.log(calculateAverage(10, 20, 30));       // 20
// console.log(calculateAverage(5, "text", 15));    // 10
// console.log(calculateAverage("a", "b"));         // "Жодного числа не передано."
///////////////////////////////////////////////////////////////////////////////////////////////
// const values = [2, 34, 56, 3, 5, 24, 1]; 
// let min;
// for (let i = 0; i < values.length; i++) {
//     if (i === 0) {
//         min = values[i];
// } else if (values[i] < min) {
//     min = values[i];

// }
// }
// console.log(min);
  ////////////////////////////////////////////////////////////////////////////////////////////

//   function createReversedArray() {
//     const arrayRevers = Array.from(arguments).toReversed();
//     return arrayRevers;
//   }
//   console.log(createReversedArray(12, 85, 37, 4));
//     console.log(createReversedArray(164, 48, 291));
//     console.log(createReversedArray(412, 371, 94, 63, 176));
/////////////////////////////////////////////////////////////////////////////////////



// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = [];
//   for (const key in book) {
//     keys.push(key)
//      // Ключ
//     //console.log(book[key]);  // Значення властивості з таким ключем
//   }
//   const value = [];
//   for (const key in book) {
//     value.push(book[key]);

//   }
//   console.log(value);
///////////////////////////////////////////////////////////////////////////////////
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   //console.log(keys); // ['title', 'author', 'genres', 'rating']
//   for (const key of keys) {
//     //console.log(book[key]);
//   }
///////////////////////////////////////////////////////////////////////
// function countProps(object) {
//    const keys = Object.keys(object);
//    return keys.length;
//   }
  
//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
///////////////////////////////////////////////////////////////////////////////////////////
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ["title", "author", "rating"]
  
//   const values = Object.values(book);
//   console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
  ////////////////////////////////////////////////////////////////////////////////////////
//   function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const array = Object.values(salaries);
//     for (const solary of array) {
//       totalSalary += solary;
//     }
//     return totalSalary;
//   }
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
//   const hexColors = [];
//   const rgbColors = [];
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
//   }
// console.log(hexColors);
// console.log(rgbColors);
///////////////////////////////////////////////////////////////////////////////////////

// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell" },
//     { title: "Beside Still Waters", author: "Robert Sheckley" },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
//   ];
  
//   const authorToSearchFor = "Robert Sheckley";
  
//   for (const book of books) {
//       if(book.author === authorToSearchFor) {
//           console.log(book);
//           console.log(book.title)
//           console.log(book.rating)
//       }
//   }
/////////////////////////////////////////////////////////////////////////////////////////////////
// function getProductPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     for (const product of products) {
//       if (product.name === productName) {
//         return product.price;
//     } 
//     }
//   return null;
// }
// console.log(getProductPrice("prop"));
//////////////////////////////////////////////////////////////////////////////////////////////
// function getProductPrice(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     for (const product of products) {
//         if (product.name === propName) {
//             return product.price;
//         }
//     }
//     return null;
// }
// console.log(getProductPrice("Radar"));
//  console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));
/////////////////////////////////////////////////////////////////////////////////
// const products = [
//           { name: "Radar", price: 1300, quantity: 4 },
//           { name: "Scanner", price: 2700, quantity: 3 },
//           { name: "Droid", price: 400, quantity: 7 },
//           { name: "Grip", price: 1200, quantity: 9 },
//         ];
//         const nameUser = [];
//         for (const product of products) {
//             nameUser.push(product.name);
//        }
// console.log(nameUser);
// ///////////////////////////////////////////////////////////////////////
// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
//   ];
//  let totalRating = 0;

// for (const book of books) {
//     totalRating += book.rating;
// }

// console.log(totalRating);
// const averageRating = totalRating / books.length;
// console.log(averageRating);
/////////////////////////////////////////////////////////////////////////////

// function getAllPropValues(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     const arrayValues = [];
//     for ( const product of products) {
//         //console.log(product.propName);
//        if(propName in product) {
//         arrayValues.push(product[propName]);
//      }
//     }
//     return arrayValues;
//   }
//   console.log(getAllPropValues("name"));
//   getAllPropValues("quantity");
//   getAllPropValues("price");
///////////////////////////////////////////////////////////////////////////
// Напиши функцію getPricesAboveThreshold(products, threshold), 
// яка повертає масив цін, більших за вказане значення.

// const products = [
//     { name: "Laptop", price: 1500 },
//     { name: "Phone", price: 600 },
//     { name: "Tablet", price: 800 },
//   ];
//   function getPricesAboveThreshold(products, threshold) {
//     const array = [];
//     for (const product of products ) {
//         //console.log(product);
//         if (product.price > threshold) {
//             array.push(product.price);

//         }

//     }
//     return array;
  
//     }
//    console.log(getPricesAboveThreshold(products, 700)); // [1500, 800]  
///////////////////////////////////////////////////////////////////////////////////
// Напиши універсальну функцію getAllPropertyValues(array, prop),
//  яка повертає всі значення заданої властивості з масиву об’єктів.

// const books = [
//     { title: "Book A", author: "Author A", pages: 100 },
//     { title: "Book B", author: "Author B", pages: 200 },
//     { title: "Book C", author: "Author C", pages: 150 },
//   ];
// function getAllPropertyValues(array, prop) {
//     const keysValuesArrey = [];
//     for (const arra of array) {
//         keysValuesArrey.push(arra[prop]);
// }
//   return keysValuesArrey;

// }
//   console.log(getAllPropertyValues(books, "title")); // ["Book A", "Book B", "Book C"]
// console.log(getAllPropertyValues(books, "pages")); // [100, 200, 150
///////////////////////////////////////////////////////////////////////////////////////////////
// Функція findProductNamesByQuantity(products, minQuantity) повертає назви товарів,
//  у яких кількість більше або дорівнює minQuantity.

//  const inventory = [
//     { name: "Pen", quantity: 10 },
//     { name: "Notebook", quantity: 3 },
//     { name: "Pencil", quantity: 15 },
//   ];
//   function findProductNamesByQuantity(products, minQuantity) {
//     const array = [];
//     for (const item of products) {
//         if (item.quantity >= minQuantity) {
//             array.push(item.name);
//         }
//     }
//     return array;
//   }
//   console.log(findProductNamesByQuantity(inventory, 5)); // ["Pen", "Pencil"]
 ///////////////////////////////////////////////////////////////////////////////////////////////////
//  Напиши функцію getAllAuthors(), яка повертає масив авторів з масиву книг.
 
//  const books = [
//     { title: "Book A", author: "Author A", pages: 100 },
//     { title: "Book B", author: "Author B", pages: 200 },
//     { title: "Book C", author: "Author C", pages: 150 },
//   ];
//   function getAllAuthors() {
//    const booksAutor = [];
//     for (const item of books) {
//         booksAutor.push(item.author);
//     }
//     return booksAutor;
//         } 
//   console.log(getAllAuthors(books)); // )["Author A", "Author B", "Author C"] 
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//     user : { name: "Notebook",
//          quantity: 3 
//         },
//   };
// book.rating = 9;

// console.log(book.user);
////////////////////////////////////////////////////////////////////////////////////////

// const customers = [
//     { name: "Ivan", order: { product: "Mouse", quantity: 2 } },
//     { name: "Olga", order: { product: "Keyboard", quantity: 1 } },
//     { name: "Stepan", order: { product: "Monitor", quantity: 3 } },
//   ];
  
//   function getAllProductNames(customers) {
//     // Поверни масив назв продуктів
//     const array = [];
//     for (const customer of customers) {
//         array.push(customer.order.product);
//     }
//     return array;
//   }
//   console.log(getAllProductNames(customers)); // ["Mouse", "Keyboard", "Monitor"]
///////////////////////////////////////////////////////////////////////////////////////////
// const clients = [
//     { name: "Lena", order: { product: "Tablet", quantity: 1 } },
//     { name: "Dima" },
//     { name: "Nina", order: { product: "Phone", quantity: 2 } },
//   ];
  
//   function getClientsWithOrders(clients, nombre) {
//     // Поверни масив імен клієнтів, які мають замовлення
//     const array = [];
//          for (const client of clients) {
//             if (client.name ===nombre && client.order !== undefined)
//                array.push(client.name);
//          }
//         return array;
//        }
  
  
//   console.log(getClientsWithOrders(clients, "Lena")); // ["Lena", "Nina"]
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Carol", age: 22 },
//   ];
//   function getAllNames(users) {
//     const arrayNames = [];
//     for (const user of users) { 
//         arrayNames.push(user.name);


//     }
//     return arrayNames;
//   }
//   console.log(getAllNames(users)); // ["Alice", "Bob", "Carol"]
////////////////////////////////////////////////////////////////////////////////////
// function foo(key, value) {
// return {
//     [key]: value
// }
// }
// console.log(foo("name", "Alice")); // {name: 'Alice'}
///////////////////////////////////////////////////////////////////////

// const users = { 
//     name: "Alice", 
//     age: 25,
//     hobby: "JS",
//     premium: true 
// }
// users.mood = "happy";

// users.mood = "lalalal";

// const keys = Object.keys(users);
// //console.log(keys);
// const value = Object.values(users);
// //console.log(value);
// for (const key of keys) {
//     console.log(`${key}: ${users[key]}`);
// }
/////////////////////////////////////////////////////////////////////////////////



// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }
  
// console.log(hexColors);
// console.log(rgbColors);
/////////////////////////////////////////////////////////////////////////////////////
// function getAllPropValues(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     const arrayValues = [];
//     for ( const product of products) {
//         //arrayValues.push(product[propName])
//       if(product[propName] !== undefined) {
//         arrayValues.push(product[propName]);
//       }
    
//     }
//     return arrayValues;
//   }
//   console.log(getAllPropValues("name"));
//   getAllPropValues("quantity");
//   getAllPropValues("price");
//   console.log(getAllPropValues("category"));
//////////////////////////////////////////////////////////////////function calculateTotalPrice(productName) {
  
// function calculateTotalPrice(productName) {
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//    for (const product of products) {
    
//     if (product.name === productName) {
//         return product.price * product.quantity;
//     }
//    }
//    return "popoo";
// }
  
//   console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

/////////////////////////////////////////////////////////////////////////////////////
// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Це метод об'єкта
//     getBooks() {
//       return "Returning all books";
//     },
//     // Це метод об'єкта
//     addBook(bookName) {
//           return `Adding book ${bookName}`;
//     },
//   };
  
//   // Виклики методів
//   bookShelf.getBooks(); // поверне "Returning all books"
//   console.log(bookShelf.addBook("New book 1")); // поверне "Adding book New book 1"
//   bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"
//   ///////////////////////////////////////////////////////////////////////////////////////////////////////
//   const atTheOldToad = {
//     potions: [],
//     getPotions() {
//       return "List of all available potions";
//     },
//     addPotion(potionName) {
//       return `Adding ${potionName}`;
//     },
//   }
//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion("Невидімий"));
//   console.log(atTheOldToad.addPotion("Сіла"));

// const bookShelf = {
//     books: ["The Last Kingdom", "The Mist"],
//     getBooks() {
//       console.log(this);
//     },
//   };
  
//   bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}
  //////////////////////////////////////////////////////////////////////////
//   const atTheOldToad = {
//      potions: [],
//      getPotions() {
//        return "List of all available potions";
//      },
//      addPotion(potionName) {
//        return `Adding ${potionName}`;
//      },
//    };
//    console.log(atTheOldToad.addPotion("Invisibility"));
//    console.log(atTheOldToad.addPotion("Power potion"));
///////////////////////////////////////////////////////////////
// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//       return this.potions;
//     },
//   };
//   console.log(atTheOldToad.getPotions());
//////////////////////////////////////////////////////////////
// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getShelf() {
//         return this.books;
    
//     },
//     addShelf(nameShelf) {
//         this.books.push(nameShelf);
//     },
// };


// bookShelf.addShelf("Harry Potter");
// bookShelf.addShelf("1984");
// console.log(bookShelf.getShelf());
// /////////////////////////////////////////////////////////////////////////
// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//          this.potions.push(potionName);
//     }
// };
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.getPotions());
///////////////////////////////////////////////////////////////////


// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//       let total = 0;
//       for (const potion of this.potions) {
//         total += potion.price;
        
//       }
//       return total;
      
//     },
//   };
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
//   atTheOldToad.addPotion({ name: "Power potion", price: 270 });
//   console.log(atTheOldToad. getTotalPrice())//////////
/////////////////////////////////////////////////////////////////////////////////
// const bookShelf = {
//     books: [
//       { title: "The Last Kingdom", rating: 8 },
//       { title: "The Mist", rating: 6 },
//     ],
//       changeRating(bookName, newRating) {
//         for (const book of this.books) {
//             if (book.title === bookName) {
//                 book.rating = newRating;

//             }

//         }
//       }
//   };
//   bookShelf.changeRating("The Mist", 9);
//   bookShelf.changeRating("The Last Kingdom", 4);
// console.log( bookShelf.books);
//////////////////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName

//             }

//         }


//     }
// }
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.getPotions());
/////////////////////////////////////////////////////////////////////////////////////////////////////

// function add(...args) {
//     console.log(args);
//     // let sum = 0;
//     // for (const ar of args) {
//     //     //console.log(ar);
//     //   sum += ar;
      
//     // }
//     // return sum;
//   }
//   //add(15, 27);
//   //add(12, 4, 11, 48);
//   console.log(add(32, 6, 13, 19, 8));
//////////////////////////////////////////////////////
// function multiply(first, second, ...args) {
//     console.log(first, second, args);
//   }
  
//   multiply(1, 2); // 1 2
//   multiply(1, 2, 3); // 1 2 [3] 
//   multiply(1, 2, 3, 4); // 1 2 [3, 4]
///////////////////////////////////////////////////////
// function addOverNum(value, ...args) {
//     let sum = 0;
//     for (const ar of args) {
//       if (ar > value) {
//         sum += ar;
//       }
      
//     }
//     return sum;
//   }
//   addOverNum(50, 15, 27);
//   console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
//////////////////////////////////////////////////////////////////////////////////
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// console.log(allScores);

// const bestScore = Math.max(...allScores);
// const worstScore =  Math.min(...allScores);
// console.log(bestScore);
// console.log(worstScore);
///////////////////////////////////////////////////////////////////////////////
// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
  
//   const finalSettings = {...defaultSettings, ...overrideSettings};
//   console.log(finalSettings);
 /////////////////////////////////////////////////////////////////////////////////////////////// 
// function isEnoughCapacity(products, containerSize) {
//       let totalProducts = 0;
// //       const values = Object.values(products);
// //       //console.log(values);

// //     for (const value of values) {
// //             totalProducts += value;
            

               
// //     }
// //     return totalProducts <= containerSize;
// // }
// //  console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// // console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// //  console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
// //  console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
// // //////////////////////////////////////////////////////////////////////////////////
//  function calcAverageCalories(days) {
//     //const values = Object.values(days);
//     if (days.length === 0) {
//         return 0;

//     }
//     let totalClories = 0;
//     for (const day of days) {
//         totalClories += day.calories;

//     }
//     return totalClories / days.length;

//  }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0
////////////////////////////////////////////////////////////////////////////////////
// const profile = {
//     username: "Jacob",
//   playTime: 300,
  
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
//   changeUsername(newName) {
//     this.username = newName;

//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   }

// };


// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
///////////////////////////////////////////////////////////////////////////////////////////////////////////























// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//       for(const potion of this.potions)
//         if(potion.name === oldName) {
//            potion.name = newName;
//         }
//       return this.potions;
//     },
//   };
//   atTheOldToad.updatePotionName("Stone skin", "Invisibility");



















