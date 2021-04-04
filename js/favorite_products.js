let box_favorite_item = document.querySelector(".box_favorite_item");

let list_cart_products = JSON.parse(localStorage.getItem("list cart products"));
draw_favorite_products();


function draw_favorite_products(items_favorite = []){
    check_favorite_empty();
    let  favorite_products =JSON.parse(localStorage.getItem("list favorite products")) || items_favorite;
    let products_favorited_ui = favorite_products.map((item)=>{
        
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
                
            <i class="favorite  fas fa-times-circle fa-2x" id="remove" onclick="remove_from_favorite(${item.id})"></i>
            <p>
               ${item.description}
            </p>
            <div class="boxing_product">
                <span><i class="fas fa-weight-hanging fa-lg"></i> Size :${item.size}</span>
                <span><i class="fas fa-truck fa-lg" ></i> Time delevery : ${item.time_delevry}</span>
            </div>
            <br>
               
           
          
        </div>
        
    </div>
 `
    
 
    })
    
    if(box_favorite_item){
        box_favorite_item.innerHTML=products_favorited_ui.join("");
    }
    
}


function remove_from_favorite(ex_id){
    check_favorite_empty();
    let set_product_favorite = JSON.parse(localStorage.getItem("list favorite products"));
    let ListProductsFromFavorite = JSON.parse(localStorage.getItem("list_products"));
    
   if(set_product_favorite){

    let itemfromstrorage = set_product_favorite.filter((item)=>item.id !== ex_id);
     
    ListProductsFromFavorite.map((item)=>{
        if(item.id === ex_id){
            item.liked=false;
          
        }
    });
        
    set_product_favorite.map((item)=>{

        if(item.id === ex_id){
            item.liked=false;
        }

    });

    if(list_cart_products){
        list_cart_products.map((item)=>{
            if(item.id === ex_id){
                item.liked=false;
            }
        });
    }
    console.log(itemfromstrorage);

   localStorage.setItem("list favorite products",JSON.stringify(itemfromstrorage));
   
   localStorage.setItem("list_products",JSON.stringify(ListProductsFromFavorite));
   localStorage.setItem("list cart products",JSON.stringify(list_cart_products));
 
   draw_favorite_products(itemfromstrorage);

   }

   
   
}


/////////// check is the page is empty  ////////////

function check_favorite_empty(){
    let set_product_favorite = JSON.parse(localStorage.getItem("list favorite products"));
    let emtpty_favorite = document.querySelector(".cart_vide");
    if(set_product_favorite.length > 0){
        emtpty_favorite.style.display="none";
        box_favorite_item.style.display="flex";
    }
    else{
        emtpty_favorite.style.display="block";
        box_favorite_item.style.display="none";
    }
}