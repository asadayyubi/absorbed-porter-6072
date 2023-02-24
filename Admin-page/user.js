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


let edit_form=document.getElementById("Outer-div")

let email=document.getElementById("email");
let username=document.getElementById("username")
let New_password=document.getElementById("new-password");
let re_password=document.getElementById("re-password");

let save_Btn=document.getElementById("save-btn")

let edit_Profile=document.getElementById("edit-profile");

edit_Profile.addEventListener("click",()=>{
    edit_form.style.display="block";
    
    save_Btn.addEventListener("click",()=>{
        edit_form.style.display="none";
    })

})



let users_Div=document.getElementById("users")

fetch("https://mok-api-hola-ex.onrender.com/users")
.then((req) => {
    return req.json()
})
.then((data) => {
    console.log(data)
    renderData(data)
})


function renderData(data){
    users_Div.innerHTML="";
    data.forEach((ele)=>{
        let cardDiv=document.createElement("div")
        let name=document.createElement("h2")
        name.innerText=ele.name;
        let email=document.createElement("p")
        email.innerText=ele.email
        let number=document.createElement("p")
        number.innerText=ele.phone;

        let address=document.createElement("p")
        address.innerText=`${ele.address.street},${ele.address.city},${ele.address.state},${ele.address.country},${ele.address.zip}`

        console.log(`${ele.address.street},${ele.address.city},${ele.address.state},${ele.address.country},${ele.address.zip}`)


        cardDiv.append(name,email,number,address)
        users_Div.append(cardDiv)

    })

}