
const mainDiv = document.querySelector(".product-car-container");
const searchBtnInp = document.getElementById("brand-input");
const searchBtn = document.getElementById("search-btn");


const API = `https://mok-api-hola-ex.onrender.com/data`
let carData = [];



const test = document.querySelectorAll(".budget-range")
console.log(test)

test.forEach((item) => {
  console.log(item.dataset.id);
})

window.addEventListener("load",() => {
    fetchCarData();
    setTimeout(() => {
        renderCar(carData);
    },1000)
   
})

function fetchCarData() {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      carData = filterData(data);
      console.log(carData);
      console.log("fetch");
    })
}

function filterData(data) {
  const filteredData = data.filter((item) => {
    if(item.category === "car") {
        return true;
    } else {
        return false;
    }
  })
  return filteredData
}

function renderCar(data) {
   mainDiv.innerHTML = "";
   data.forEach((item) => {
    console.log(item.seller.location.city);
     const card = document.createElement("div");
     
     const imgDiv = document.createElement("div");
     const image = document.createElement("img");
     image.setAttribute("src",`${item.images[0]}`);
     imgDiv.append(image);

     const textDiv = document.createElement("div");

     const priceTag = document.createElement("h3")
     priceTag.innerText = `₹ ${item.price}`

     const yearKmTag = document.createElement("p");
     yearKmTag.innerText = `${item.year} - ${item.kilometers_driven} km`;

     const brandTag = document.createElement("h3");
     brandTag.innerText = `${item.brand} ${item.model}`;

     const locationTag = document.createElement("p");
     locationTag.innerText = `${item.seller.location.city}, ${item.seller.location.state}`

    textDiv.append(priceTag,yearKmTag,brandTag,locationTag)
     card.append(imgDiv,textDiv)
     mainDiv.append(card)
   })
}

searchBtn.addEventListener("click",(e) => {
  e.preventDefault();
  console.log(e.target);
  const searchText = searchBtnInp.value;
  const matchedObj = carData.filter((item) => {
    let textObj = `${item.brand}${item.model}`
    if(textObj.toLocaleLowerCase().includes(searchText.toLocaleLowerCase().split(" ").join(""))) {
        return true;
    } else {
        return false;
    }
  })
  renderCar(matchedObj);

})
