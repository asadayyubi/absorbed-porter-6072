fetch("https://mok-api-hola-ex.onrender.com/users")
.then((req)=>{
    return req.json();
})
.then((data)=>{
    // funCheck(data)
    login(data)
})


let email_data=document.getElementById("email")
let password_data=document.getElementById("password")

let login_btn=document.getElementById("login-btn")


function login(data){
    console.log(data)
    login_btn.addEventListener("click",()=>{
        funCheck(data)
    })
}
let count=0;
function funCheck(data){
    data.forEach(element => {
        if(element.email==email_data.value && element.password==password_data.value){
            count++;
            alert(`Welcome ${element.name}`)
            location.href=`product.html`
            return;
        }
        
    });
    if(count==0){
        alert("Wrong credential")
    }
}