let country= document.getElementById("country");
let down=document.getElementById("down");
let text=document.getElementById("text");
let list=document.getElementById("list");

country.addEventListener("click",()=>{
    list.classList.toggle("hidden");
    down.classList.toggle("up");
})

function myFunction(a){
    text.innerHTML=a;
}
let eng= document.getElementById('eng');
let hindi= document.querySelector('.hindi');
let language=document.querySelector('.language');

language.addEventListener('click',()=>{
    hindi.classList.toggle('display_div');

});
function lang(a){
    eng.innerHTML=a;
}
// let img_id= document.getElementById('girl_img');
// let dropdown= document.getElementById('dropdownid');

// img_id.addEventListener('click',()=>{
//     dropdown.classList.toggle('block_div');
// })
let login= document.getElementById('login');
login.addEventListener('click',()=>{

})

let all_categories= document.getElementById('all_categories');
let menu = document.getElementById('menu');

all_categories.addEventListener('click',()=>{
    menu.classList.toggle('show');
})

// ----------------------------------------
//Display product
let product= document.getElementById('product');


getData();

async function getData(){
 let res= await fetch("https://mok-api-hola-ex.onrender.com/data");
 const data= await res.json();

 display_data(data);
}


let car= document.getElementById('car');
car.addEventListener('click',showCar);

function showCar(){
   location.href="land.html";
}

function display_data(data){
 product.innerHTML="";
 data.forEach(function(item){
    let block= document.createElement("div");
    block.classList.add('block');
    block.style.color='#002F34'

    let box= document.querySelector('.box');
    block.addEventListener('click',()=>{
    box.classList.toggle('show_box');
    })
    let cross= document.querySelector('.fa-circle-xmark');
    cross.addEventListener('click',()=>{
        box.classList.toggle('show_box');
        })

    let img= document.createElement("img");
    img.src= item.images[0];
    img.classList.add('prod_img');

    let price= document.createElement('h3');
    price.textContent= `₹ ${item.price}`;
    price.classList.add('price');

    let address= document.createElement("p");
    address.textContent= add(item.seller.location);

    let desc= document.createElement('p');
    desc.textContent= `${item.model} ${item.year}`;
    

    block.addEventListener('click',()=>{
        
    })
    block.append(img,price,desc,address);
    product.append(block);
 })
}

function add(a){
    let z= a.city+(",")+a.state;
    return z;
}