const mainDiv = document.querySelector(".product-car-container");
const searchBtnInp = document.getElementById("brand-input");
const searchBtn = document.getElementById("search-btn");

const API = `https://mok-api-hola-ex.onrender.com/data`;
let clickedItem = JSON.parse(localStorage.getItem("currId")) || {};
let carData = [];
let datasetVar = 0;
let datasetKm = 0;
let datasetTrans = 0;

const test = document.querySelectorAll(".budget-range");
const km = document.querySelectorAll(".budget-km");
const type = document.querySelectorAll(".budget-trans");
console.log(test);

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

type.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.dataset.id);
    if (datasetTrans === +item.dataset.id) {
      renderCar(carData);
    } else {
      const data = filterDataByTrans(+item.dataset.id);
      console.log(`${data},price`);
      renderCar(data);
      datasetTrans = +item.dataset.id;
    }
  });
});

km.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.dataset.id);
    if (datasetKm === +item.dataset.id) {
      renderCar(carData);
    } else {
      const data = filterDataByKm(+item.dataset.id);
      console.log(`${data},price`);
      renderCar(data);
      datasetKm = +item.dataset.id;
    }
  });
});

test.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.dataset.id);
    if (datasetVar === +item.dataset.id) {
      renderCar(carData);
    } else {
      const data = filterDataByPrice(+item.dataset.id);
      console.log(`${data},price`);
      renderCar(data);
      datasetVar = +item.dataset.id;
    }
  });
});

window.addEventListener("load", () => {
  fetchCarData();
  setTimeout(() => {
    renderCar(carData);
  }, 2000);
});

function fetchCarData() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      carData = filterData(data);
      console.log(carData);
      console.log("fetch");
    });
}

function filterData(data) {
  const filteredData = data.filter((item) => {
    if (item.category === "car") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

function renderCar(data) {
  mainDiv.innerHTML = "";
  data.forEach((item) => {
    //console.log(item.seller,location.city);
    const card = document.createElement("div");

    const imgDiv = document.createElement("div");
    const image = document.createElement("img");
    image.setAttribute("src", `${item.images[0]}`);
    imgDiv.append(image);

    const textDiv = document.createElement("div");

    const priceTag = document.createElement("h3");
    priceTag.innerText = `${item.strprice}`;
    priceTag.style.color = "#002f34";

    const yearKmTag = document.createElement("p");
    yearKmTag.innerText = `${item.year} - ${item.kilometers_driven} km`;
    yearKmTag.style.color = "#002f34";

    const brandTag = document.createElement("h3");
    brandTag.innerText = `${item.brand} ${item.model}`;
    brandTag.style.color = "#002f34";
    const locationTag = document.createElement("p");
    locationTag.innerText = `${item.seller.location.city}, ${item.seller.location.state}`;
    locationTag.style.color = "#002f34";

    getEachObj(item, card);
    cardEvent(card);
    textDiv.append(priceTag, yearKmTag, brandTag, locationTag);
    card.append(imgDiv, textDiv);
    mainDiv.append(card);
  });
}
function cardEvent(card) {
  card.addEventListener("click", () => {
    window.location.href = "./product.html";
  });
}
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  const searchText = searchBtnInp.value;
  if (searchText === "") {
    renderCar(carData);
  } else {
    const matchedObj = carData.filter((item) => {
      let textObj = `${item.brand}${item.model}`;
      if (
        textObj
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase().split(" ").join(""))
      ) {
        return true;
      } else {
        return false;
      }
    });
    renderCar(matchedObj);
  }
});

function filterDataByPrice(range) {
  const filteredData = carData.filter((item) => {
    console.log(item);
    if (+range === 4 && +item.price >= 500000) {
      console.log(item + "matched");
      return true;
    }
    if (+range === 3 && +item.price >= 300000 && +item.price <= 500000) {
      console.log(item + "matched");
      return true;
    }
    if (+range === 2 && +item.price >= 100000 && +item.price <= 200000) {
      console.log(item + "matched");
      return true;
    }
    if (+range === 1 && +item.price <= 100000) {
      console.log(item + "matched");
      return true;
    }
  });
  return filteredData;
}

function filterDataByKm(range) {
  const filteredData = carData.filter((item) => {
    console.log(item);
    if (+range === 4 && +item.kilometers_driven >= 75000) {
      console.log(item + "matched");
      return true;
    }
    if (
      +range === 3 &&
      +item.kilometers_driven >= 50000 &&
      +item.kilometers_driven <= 75000
    ) {
      console.log(item + "matched");
      return true;
    }
    if (
      +range === 2 &&
      +item.kilometers_driven >= 25000 &&
      +item.kilometers_driven <= 50000
    ) {
      console.log(item + "matched");
      return true;
    }
    if (+range === 1 && +item.kilometers_driven <= 25000) {
      console.log(item + "matched");
      return true;
    }
  });
  return filteredData;
}

function filterDataByTrans(type) {
  const filteredData = carData.filter((item) => {
    console.log(item,item.transmission);
    if (+type === 1 && item.transmission.toLowerCase() === "automatic") {
      console.log(item + "matched");
      return true;
    }
    else if (+type === 2 && item.transmission.toLowerCase() === "manual") {
      console.log(item + "matched");
      return true;
    }
  });
  return filteredData;
}

function getEachObj(item, card) {
  card.addEventListener("click", () => {
    console.log(item.id);
    clickedItem.id = item.id;
    localStorage.setItem("currId", JSON.stringify(clickedItem));
  });
}
