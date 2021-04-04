let product_name = document.getElementById("product_name");
let product_description = document.getElementById("product_description");
let product_sizeselect = document.getElementById("product_size");

let product_size_choose;

let create_form = document.getElementById("create_form");

product_sizeselect.addEventListener("change",get_productsizevalue);

function get_productsizevalue(e){
    
    product_size_choose = e.target.value;
    console.log(product_size_choose);
}

let product_delevery = document.getElementById("product_delevery");

let box_image = document.getElementById("box_image");
let url_image = document.getElementById("url_image");
let file;
let product_imageurl;
if(url_image){
    url_image.addEventListener("change",preview);
}

function preview(){
    
    file = this.files[0];
    if(file.size > 2*1024*1024){
        alert("type of image is more than 2 MG !");
        return;
    }
    // product_imageurl = URL.createObjectURL(file);
    // console.log(box_image.src);
    getimagebase64(file);
    file[0]="";
}

function getimagebase64(file){
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function(){

      product_imageurl=reader.result;
      console.log(product_imageurl);
      box_image.src=product_imageurl;
    };

    reader.onerror = function(){
        alert("Error !!");
    }
}



let btn_add_product = document.getElementById("btn_add_product");

let all_products = JSON.parse(localStorage.getItem("list_products")) ? JSON.parse(localStorage.getItem("list_products")) : list_products;


let product_id=all_products.length ? all_products.length : 1;
console.log(product_id);
let new_product ={};

if(create_form){
    create_form.addEventListener("submit",create_product);
}



function create_product(e) {

    e.preventDefault();

  

    if(product_name.value.trim()!="" && product_description.value.trim()!="" && product_delevery.value.trim()!="" && product_sizeselect.value!="" ){
        product_id = product_id+1;
        new_product = 
        {
            id:product_id,
            title:product_name.value,
            size:product_size_choose,
            image:product_imageurl,
            description:product_description.value,
            time_delevry:product_delevery.value,
            quantity:0,
            liked:false,
            isme:'yes'
        }
       
        all_products= all_products ? [...all_products,new_product] : [new_product];
       
        localStorage.setItem("list_products",JSON.stringify(all_products));
        
        alert("item is created successfuly");
        product_name.value="";
        product_description.value="";
        product_sizeselect.value="";
        product_delevery.value="";
        box_image.src="";
    }
    else{
        alert("please fill the form !!!");
    }
  
}