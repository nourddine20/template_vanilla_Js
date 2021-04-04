let box_cart = document.querySelector(".box_cart");

draw_cart_products();

function draw_cart_products(items_cart = []){
    check_cart_empty();
    let  products_cart =JSON.parse(localStorage.getItem("list cart products")) || items_cart;
    let products_cart_ui = products_cart.map((item)=>{
        return `  
         <div class="product_item">
                  
        <div class="product_image">
            <img src="${item.image}" >
        </div>
       
        <div class="item_info">
            <div class="title_product">
                <h3><a href="cart_destails.html">${item.title}</a></h3>
                <span class="Review">
                <i class="fas fa-star fa-x"
                style="color: orange;"></i>
                <i class="fas fa-star fa-x"
                style="color: orange;"></i>
                <i class="fas fa-star fa-x"
                style="color: orange;"></i>
                <i class="fas fa-star fa-x"
                style="color: orange;"></i>
                <i class="fas fa-star fa-x"></i>
                </span>
                <span>Sales</span>
            </div>
                
                <i class="fas fa-heart fa-lg  favorite"></i>
            <p>
               ${item.description}
            </p>
            <div class="boxing_product">
                <span><i class="fas fa-weight-hanging fa-lg"></i> Size :${item.size}</span>
                <span><i class="fas fa-truck fa-lg" ></i> Time delevery : ${item.time_delevry}</span>
            </div>
            <br>
            
            <div class="icons_method_home">
            <i class="addtocarte  fas fa-trash-alt fa-2x" onclick="remove_from_cart(${item.id})"></i>
            </div>
            
           
          
        </div>
        
    </div>
 `
    
 
    })
    
    if(box_cart){
        box_cart.innerHTML=products_cart_ui;
    }
    
}

function remove_from_cart(id){
    check_cart_empty();
   let set_product_cart = JSON.parse(localStorage.getItem("list cart products"));
   if(set_product_cart){

    let itemfromstrorage = set_product_cart.filter((item)=>item.id!==id);

    console.log(itemfromstrorage);
   localStorage.setItem("list cart products",JSON.stringify(itemfromstrorage));
 
   draw_cart_products(itemfromstrorage);

   }

   
   
}


/////////// check is the page is empty  ////////////

function check_cart_empty(){
    let set_product_cart = JSON.parse(localStorage.getItem("list cart products"));
    let box_cart = document.querySelector(".box_cart");
    let emtpty_cart = document.querySelector(".cart_vide");
    if(set_product_cart.length > 0){
        emtpty_cart.style.display="none";
        box_cart.style.display="flex";
    }
    else{
        emtpty_cart.style.display="block";
        box_cart.style.display="none";
    }
}