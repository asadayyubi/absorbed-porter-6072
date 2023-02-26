const clickedItem = JSON.parse(localStorage.getItem("currId")) || {};
const mainDiv = document.querySelector(".image-slidshow");
const allimage = document.querySelectorAll(".slideimg");
const carBrand = document.getElementById("brand");
const fuel = document.getElementById("fuel");
const distance = document.getElementById("distance");
const transmission = document.getElementById("transm");
const objTextDesc = document.getElementById("obj-desc");
const brandcar = document.getElementById("obj-brand");
const modelcar = document.getElementById("obj-model");
const fuelcar = document.getElementById("obj-fuel");
const conditioncar = document.getElementById("obj-condition");
const colorcar = document.getElementById("obj-color");
const regcar = document.getElementById("obj-reg");
const priceStr = document.getElementById("price-text-right");
const userchat = document.getElementById("user-name-obj");
const sellBtn = document.getElementById("sell-btn");
const locationTag = document.getElementById("loc");
console.log(allimage);

// navbar -------------------------------------
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

let all_categories = document.getElementById("all_categories");
let menu = document.getElementById("menu");

all_categories.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// end of navbar ------------------

// modal part------------
// Get the modal
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
// -----------slideshow code --------------//
// function slide() {
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}
// }
//  end of slideshow code--------///

window.addEventListener("load", () => {
  fetchProduct();
  setTimeout(() => {
    // slide();
  }, 2000);
});
let currStatus = "";
function fetchProduct() {
  console.log(clickedItem);
  fetch(`https://mok-api-hola-ex.onrender.com/data/${clickedItem.id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setimage(data.images);
      carBrand.innerText = `${data.brand} ${data.model} (${data.year})`;
      fuel.innerText = `${data.fuel_type}`;
      distance.innerText = `${data.kilometers_driven} KM`;
      transmission.innerText = `${data.transmission}`;
      objTextDesc.innerText = `${data.description}`;
      brandcar.innerText = `Brand : ${data.brand}`;
      modelcar.innerText = `Model : ${data.model}`;
      fuelcar.innerText = `Fuel : ${data.fuel_type}`;
      conditioncar.innerText = `Condition : ${data.condition}`;
      colorcar.innerText = `Colour : ${data.color}`;
      regcar.innerText = `Registration Place : ${data.seller.location.city}`;
      priceStr.innerText = `${data.strprice || "₹" + data.price}`;
      userchat.innerText = `${data.seller.name}`;
      locationTag.innerText = `${data.seller.location.city} , ${data.seller.location.state}`
      currStatus = data.status;
      checkStatus(currStatus);
    });
}

function setimage(imgArr) {
  console.log(imgArr);
  let i = 0;
  allimage.forEach((item) => {
    item.setAttribute("src", `${imgArr[i]}`);
    i++;
  });
}

function checkStatus(currStatus) {
  if (currStatus === "unsold") {
    sellBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sellBtn.innerText = "Sold";
      sellBtn.style.color = "black";
      sellBtn.style.backgroundColor = "white";
      e.target.checked = true;
      console.log(e);
      patchData();
    });
  }
}

function patchData() {
  const updateStatus = {
    status: "sold",
  };
  fetch(`https://mok-api-hola-ex.onrender.com/data/${clickedItem.id}`, {
    method: "PATCH",
    body: JSON.stringify(updateStatus),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}



let login_form_btn=document.getElementById("login-btn-form")
let model_content=document.getElementById("modal-content")

login_form_btn.addEventListener("click",()=>{
  model_content.style.display="none"

})