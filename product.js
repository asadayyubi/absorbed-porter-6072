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
console.log(allimage);


console.log(clickedItem);
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
    
  },2000)
});

function fetchProduct() {
  fetch(`https://mok-api-hola-ex.onrender.com/data/${+clickedItem.id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setimage(data.images);
      carBrand.innerText = `${data.brand} ${data.model} (${data.year})`;
      fuel.innerText = `${data.fuel_type}`;
      distance.innerText = `${data.kilometers_driven} KM`;
      transmission.innerText = `${data.transmission}`
      objTextDesc.innerText = `${data.description}`
      brandcar.innerText = `Brand : ${data.brand}`
      modelcar.innerText = `Model : ${data.model}`
      fuelcar.innerText = `Fuel : ${data.fuel_type}`
      conditioncar.innerText = `Condition : ${data.condition}`
      colorcar.innerText = `Colour : ${data.color}`
      regcar.innerText = `Registration Place : ${data.seller.location.city}`
    });
}

function setimage(imgArr) {
    console.log(imgArr);
    let i = 0;
    allimage.forEach((item) => {
      item.setAttribute("src",`${imgArr[i]}`);
      i++
    })
}
