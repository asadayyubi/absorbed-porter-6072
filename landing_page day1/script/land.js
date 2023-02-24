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
let img_id= document.getElementById('girl_img');
let dropdown= document.getElementById('dropdownid');

img_id.addEventListener('click',()=>{
    dropdown.classList.toggle('block_div');
})

let all_categories= document.getElementById('all_categories');
let menu = document.getElementById('menu');

all_categories.addEventListener('click',()=>{
    menu.classList.toggle('show');
})

let login= document.querySelector('.fa-right-from-bracket');

// ----------------------------------------
//Display product
let product= document.getElementById('product');

getData();
async function getData(){
 let res= await fetch("https://mok-api-hola-ex.onrender.com/data");
 let data= await res.json();
 console.log(data);
 display_data(data);
}

function display_data(data){
 product.innerHTML="";
 data.forEach(function(item){
    let block= document.createElement("div");
    block.classList.add('block');

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
    // let heart= document.createElement('i');
    // heart.classList.add('fa-regular','fa-heart')

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