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

  // Перший аргумент — тип події, другий — функція-обробник

  
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

const form = document.querySelector(".form-container");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  
  const info = {
    email: elements.email.value,
    password: elements.password.value,
    mensaje: elements.comment.value
  }
  console.log(info);

};






























