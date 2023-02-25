// let Admin = [
//     {
//         name: "Luv",
//         username: "lovkumar120169@gmail.com",
//         password: "123456789"
//     },
//     {
//         name: "Asad",
//         username: "asad@gmail.com",
//         password: "12345"

//     },
//     {
//         name: "Baibhav",
//         username: "baibhav@gmail.com",
//         password: "123456"

//     }
// ]

let Admin=[];
fetch("https://mok-api-hola-ex.onrender.com/admin")
.then((req)=>{
    return req.json();
})
.then((data)=>{
    console.log(data)
    Admin=data
})


let login_Data = JSON.parse(localStorage.getItem("login")) || []
let email = document.getElementById("email");
let password = document.getElementById("password");

let login_btn = document.querySelector(".items-btn");

login_btn.addEventListener("click", (e) => {
    e.preventDefault()
    let count = 0;
    let notGet=0;
    for(let i=0;i<Admin.length;i++){
        if (Admin[i].username == email.value && Admin[i].password == password.value) {
            count++;
            let newArr = [];
            newArr.push(Admin[i]);
            localStorage.setItem("login", JSON.stringify(newArr))

        }
        else{
            notGet++;
        }

        if (count > 0) {
            alert(`Welcome ${Admin[i].fullname}`);
            location.href = `admin.html`;
            break;
        }
        else if(notGet==Admin.length){
            alert("Wrong Credential")

        }
    }
    
        
    
})