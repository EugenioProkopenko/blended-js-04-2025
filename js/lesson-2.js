//Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

//  const numbers = [1, 2, 3, 4, 5];
//  const squares = numbers.map((num) => num * num);
//  console.log(squares);
 /////////////////////////////////////////////////////////////
 //Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];
  
// const array = data.flatMap((ar) => ar.values);
// console.log(array);
////////////////////////////////////////////////////////////////////////
// //Завдання 5:

// // Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const evenNumber = numbers.find(num => num % 2 !== 0);
// console.log(evenNumber);
/////////////////////////////////////////////////////////////////////////////////////////
//Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];


// const array = numbersArray.toSorted((a, b) => a - b);
// console.log(array);  // [1, 2, 3, 4, 5]    
//////////////////////////////////////////////////////////////////////////
//Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].
// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const array = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(array);
//////////////////////////////////////////////////////////////////////////////////////
//Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },

// ];
// const array = users.map((ar) => ar.age).toSorted((a, b) => a - b);

// console.log(array);
//////////////////////////////////////////////////////////////////////////////////
//Завдання 9:

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]
// Знайди імена користувачів, яким більше 25 років.
// Поверни true, якщо всі користувачі старші за 18.
// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// //const nuwArray = user.filter((item) => item.age > 25)
//  //                    .map((user) => user.name);
//  const adultos = user.every((adultos) => adultos.age > 18);
//  console.log(adultos);

// //console.log(nuwArray);

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

//  const numbers = [1, 2, 3, 4, 5];
//  const sumOfelements = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sumOfelements);
///////////////////////////////////////////////////////////////////////////////////////

// class Car {
//     #price;
    
//     static qty = 0;
    
//     static increment() {
//         Car.qty += 1;
//     }


//     constructor(obj) {
//         this.brend = obj.brend;
//         this.model = obj.model;
//         this.#price = obj.price;
//         Car.increment();

//     }
//     getPrice() {
//         return this.#price;

//     }
//     setNewPrice(newPrice) {
//         if(typeof newPrice !== "number") {
//             console.log("Is not number");
//             return;

//         }
//         this.#price = newPrice;

//     }
//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//         if(typeof newPrice !== "number") {
//             console.log("Is not number");
//             return;

//         }
//         this.#price = newPrice;

//     }

// }



// const audi = new Car ({brend: "Audi", model: "q7", price: 70000});
// const bmw = new Car ({brend: "BMW", model: "X1", price: 90000});

// console.log(Car.qty);
// audi.price = "75000"
// //console.log(audi.getPrice());
// console.log(audi.price);

////////////////////////////////////////////////////////////////////////////////////

// class Hero {
//     constructor(obj = {}) {
//         this.name = obj.name;
//         this.xp = obj.xp;


//     }
//     gainXp(amoun) {
//         console.log(`${this.name} tiene ${amoun} xp`);
//         this.xp += amoun;

//     }
// }


// class Warrior extends Hero {
//     constructor(obj) {
//         super({
//             name: obj.name,
//             xp: obj.xp
//         });
//         this.weapon = obj.weapon;

//     }
//     getXp() {
//         return this.xp;
//     }
//     attack() {
//         console.log(`${this.name} echo atace ${this.weapon}`);

//     }
// }
// class Mage extends Hero {
//     constructor(obj) {
        
//         super({
//             name: obj.name,
//             xp: obj.xp
//         });
//         this.spells = obj.spells;

//     }

// }


// const archi = new Warrior({ name: "Archi", xp: 1000, weapon: "sword"});
// const changar = new Mage({ name: "Changar", xp: 900, spells: ["faired"]});
// archi.gainXp(145)
// console.log(archi);

////////////////////////////////////////////////////////////////////////////////////
// class Blogger {
//     constructor(obj) {
//          this.email = obj.email;
//          this.age = obj.ege;
//          this.numberOfPorts = obj.numberOfPorts;
//          this.topics = obj.topics;

//     }
//     getInfo(){
//         return `User ${this.email} is ${this.ege} years old and has ${this.numberOfPorts} posts.`;

        
//     }
//     upfatnumberOfPorts(velue) {
//         this.numberOfPorts += velue;

//     }

// }
// const galyna = new Blogger ({ 
//     email: "galyna@gmail.com", 
//     age: 18,
//     numberOfPorts: 30,
//     topics: ["tech", "sport"]
// });

// galyna.upfatnumberOfPorts(10)
// console.log(galyna.getInfo());
// console.log(galyna);
//////////////////////////////////////////////////////////////////////////

// class User {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;

//     }
//     get getLogin() {
//         return this.#login;
//     }
//     set setLogin(velue) {
//         this.#login = velue;

//     }

//     get getEmail() {
//         return this.#email;
//     }
//     set setEmail(velue) {
//         this.#email = velue;

//     }
    
// }
//  const mariia = new User("Mariia", "mariia@gmail.com");

// //  mariia.setLogin = "Mariia Prokopenko";
// //  console.log(mariia.getLogin);
// //  console.log(mariia);

// mariia.setEmail = "mariiaprokopenko@gmail.com";
// console.log(mariia.getEmail);

//////////////////////////////////////////////////////////////////////////////////

//Завдання 11:

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод  -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();
//   console.log(result); // 24


//   class Calculator {
//     value = 0;
   
//     number(value) {
//         this.value = value;
//         return this;
//       }
       
//     getResult() {
//         return this.value;
//     }
//     add(value) {
//         this.value += value;
//         return this;
//     }
//     subtract(value) {
//         this.value -= value;
//         return this;

//     }
//     divide(value) {
//         if(value === 0) {
//             throw new Error("Division by zero is not allowed");

//         }
//         this.value /= value;
//         return this;

//     }
//     multiply(value) {
//         this.value *= value;
//         return this;

//     }


// }
// const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24
//////////////////////////////////////////////////////////////////////////////////////////

// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get getLogin() {
//         return this.#login;

//     }
//     set setLogin(value) {
//         this.#login = value;

//     }
//     get getEmail() {
//         return this.#email;

// //     }
// //     set setEmail(value) {
// //         this.#email = value;

// //     }
// // }
// // const ivan = new Client("Ivan", "ivan@gmail.com")


// // ivan.setEmail = "ivanprokopenko@gmail.com"
// // console.log(ivan.getEmail);
// ////////////////////////////////////////////////////////////////////

// class Person {
//     constructor(name, age, gender, email) {
      
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.email = email;

//     }
//     getDetails() {
//         return this;
//     }
// }

// class Employee extends Person {
//     constructor(obj) {
//         super(name, age, gender, email); 
//         this.salary = obj.salary;
//         this.department = obj.department;

//     }
// }

// const galyna = new Person("Galyna", "43", "mujer", "galyna675653652@gmail.com");


// console.log(galyna.getDetails());






