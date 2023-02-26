let country = document.getElementById("country");
let down = document.getElementById("down");
let text = document.getElementById("text");
let list = document.getElementById("list");

country.addEventListener("click", () => {
  list.classList.toggle("hidden");
  down.classList.toggle("up");
});

function myFunction(a) {
  text.innerHTML = a;
}
let eng = document.getElementById("eng");
let hindi = document.querySelector(".hindi");
let language = document.querySelector(".language");

language.addEventListener("click", () => {
  hindi.classList.toggle("display_div");
});
function lang(a) {
  eng.innerHTML = a;
}
// let img_id= document.getElementById('girl_img');
// let dropdown= document.getElementById('dropdownid');

// img_id.addEventListener('click',()=>{
//     dropdown.classList.toggle('block_div');
// })
let login = document.getElementById("login");
login.addEventListener("click", () => {});

let all_categories = document.getElementById("all_categories");
let menu = document.getElementById("menu");

all_categories.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// ----------------------------------------
//Display product
let product = document.getElementById("product");

let allData = [];

getData();

async function getData() {
  let res = await fetch("https://mok-api-hola-ex.onrender.com/data");
  const data = await res.json();
  allData = data;
  console.log(allData);

  display_data(data);
}

// -------added by asad search fuctionality
const searchbtn1 = document.getElementById("searchId");
const searchPtag = document.getElementById("search-event");

searchPtag.addEventListener("click", () => {
  let dataAfterFilter = filterData(allData);
  display_data(dataAfterFilter);
});
function filterData(data) {
  const filteredData = data.filter((item) => {
    const textdesc = item.description.split(" ").join("");
    if (textdesc.includes(searchbtn1.value)) {
      return true;
    } else {
      return false;
    }
  });
  // console.log(filteredData);
  return filteredData;
}



let car = document.getElementById("car");
car.addEventListener("click", showCar);

function showCar() {
  location.href = "category.html";
}

function display_data(data) {
  product.innerHTML = "";
  data.forEach(function (item) {
    let block = document.createElement("div");
    block.classList.add("block");
    block.style.color = "#002F34";

    // let box= document.querySelector('.box');
    // block.addEventListener('click',()=>{
    // box.classList.toggle('show_box');
    // })
    // let cross= document.querySelector('.fa-circle-xmark');
    // cross.addEventListener('click',()=>{
    //     box.classList.toggle('show_box');
    //     })

    let img = document.createElement("img");
    img.src = item.images[0];
    img.classList.add("prod_img");

    let price = document.createElement("h3");
    price.textContent = `₹ ${item.price}`;
    price.classList.add("price");

    let address = document.createElement("p");
    address.textContent = add(item.seller.location);

    let desc = document.createElement("p");
    desc.textContent = `${item.model} ${item.year}`;

    block.addEventListener("click", () => {});
    block.append(img, price, desc, address);
    product.append(block);
  });
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let login_form_btn = document.getElementById("login-btn-form");
let model_content = document.getElementById("modal-content");

login_form_btn.addEventListener("click", () => {
  model_content.style.display = "none";
});
function add(a) {
  let z = a.city + "," + a.state;
  return z;
}
