
 let products_all = JSON.parse(localStorage.getItem("list_products")) || list_products;

 console.log(products_all);
 
 let products_isme =products_all.filter((item)=> item.isme ==='yes');

 console.log(products_isme);

let box_myproducts = document.querySelector(".box_myproducts");


    draw_products_isme();

function draw_products_isme(items_isme = []){
    let products_all = JSON.parse(localStorage.getItem("list_products")) || list_products;

    console.log(products_all);
    
    let products_isme =products_all.filter((item)=> item.isme ==='yes');

    console.log(products_isme);

    
    if(check_myproducts_empty()){
        let  myproducts_isme = products_isme || items_isme;
    let products_isme_ui = myproducts_isme.map((item)=>{
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
            <i class='fas fa-edit fa-2x' onclick ='edit_product(${item.id})'></i>
            <i class="addtocarte  fas fa-trash-alt fa-2x" onclick="remove_from_myproducts(${item.id})"></i>
            </div>
            
           
          
        </div>
        
    </div>
 `
    
 
    })
    
    if(box_myproducts){
        box_myproducts.innerHTML=products_isme_ui;
    }

    }
    
    
}

function remove_from_myproducts(id){
   
    let products_all = JSON.parse(localStorage.getItem("list_products")) || list_products;

    let products_isme =products_all.filter((item)=> item.isme ==='yes');

    if(check_myproducts_empty()){
    
        if(products_isme){
     
            products_isme.map((item)=>
          {
              if(item.id === id)
              {
                    item.isme ="no";
                    console.log(item);
              }
              
            });

             let items_list_storage = products_all.filter((item)=>item.id!=id);
          
            let itemfromstrorage = products_isme.filter((item)=>item.isme ==="yes");
         console.log(itemfromstrorage);
            
         localStorage.setItem("list_products",JSON.stringify(items_list_storage));
      
        draw_products_isme(itemfromstrorage);
     
        }
    }
  

   
   
}


/////////// check is the page is empty  ////////////

function check_myproducts_empty(){
 
    let box_myproducts = document.querySelector(".box_myproducts");

    let products_all = JSON.parse(localStorage.getItem("list_products")) || list_products;

    let products_isme =products_all.filter((item)=> item.isme ==='yes');


    let emtpty_cart = document.querySelector(".cart_vide");
    console.log(products_isme.length);
    if(products_isme.length > 0){
       
        emtpty_cart.style.display="none";
        box_myproducts.style.display="flex";
        return true
    }
    else{
        emtpty_cart.style.display="block";
        box_myproducts.style.display="none";

        return false
    }
}