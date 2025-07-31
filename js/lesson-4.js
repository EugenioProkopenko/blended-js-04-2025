// ///////////////Blended JS. Заняття 04 (7 modul)//////////////////////
// // 1 - отримай body елемент і виведи його в консоль;
// const bodyEl = document.querySelector('body');
// console.log(bodyEl);

// // 2 - отримай елемент id="title" і виведи його в консоль;

// const titleEl = document.querySelector('#title');
// console.log(titleEl);

// // 3 - отримай елемент class="list" і виведи його в консоль;
// const listElement = document.querySelector('.list');
// console.log(listElement);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const topikEle = document.querySelectorAll('[data-topik]');
// console.log(topikEle);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const primeroTtopikEl = document.querySelector('[data-topik]');
// console.log(primeroTtopikEl);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const topikManipulation = 'manipulation';
// const ultimoTopikEl = document.querySelector(
//   `[data-topik="${topikManipulation}"]`
// );
// console.log(ultimoTopikEl);
// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const titleH1 = document.querySelector('#title');
// const nextElement = titleH1.nextElementSibling;
// console.log(nextElement);
// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const titleElementH3 = document.querySelectorAll('h3');
// console.log(titleElementH3);
// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// titleElementH3.forEach(title => {
//   title.classList.add('active');
// });
// console.log(titleElementH3);

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const topikNavigation = 'navigation';
// const primerTopikEl = document.querySelector(
//   `[data-topik="${topikNavigation}"]`
// );
// console.log(primerTopikEl);
// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// primerTopikEl.style.backgroundColor = 'yellow';
// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const textoTopikNavigation = document.querySelector(
//   `[data-topik="${topikNavigation}"] p`
// );

// textoTopikNavigation.textContent = 'Я змінив тут текст!';
// console.log(textoTopikNavigation);

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// const topikElementManipulation = document.querySelector(
//   `[data-topik="${currentTopic}"]`
// );
// console.log(topikElementManipulation);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// topikElementManipulation.style.backgroundColor = 'blue';
// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const titleElComplete = document.querySelector('.completed');
// console.log(titleElComplete);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// //const liElement = titleElComplete.parentNode("li");  // краще використовувати closest("li") для більшої гнучкості.
// const liElement = titleElComplete.closest('li');

// liElement.remove();
// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: 
// // "Об'єктна модель документа (Document Object Model)"
// const titleElementH = document.querySelector("#title")
// const textElement = document.createElement('p');
// textElement.textContent = "Об'єктна модель документа (Document Object Model)";

// titleElementH.after(textElement);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис
//  // (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити 
// // браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// // const listElements = document.createElement("li");
// // const titlElementH = document.createElement("h3");
// // const textElementLi = document.createElement("p");



// // titlElementH.textContent = "Властивість innerHTML";
// // textElementLi.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// // listElements.appendChild(titlElementH);
// // listElements.appendChild(textElementLi);
// // console.log(listElements);
// // listElement.appendChild(listElements);

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
//  const marcapp = `
//   <li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li>
//  `;
//  listElement.insertAdjacentHTML("beforeend", marcapp);



 



// // 20 - очисти список
// listElement.innerHTML = "";





////////////////////////////////////////////Modul 8////////////////////////////////////////////////////////////
// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

 const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const divContainer = document.createElement("div");
divContainer.classList.add("number-container");

const frag = document.createDocumentFragment();


for(let index = 0; index < 100; index++) {
const div = document.createElement("div");
div.classList.add("number");
div.textContent = randomNumber();
parseInt(div.textContent) % 2 === 0 ? div.classList.add("even") : div.classList.add("odd");
frag.appendChild(div);
} 
divContainer.appendChild(frag);

document.body.append(divContainer);
