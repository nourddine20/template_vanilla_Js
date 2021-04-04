let username_dom = document.querySelector("#username_info span");
let email_dom = document.querySelector("#email_info  span");
let password_dom = document.querySelector("#password_info span");

let number_mycart_dom = document.querySelector("#mycart b");

let number_myfavorite_dom = document.querySelector("#myfavorite b");

let number_myproducts_dom = document.querySelector("#myproducts b");

console.log(number_mycart_dom);

username_dom.innerHTML = username_save;
email_dom.innerHTML = email_save;
password_dom.innerHTML = password_save;

let list_products_ofcart = JSON.parse(localStorage.getItem("list cart products")) || [];


let list_products_offavorite = JSON.parse(localStorage.getItem("list favorite products")) || [];


let list_ofall_products = JSON.parse(localStorage.getItem("list_products")) || [];

let list_of_myproducts = list_ofall_products.filter((item)=>item.isme === "yes");

console.log(list_products_ofcart.length);

console.log(list_products_offavorite.length);

console.log(list_ofall_products.length);

number_mycart_dom.innerHTML = list_products_ofcart.length;
number_myfavorite_dom.innerHTML = list_products_offavorite.length;
number_myproducts_dom.innerHTML = list_of_myproducts.length;