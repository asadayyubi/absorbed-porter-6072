let email_data=document.getElementById("email-data")
let fullname_data=document.getElementById("fullnameData")
let mobile_data=document.getElementById("Mobile-Data")
let password_data=document.getElementById("Password-data")
let submit_data=document.getElementById("submit-Btn");

submit_data.addEventListener("click",(e)=>{
    e.preventDefault()
    let userData={
        "name": fullname_data.value,
        "email": email_data.value,
        "phone": mobile_data.value,
        "password": password_data.value,
    }


    fetch("https://mok-api-hola-ex.onrender.com/users",{
        method: "POST",
        body:JSON.stringify(userData),
        headers: {
            "Content-type":`application/json`
        }
        
    })
    alert(`User Register`)
    
    location.href=`../login2.html`
    console.log(userData)
})