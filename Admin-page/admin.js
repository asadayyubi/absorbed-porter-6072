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


let User_tab = document.getElementById("user-tab")

User_tab.addEventListener("click", function () {
    location.href = `user.html`
})

let product_div = document.getElementById("product-div")

product_div.addEventListener("click", () => {
    location.href = `product.html`
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

let MainData=[]
fetch("https://mok-api-hola-ex.onrender.com/data")
    .then((req) => {
        return req.json()
    })
    .then((data) => {
        MainData=data;
        console.log(data)
        funInner(data)
        statusData(data)
    })

function funInner(total) {
    let f_div = document.querySelector("#f-div>h1")
    let s_div = document.querySelector("#s-div>h1")
    let t_div = document.querySelector("#t-div>h1")
    let ft_div = document.querySelector("#ft-div>h1");
     
    let count=0;
    let scount=0;
    let tEarn=0;
    total.forEach((ele)=>{
        if(ele.status=="unsold"){
            count++;
        }
        else if(ele.status=="sold"){
            scount++;
            tEarn+=+ele.price;
        }
    })

    f_div.innerText = total.length;
    s_div.innerText=count;
    t_div.innerText=scount;
    ft_div.innerText=`₹${tEarn}`
    
    

}


let infoTable_tbody=document.querySelector("#pro-status>table>tbody");



function statusData(data){
    infoTable_tbody.innerHTML=""
    data.forEach((ele)=>{
        let tr=document.createElement("tr")
        let tdsn=document.createElement("td")
        let tdcato=document.createElement("td")
        let tdbrand=document.createElement("td")
        let tdpri=document.createElement("td")
        let stadiv=document.createElement("div")
        if(ele.status=="unsold"){
            stadiv.setAttribute("class","status-div-c")
        }
        else{
            stadiv.setAttribute("class","status-div-s")
        }
        let tdstatus=document.createElement("td")
        let tdyear=document.createElement("td")

        if(ele.strprice==undefined){
            ele.strprice=ele.price
        }
        if(ele.year==undefined){
            ele.year="2014"
        }
        tdsn.innerText=ele.seller.name;
        tdcato.innerText=ele.category;
        tdbrand.innerText=ele.brand;
        tdpri.innerText=ele.strprice;
        tdstatus.innerText=ele.status;
        tdyear.innerText=ele.year;

        stadiv.append(tdstatus)
        tr.append(tdsn,tdcato,tdbrand,tdpri,stadiv,tdyear)
        infoTable_tbody.append(tr)
    })

}



let status_div=document.querySelectorAll(".status-div-c");

status_div.forEach((ele)=>{
    console.log(ele.innerText)
    if(ele.innerText=="sold"){
        ele.style.background="green"
    }
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
                if (element.status.toUpperCase()==(search_inp.value.toUpperCase()) == true || element.brand.toUpperCase().includes(search_inp.value.toUpperCase()) == true || element.category.toUpperCase().includes(search_inp.value.toUpperCase()) == true || element.seller.name.toUpperCase().includes(search_inp.value.toUpperCase()) == true) {
                    return true;
                }
                else {
                    return false
                }
            })
            console.log(filtered)

            statusData(filtered)
        })

})


let emailData=document.getElementById("email")
let usernameData=document.getElementById("username")
let fullnameData=document.getElementById("fullname")
let passwordData=document.getElementById("new-password")
let mobileData=document.getElementById("mobile");


let save_BtnData=document.getElementById("save-btn");

save_BtnData.addEventListener("click",()=>{
    let AdminData={
        "username":usernameData.value,
        "fullname":fullnameData.value,
        "email":emailData.value,
        "password":passwordData.value,
        "phone":mobileData.value,
    }

    fetch("https://mok-api-hola-ex.onrender.com/admin",{
        method: "POST",
        body:JSON.stringify(AdminData),
        headers: {
            "Content-type":`application/json`
        }


    })
    // .then((req)=>{
    //     return req.json()
    // })
    // .then((data)=>{
    //     console.log(data)
    // })

    

})



let select_status=document.getElementById("select-status");


   
    select_status.addEventListener("change",()=>{
        if(select_status.value==""){
            statusData(MainData)
        }
        else if(select_status.value=="sold"){
            let filtered=MainData.filter((ele)=>{
                if(ele.status=="sold"){
                    return true
                }
            })

            statusData(filtered)
        }
        else{
            let filtered=MainData.filter((ele)=>{
                if(ele.status=="unsold"){
                    return true
                }
            })

            statusData(filtered)

        }
        
    
    })

