// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);ç
/////////////////////////////////////////////////////////////////////////////

// const image = document.querySelector(".image");
// console.log(image.src);
// console.log(image.alt);
// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";
// image.width = "100"
/////////////////////////////////////////////////////////////////////////////////////////////////////
// const lalala = document.querySelector(".article-text");
// console.log(lalala.textContent);
// const popo = document.querySelector(".article-title");
// console.log(popo.textContent);
// const texttt = document.querySelector("p");

// lalala.classList.add("text");
// lalala.classList.remove(".article-text")
// console.log(lalala);
// console.log(texttt);
//////////////////////////////////////////////////////////////////////////////////////
// const link = document.querySelector(".link");
// console.log(link.classList);
// console.log(link.attributes);

//  const hasActiveClass = link.classList.contains("is-active");
//  console.log(`hasActiveClass - ${hasActiveClass}`);

//  link.classList.add("special");
//   console.log(link.classList);

//  link.classList.remove("is-active");
//  console.log(link.classList);

//  link.classList.toggle("is-active");
//  console.log(link.classList);

//  link.classList.replace("special", "regular");
//  console.log(link.classList);


// const image = document.querySelector(".image");

// console.log(image.attributes); // w
// image.setAttribute("alt", "Buenos dias");
// console.log(image.getAttribute("alt"));
// console.log(image);
/////////////////////////////////////////////////////////////////////////////////////////////////
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');
// //console.log(saveBtn);
// // console.log(saveBtn.dataset.action); //save
// // console.log(closeBtn.dataset.action); //close

// saveBtn.dataset.action = "lalalala";
// console.log(saveBtn.dataset.action);

//////////////////////////////////////////////////////////////////////////////////////////////////

// const heading = document.createElement("h1");

// heading.classList.add("title");

// heading.textContent = "Eso mi texsto" ;
// console.log(heading);

// const image = document.createElement("img");
// image.classList.add("text");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";

// console.log(image);
/////////////////////////////////////////////////////////////////////////////////////////////////
// const booton = document.querySelector(".editor");

// const lista = document.querySelector("#menu");


// console.log(lista.children[2]);
//  const but = document.querySelector(".editor button[data-action='close']");
 
//  but.textContent = "Serar";

// console.log(but.classList.contains("btn"));

//////////////////////////////////////////////////////////////////////////////////////////

// const title = document.createElement("h1");


// // title.classList.add("text");
// // console.log(title);
// // title.textContent = "Hello";
// // document.body.append(title);

// // const imagen = document.createElement("img");
// // imagen.src = "https://picsum.photos/id/15/320/240";
// // imagen.alt = "Rocks and waterfall";
// // imagen.width = "300";
// // document.body.append(imagen);
// // booton.append(title, imagen);
// //////////////////////////////////////////////////////////////////////////////////
// // const navElLi = document.createElement("li");
// // navElLi.classList.add("menu-item");


// // const navLinc = document.createElement("a");
// // navLinc.classList.add("link", "is-active");
// // navLinc.href = "#";
// // navLinc.textContent = "Que tal";

// // navElLi.append( navLinc);
// // lista.append(navElLi);
// // console.log(lista);
// ///////////////////////////////////////////////////////////////////////////////////
// const colors = [
//     {
//       name: "Red",
//       hex: "#FF0000",
//       rgb: "rgb(255, 0, 0)"
//     },
//     {
//       name: "Green",
//       hex: "#00FF00",
//       rgb: "rgb(0, 255, 0)"
//     },
//     {
//       name: "Blue",
//       hex: "#0000FF",
//       rgb: "rgb(0, 0, 255)"
//     },
//     {
//       name: "Gold",
//       hex: "#FFD700",
//       rgb: "rgb(255, 215, 0)"
//     },
//     {
//       name: "DeepPink",
//       hex: "#FF1493",
//       rgb: "rgb(255, 20, 147)"
//     }
//   ];
  
  
//   const arrColor = document.querySelector(".editor");
  
//    const lalala = colors.map((element) => {
//     const button = document.createElement("button");
//     button.classList.add("btn");
//     button.textContent = element.name;
//     button.style.backgroundColor = element.hex;
//     return button;
//    })
//   arrColor.prepend(...lalala);
/////////   //////////////       /////////////     /////////////   ////////////////////////////////////

// const createMarcap = (option) => {
//     return option.map((element) => {
//         const button = document.createElement("button");
//         button.classList.add("btn");
//         button.textContent = element.name;
//         button.style.backgroundColor = element.hex;
//         return button;
//     })
// }

// console.log(createMarcap(colors));
// arrColor.prepend(...createMarcap(colors));

/////////////////////////////////////////////////////


// const linkH1 = document.querySelector(".title");

// //linkH1.innerHTML = '<a href="#"Pulse linc></a>';
// // linkH1.insertAdjacentHTML("afterbegin", '<a href="#">Pulse link</a> ');


// const dataSave = document.querySelector(".title")
// dataSave.innerHTML = 'New and <span class="accent">improved</span> title';

// //dataSave.textContent

// console.log(dataSave.innerHTML);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const article = document.querySelector(".article");

// const arr =["HTML", "CSS", "JavaScript", "React", "Node"];

// const lalala = arr.map((tegnologi) => ` <a class="popo" href="#">${tegnologi}</a> `).join("");
// console.log(lalala);
// article.innerHTML = lalala;
// console.log(lalala.innerHTML);
////////////////////////////////////////////////////////////////////////////////////////


// const button = document.querySelector(".my-button");
// const ofClic = () => {
//     console.log("Завтра їдемо на море");
//   }
// button.addEventListener("click", ofClic);
// button.removeEventListener("click", ofClic)
////////////////////////////////////////////////////////////////////////

// const button = document.querySelector(".my-button");



// const handleClick = event => {
//     console.log(event);
//     console.log("curenTarget", event.currentTarget);
//   };
  
//   button.addEventListener("click", handleClick);
  
//   const btn = document.getElementById("myBtn");

//   //Перший аргумент — тип події, другий — функція-обробник//

  
//   btn.addEventListener("click", function(event) {
//     console.log("Тип:", event.type);           // "click"
//     console.log("Ціль:", event.target);        // елемент, по якому клікнули
//     console.log("Координати миші:", event.clientX, event.clientY);
//   });
  
//   btn.addEventListener("click", handler, true);

//////////////////////////////////////////////////////////////////////
// const btn = document.querySelector("#myBtn");
// const square = document.querySelector(".red-square");

// btn.addEventListener("click", handleClick);
// square.addEventListener("click", handleClick);
// let step = 0;
// function handleClick() {
//     step += 50;
//     square.style.marginTop = `${step}px`;
//     square.style.marginLeft = `${step}px`;
// };
////////////////////////////////////////////////////////////////////

// const checkbox = document.querySelector(".js-checkbox");

// // checkbox.addEventListener("change", () => {
// // console.log("lalala");
// // });
// const userName = document.querySelector(".js-user-name");
// // userName.addEventListener("input", (event) => {
// //     console.log(event.target);
// // });
// userName.addEventListener("blur", lalala);



// function lalala(event) {
//     const name = event.target.value;
//     alert(`Hello ${name}`);
    
// };
////////////////////////////////////////////////////////////////////////

// const form = document.querySelector(".form-container");
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
  
//   event.preventDefault();
//   const elements = event.target.elements;
  
//   const info = {
//     email: elements.email.value,
//     password: elements.password.value,
//     mensaje: elements.comment.value
//   }
//   console.log(info);

  
// form.reset();
// };
 ////////////////////////////////////////////////////////////////////////////////


//     document.addEventListener("keydown", lalala);
// function lalala(event) {
//   if(event.ctrlKey && event.code === "KeyC") {
//     console.log("lalal");
//     event.preventDefault();
 
//   }

// }
///////////////////////////////////////////////////////////////////

// const box1 = document.querySelector(".outer-box");
// const box2 = document.querySelector(".inner-box");

// box1.addEventListener("mouseenter", lalala);
// box2.addEventListener("mouseleave", papapa)

// function lalala() {
//   console.log("mouseenter");
//   box1.classList.add("box-ectiv");
// }
// function papapa() {
//   console.log("mouseleave");
//   box1.classList.remove("box-ectiv");
// }
// ////////////////////////////////////////////////////////////////////////////
// const box1 = document.querySelector(".outer-box");


// box1.addEventListener("mouseover", lalala);
// box1.addEventListener("mouseout", papapa)

// function lalala() {
//   console.log("mouseover");
  
// }
// function papapa() {
//   console.log("mouseout");
  
// }

/////////////////////////////////////////////////////////////////////
// const box1 = document.querySelector(".outer-box");

//  box1.addEventListener("mousemove", lalala);
// function lalala(event) {
//   console.log(event);

// }
//////////////////////////////////////////////////////////////////////////////////

// const cars = [
//   {
//     id: 1,
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2021,
//     color: "silver",
//     price: 18000,
//     isElectric: false,
//     img: "https://images.coches.com/_vn_/toyota/bz4X/f8986c75b777886a1c1da37d10e4d910.jpg?w=768&h=508&func=fit"
//   },
//   {
//     id: 2,
//     brand: "Tesla",
//     model: "Model 3",
//     year: 2022,
//     color: "white",
//     price: 35000,
//     isElectric: true,
//     img: "https://imagenes.km77.com/fotos/bbtcontent/clippingnew/KM7KPH20240205_0092/full.jpg?_gl=1*18rjyv7*_ga*NTYzMjA0NTcyLjE3NTEyODE3MzQ.*_ga_6YFP9YXPMX*czE3NTEyODE3MzMkbzEkZzAkdDE3NTEyODE3MzMkajYwJGwwJGgw"
//   },
//   {
//     id: 3,
//     brand: "Ford",
//     model: "Mustang",
//     year: 2020,
//     color: "red",
//     price: 27000,
//     isElectric: false,
//     img: "https://img.remediosdigitales.com/a07985/ford-mustang-mach-e-gt-2021-03/1366_2000.jpeg"
//   },
//   {
//     id: 4,
//     brand: "BMW",
//     model: "X5",
//     year: 2023,
//     color: "black",
//     price: 60000,
//     isElectric: false,
//     img: "https://fotos.estaticosmf.com/fotos_anuncios/00/06/09/58/23/0/g03.jpg"
//   },
//   {
//     id: 5,
//     brand: "Nissan",
//     model: "Leaf",
//     year: 2021,
//     color: "blue",
//     price: 24000,
//     isElectric: true,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2018_Nissan_Leaf_Tekna_Front.jpg/1920px-2018_Nissan_Leaf_Tekna_Front.jpg"
//   },
//   {
//     id: 5,
//     brand: "Nissan",
//     model: "sisis",
//     year: 2021,
//     color: "blue",
//     price: 24000,
//     isElectric: true,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/2018_Nissan_Leaf_Tekna_Front.jpg/1920px-2018_Nissan_Leaf_Tekna_Front.jpg"
//   }
// ];

// console.log(cars);
// const form = document.querySelector(".car-search");
// const conteiner = document.querySelector(".car-list");
// function createMarcup(arr) {
//   return arr.map((item) => `
//   <li class="car-card" data-id="${item.id}">
//   <img src="${item.img}" alt="${item.brand}" class="car-imag"/>
//   <h2 class="car-title">${item.brand}</h2>
//   <h3 class="car-model">${item.model}</h3>
//   <span class="car-price">${item.price} $</span>
//   </li>
//  `).join("");

// }
// conteiner.style.display = "flex";
// conteiner.style.flexWrap = "wrap";
// conteiner.style.gap = "25px";
// conteiner.insertAdjacentHTML("beforeend", createMarcup(cars));
// //console.log(createMarcup(cars));


// form.addEventListener("submit", handleSubmint);

// function handleSubmint(event) {
//   event.preventDefault();
  
//   const query = event.target.elements.query.value.trim();
//   const optionsValue = event.target.elements.options.value;

//   const result = cars.filter((item) => 
//     item[optionsValue].toLowerCase().includes(query.toLowerCase())
//   );

//   conteiner.innerHTML = createMarcup(result);
// }
//////////////////////////////////////////////////////////////////////////////////////
// const lista = document.querySelector("#categories");
// console.log(lista);
// const categoriItems = lista.querySelectorAll(".item")

// console.log(`Number of categories: ${categoriItems.length}`);
//  categoriItems.forEach((items) => {
//   const texto = items.querySelector("h2").textContent;
//   const  elementLista = items.querySelectorAll("ul li");
//   console.log(`Category: ${texto}`);
//   console.log(`Elements: ${elementLista.length}`);


//   elementLista.forEach(li => {
//     li.style.border = "1px solid black";
//     li.style.width = "360px";
//     li.style.padding = "5px";
//     li.style.margin = "8px 0";
//     li.style.borderRadius = "3px";
//     li.style.listStyleType = "none";
//     lista.style.listStyleType = "none";
//    });
//  });
////////////////////////////////////////////////////////////////////////////////
// const images = [
//     {
//       url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat",
//     },
//     {
//       url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//     },
//     {
//       url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running",
//     },
//     {
//       url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//       alt: "Alpine Spring Meadows",
//     },
//     {
//       url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//       alt: "Nature Landscape",
//     },
//     {
//       url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//       alt: "Lighthouse Coast Sea",
//     },
//   ];
//   const galery = document.querySelector(".gallery");

// function createMarkup(arr) {
//   return arr.map((item) => `
//   <li class="list-img">
//   <img src="${item.url}" alt="${item.alt}" class="imagenes" width = "360px"/>
//   </li>

//   `).join("");
// };
// // galery.style.display = "flex";
// // galery.style.flexWrap = "wrap";
// // galery.style.gap = "48px";
// // galery.style.rowGap = "48px";
// // galery.style.listStyleType = "none";

// galery.insertAdjacentHTML("beforeend", createMarkup(images));

// const list = document.createElement("li")
///////////////////////////////////////////////////////////////////////////
// const heading = document.createElement("h1");

// heading.classList.add("title");

// heading.textContent = "Eso mi texsto" ;
// console.log(heading);

// const image = document.createElement("img");
// image.classList.add("text");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";

// console.log(image);
///////////////HTML - 158//////////////////////////
// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");


// function inputValue(event) {
//     const value = event.target.value.trim();
//      output.textContent = value === "" ? "Anonymous" : value;
  
// }

// input.addEventListener("input", inputValue);
////////////////////////////////////HTML - 165////////////////////////////////////////
// const registerForm = document.querySelector(".login-form");


// function handleSubmint(event) {
//   event.preventDefault();
//    const form = event.target.elements;
//    const info = {
//     email: form.email.value,
//     password: form.password.value
//    }
//    if(!info.email || !info.password) {
//     alert("All form fields must be filled in");
//     return;
//    }
//    console.log(info);
//    registerForm.reset();
// }
// registerForm.addEventListener("submit", handleSubmint);
//////////////////////////////////////HTML - 1174/////////////////////////////////////////////////
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const btn = document.querySelector(".change-color");
// const color = document.querySelector(".color");
// const fon = document.querySelector("body")

// function cambioColor() {
//   const randomColor = getRandomHexColor();
//   fon.style.backgroundColor = randomColor;
 
// color.textContent = randomColor;
//   }
// btn.addEventListener("click", cambioColor);
////////////////////////////////////////////////////////////////////////////////////////
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const {name, tag, stats: {followers = 0, views: userViews = 0, likes: userLikes}} = user;

// console.log(userLikes);
///////////////////////////////////////////////////////////////////////////////////////


// const color = [200, 255, 100];
// const [red, ...otherColor] = color;
// console.log(otherColor);

////////////////////////////////////////////////////////////////////////////////////////////////
// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//   console.log(firstFruit, secondFruit, thirdFruit);
// }

// console.log(printFruits(["apple", "banana", "orange"])); // "apple banana orange"
///////////////////////////////////////////HTML - 191   Домашнє завдання №8////////////////////////////////////////////////////////////////////
const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
  
  
const lista = document.querySelector(".gallery-segundo");
lista.addEventListener("click", handleSubmint);

function createMarkup(arr) {
  return arr.map((item) => `
    <li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      width="360"
    />
  </a>
</li>
`).join("");
};

 function handleSubmint(event) {
  event.preventDefault();
  if(event.target)
 }

lista.insertAdjacentHTML("beforeend", createMarkup(images));
// function createMarkup(arr) {
//   return arr.map((item) => `
//   <li class="list-img">
//   <img src="${item.url}" alt="${item.alt}" class="imagenes" width = "360px"/>
//   </li>

//   `).join("");
// };
