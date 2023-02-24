let adminbtn = document.getElementById("admin-info")
let dropDown = document.querySelector(".dropDown")
let count = 0;
adminbtn.addEventListener("click", () => {
    dropDown.style.display = "block"
    adminbtn.style.border = "1px solid rgba(0, 0, 0, 0.313)"
    count++;
    if (count % 2 == 0) {
        dropDown.style.display = "none"
        adminbtn.style.border = "0px solid black"
    }
})


let db_tab = document.getElementById("db-tab")

db_tab.addEventListener("click", function () {
    location.href = `admin.html`
})

let user_tab = document.getElementById("user-div");

user_tab.addEventListener("click", () => {
    location.href = `user.html`
})



let login_Data = JSON.parse(localStorage.getItem("login")) || []


let Admin_name = document.getElementById("Admin-name")

login_Data.forEach(element => {
    Admin_name.innerText = `Hii ${element.name}`
});

let logout_btn = document.getElementById("logout")

logout_btn.addEventListener("click", () => {
    localStorage.clear("login")
    location.href = `admin-login.html`
})




let pro_div = document.getElementById("pro-div");


let page_btns = document.querySelectorAll(".page-buttons")

page_btns.forEach((ele) => {
    ele.addEventListener("click", () => {
        fetch(`https://mok-api-hola-ex.onrender.com/data?_page=${ele.innerText}&_limit=6`)
            .then((req) => {
                return req.json()
            })
            .then((data) => {
                console.log(data)
                renderData(data)
            })
    })
})

fetch("https://mok-api-hola-ex.onrender.com/data?_page=1&_limit=6")
    .then((req) => {
        return req.json()
    })
    .then((data) => {
        console.log(data)
        renderData(data)
    })


function renderData(data) {
    pro_div.innerHTML = "";
    data.forEach((element) => {
        let card_div = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src", element.images[0])
        let cato = document.createElement("p")
        if(element.category==undefined){
            cato.innerText = `Year: ${element.year}`
        }
        else{
            cato.innerText = `${element.category}  Year: ${element.year}`
        }
        
        let brand = document.createElement("p")
        brand.innerText = `${element.brand}  ${element.model}`
        let price = document.createElement("h3")
        price.innerText = `₹${element.price}`
        let status = document.createElement("p")
        status.innerText = element.status

        let edit_btn = document.createElement("button")
        edit_btn.innerText = "Edit"
        edit_btn.setAttribute("class", "btn")
        edit_btn.setAttribute("id", "edit-btn");

        // edit_btn.addEventListener("click",()=>{

        // })

        let del_btn = document.createElement("button")
        del_btn.innerText = "Delete"
        del_btn.setAttribute("class", "btn")
        del_btn.setAttribute("id", "del-btn")




        card_div.append(image, cato, brand, price, status, edit_btn, del_btn)

        pro_div.append(card_div)


    })

}


let edit_form = document.getElementById("Outer-div")

let email = document.getElementById("email");
let username = document.getElementById("username")
let New_password = document.getElementById("new-password");
let re_password = document.getElementById("re-password");

let save_Btn = document.getElementById("save-btn")

let edit_Profile = document.getElementById("edit-profile");

edit_Profile.addEventListener("click", () => {
    edit_form.style.display = "block";

    save_Btn.addEventListener("click", () => {
        edit_form.style.display = "none";
    })

})





let Add_edit_form = document.getElementById("Add-new-div")

let Add_email = document.getElementById("Add-email");
let Add_username = document.getElementById("Add-username")
let Add_New_password = document.getElementById("Add-new-password");
let Add_re_password = document.getElementById("Add-re-password");

let Add_save_Btn = document.getElementById("Add-save-btn")

let Add_edit_Profile = document.getElementById("Add-product");

Add_edit_Profile.addEventListener("click", () => {
    Add_edit_form.style.display = "block";

    Add_save_Btn.addEventListener("click", () => {
        Add_edit_form.style.display = "none";
    })

})







let search_inp = document.getElementById("search-box");

let search_btn = document.getElementById("search-btn");

search_btn.addEventListener("click", () => {
    fetch("https://mok-api-hola-ex.onrender.com/data")
        .then((req) => {
            return req.json()
        })
        .then((data) => {
            console.log(data[0].category.toUpperCase())
            console.log(search_inp.value.toUpperCase())
            let filtered = data.filter((element) => {
                if(element.category==undefined){
                    element.category=""
                }
                if (element.description.toUpperCase().includes(search_inp.value.toUpperCase()) == true || element.brand.toUpperCase().includes(search_inp.value.toUpperCase()) == true || element.category.toUpperCase().includes(search_inp.value.toUpperCase()) == true) {
                    return true;
                }
                else {
                    return false
                }
            })
            console.log(filtered)
            renderData(filtered)
        })

})