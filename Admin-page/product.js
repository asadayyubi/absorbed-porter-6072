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
    let name=element.fullname.split(" ")
    Admin_name.innerText = `Hii ${name[0]}`
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


let pro_id=document.getElementById("ele-id")
let change_model=document.getElementById("change-model")
let change_year=document.getElementById("change-year")
let change_price=document.getElementById("Change-price")
let change_condition=document.getElementById("Change-condition")



let Edit_div=document.getElementById("Add-new-div")
let Save_edit_btn=document.getElementById("Add-save-btn");

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

        edit_btn.addEventListener("click",()=>{
            Edit_div.style.display="block";
            pro_id.value=element.id;
            change_model.value=element.model;
            change_year.value=element.year;
            change_price.value=element.price;
            change_condition.value=element.condition;

            

            Save_edit_btn.addEventListener("click",()=>{
                let update_data={
                    "model":change_model.value,
                    "year":change_year.value,
                    "price":change_price.value,
                    "condition":change_condition.value
                }
                console.log(update_data)
                fetch(`https://mok-api-hola-ex.onrender.com/data/${element.id}`,{
                    method:"PATCH",
                    body:JSON.stringify(update_data),
                    headers: {
                        "Content-type":`application/json`
                    }
                })
                Edit_div.style.display="none";
            })

        })

        let del_btn = document.createElement("button")
        del_btn.innerText = "Delete"
        del_btn.setAttribute("class", "btn")
        del_btn.setAttribute("id", "del-btn")
        del_btn.addEventListener("click",()=>{

            fetch(`https://mok-api-hola-ex.onrender.com/data/${element.id}`,{
             method:"DELETE"
        
            })
        })





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




let Add_category=document.getElementById("Add-Category");
let Add_Brand=document.getElementById("Add-Brand");
let Add_Model=document.getElementById("Add-Model");
let Add_color=document.getElementById("Add-color");
let Add_Condition=document.getElementById("Add-Condition");
let Add_Km=document.getElementById("Add-Km");
let Add_year=document.getElementById("Add-Year");
let Add_Fule=document.getElementById("Add-Fuel");
let Add_Img_1=document.getElementById("Add-1st-Img");
let Add_Img_2=document.getElementById("Add-2nd-Img");
let Add_Img_3=document.getElementById("Add-3rd-Img");
let Add_Price=document.getElementById("Add-Price");
let Add_Name=document.getElementById("Add-Name");
let Add_State=document.getElementById("Add-State");
let Add_City=document.getElementById("Add-city");



let Add_new_product=document.getElementById("outer-main")


let post_btn=document.getElementById("Post-Btn")
let Add_edit_Profile = document.getElementById("Add-product");

Add_edit_Profile.addEventListener("click",()=>{
    Add_new_product.style.display="block"
})
post_btn.addEventListener("click",(e)=>{
    e.preventDefault()





    let Add_product={
        "brand": Add_Brand.value,
        "category":Add_category.value,
        "color":Add_color.value,
        "condition":Add_Condition.value,
        "fuel_type":Add_Fule.value,
        "images":[Add_Img_1.value,Add_Img_2.value,Add_Img_3.value],
        "kilometers_driven":Add_Km.value,
        "model":Add_Model.value,
        "price":Add_Price.value,
        "transmission": "Manual",
        "owner": "3rd",
        "engine": "1.2L",
        "seller":{
            "email": "asadayyubi@example.com",
           "phone": "+91-9876543210",
           
            "location":{
                "city":Add_City.value,
                "state":Add_State.value,
                "country":"India"
            },
            "name":Add_Name.value
        },
        "status":"unsold",
        "strprice":`₹${Add_Price.value}`,
        "year":Add_year.value,
        "description": `${Add_Brand.value} ${Add_Model.value} in fair condition. Has been driven for ${Add_Km.value} km and has minor dents and scratches on the body. Comes with power windows, air conditioning, and a music system. Ideal for someone looking for a budget car.`,
    }
    // console.log(Add_product)
    fetch("https://mok-api-hola-ex.onrender.com/data",{
        method: "POST",
        body:JSON.stringify(Add_product),
        headers: {
            "Content-type":`application/json`
        }


    })


    Add_new_product.style.display="none"
})






