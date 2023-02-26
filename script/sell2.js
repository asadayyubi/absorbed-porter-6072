console.log("connected");
const API = `https://mok-api-hola-ex.onrender.com`
const inpCategory = document.getElementById("inp-car");
const inpBrand = document.getElementById("inp-brand");
const inpModel = document.getElementById("inp-model");
const inpColor = document.getElementById("inp-color");
const inpCondition = document.getElementById("inp-condition");
const inpKM = document.getElementById("inp-km");
const inpYear = document.getElementById("inp-year");
const inpFuel = document.getElementById("inp-fuel");
const inpimg1 = document.getElementById("inp-img1");
const inpimg2 = document.getElementById("inp-img2");
const inpimg3 = document.getElementById("inp-img3");
const inpPrice = document.getElementById("inp-price");
const inpName = document.getElementById("inp-name");
const inpCity = document.getElementById("inp-city");
const inpState = document.getElementById("inp-state");
const btnpost = document.getElementById("btn-post");
const mainsellDiv = document.getElementById("mainBox");

btnpost.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  const obj = createObj();
  postData(obj);
  mainsellDiv.innerHTML = `<h2>Your AD has been posted</h2>`
  setTimeout(() => {
    location.href = `category.html`
  },2000)
});

function createObj() {
  const obj = {
    brand: inpBrand.value,
    model: inpModel.value,
    category: inpCategory.value,
    year: inpYear.value,
    color: inpColor.value,
    price: inpPrice.value,
    condition: inpCondition.value,
    transmission: "Manual",
    fuel_type: inpFuel.value,
    owner: "3rd",
    engine: "1.2L",
    status: "unsold",
    kilometers_driven: inpKM.value,
    strprice: "",
    seller: {
      name: inpName.value,
      email: "asadayyubi@example.com",
      phone: "+91-9876543210",
      location: {
        city: inpCity.value,
        state: inpState.value,
        country: "India",
      },
    },
    description: `${inpBrand.value} ${inpModel.value} in fair condition. Has been driven for ${inpKM.value} km and has minor dents and scratches on the body. Comes with power windows, air conditioning, and a music system. Ideal for someone looking for a budget car.`,
    images: [`${inpimg1.value}`, `${inpimg2.value}`, `${inpimg3.value}`],
  };

  console.log(obj);
  return obj;
}

function postData(obj) {
    fetch(`${API}/data`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
}