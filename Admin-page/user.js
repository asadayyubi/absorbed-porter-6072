let adminbtn=document.getElementById("admin-info")
let dropDown=document.querySelector(".dropDown")
let count=0;
adminbtn.addEventListener("click",()=>{
    dropDown.style.display = "block"
    adminbtn.style.border ="1px solid rgba(0, 0, 0, 0.313)"
    count++;
    if(count%2==0){
        dropDown.style.display = "none"
        adminbtn.style.border ="0px solid black"
    }
})


let db_tab=document.getElementById("db-tab")

db_tab.addEventListener("click",function(){
    location.href=`admin.html`
})


let product_page=document.getElementById("pro-tab");

product_page.addEventListener("click",()=>{
    location.href=`product.html`
})



let login_Data=JSON.parse(localStorage.getItem("login"))||[]


let Admin_name=document.getElementById("Admin-name")

login_Data.forEach(element => {
    Admin_name.innerText = `Hii ${element.name}`
});

let logout_btn=document.getElementById("logout")

logout_btn.addEventListener("click",()=>{
    localStorage.clear("login")
    location.href=`admin-login.html`
})