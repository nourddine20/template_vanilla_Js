let all_list = JSON.parse(localStorage.getItem("list_products"))|| ist_products;

console.log(all_list);

 let product_name = document.getElementById("product_name");
 let product_description = document.getElementById("product_description");
 let product_sizeselect = document.getElementById("product_size");

  let product_delevery = document.getElementById("product_delevery");

  let box_image = document.getElementById("box_image");

  let url_image = document.getElementById("url_image");

let id_update = localStorage.getItem("editproduct_id");
 all_list.map((item)=>{
     console.log("hello");
     if(item.id == id_update){
           product_name.value=item.title;
           product_description.value = item.description;
            console.log(product_name.value);
            product_sizeselect.value=item.size;
            product_delevery.value=item.time_delevry;
            box_image.src=item.image;
            

         }
 });
  
let product_size_choose;

let update_form = document.getElementById("update_form");

 product_sizeselect.addEventListener("change",get_productsizevalue);

function get_productsizevalue(e){
    
   product_size_choose = e.target.value;
   console.log(product_size_choose);
}

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



let btn_update_product = document.getElementById("btn_update_product");

let all_products = JSON.parse(localStorage.getItem("list_products")) ? JSON.parse(localStorage.getItem("list_products")) : list_products;


// let new_product ={};

 if(update_form){
     update_form.addEventListener("submit",update_product);
 }



 function update_product(e) {

     e.preventDefault();

  

   if(product_name.value.trim()!="" && product_description.value.trim()!="" && product_delevery.value.trim()!="" && product_sizeselect.value!="" ){

        new_product = 
        {
            id:id_update,
            title:product_name.value,
            size:product_size_choose || product_sizeselect.value,
            image:product_imageurl || box_image.src,
            description:product_description.value,
            time_delevry:product_delevery.value,
            quantity:0,
            liked:false,
            isme:'yes'
        }
        // all_products.map((item)=>{
        //     if(item.id === id_update){
        //         item = new_product;
        //     }
        // })

        for(x=0;x<all_products.length;x++){
            if(all_products[x].id == id_update){
                console.log(all_products[x]);
                all_products[x] = new_product;
                console.log(all_products[x]);
            }
        }
       
        localStorage.setItem("list_products",JSON.stringify(all_products));
        
        alert("item is apdated successfuly");
       
    }
    else{
        alert("please fill the form !!!");
    }
  
}