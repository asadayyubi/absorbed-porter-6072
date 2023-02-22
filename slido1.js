// const btn1 =document.getElementById("btn-1");
// const btn2 =document.getElementById("btn-2");
// const btn3 =document.getElementById("btn-3");
// const slider= document.querySelector(".slider");
// const allImages= document.querySelector(".images")

// btn1.addEventListener("click", function(){
//     allImages.style.transform = "translateX(-0px)";
// });

// btn2.addEventListener("click", function(){
//     allImages.style.transform = "translateX(-105px)";
// });

// btn2.addEventListener("click", function(){
//     allImages.style.transform = "translateX(-09px)";
// });

const cardWrapper = document.querySelector('.card-wrapper')
const widthToScroll = cardWrapper.children[0].offsetWidth
const arrowPrev = document.querySelector('.arrow.prev')
const arrowNext = document.querySelector('.arrow.next')
const cardBounding = cardWrapper.getBoundingClientRect()
const cardImageAndLink = cardWrapper.querySelectorAll('img, a')
let currScroll = 0
let initPos = 0
let clicked = false

cardImageAndLink.forEach(item=> {
  item.setAttribute('draggable', false)
})

arrowPrev.onclick = function() {
  cardWrapper.scrollLeft -= widthToScroll
}

arrowNext.onclick = function() {
  cardWrapper.scrollLeft += widthToScroll
}

cardWrapper.onmousedown = function(e) {
  cardWrapper.classList.add('grab')
  initPos = e.clientX - cardBounding.left
  currScroll = cardWrapper.scrollLeft
  clicked = true
}

cardWrapper.onmousemove = function(e) {
  if(clicked) {
    const xPos = e.clientX - cardBounding.left
    cardWrapper.scrollLeft = currScroll + -(xPos - initPos)
  }
}

cardWrapper.onmouseup = mouseUpAndLeave
cardWrapper.onmouseleave = mouseUpAndLeave

function mouseUpAndLeave() {
  cardWrapper.classList.remove('grab')
  clicked = false
}