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