let add_carte_btn = document.getElementById("add_carte");
let product_dom= document.querySelector(".box_products");
let mycart= document.querySelector(".mycart");
let dropdown_mycart = document.querySelector(".dropdown_mycart");
let cirlce_number_product_mycart= document.querySelector("#mycart_icon span");

let box_mycart_products =JSON.parse(localStorage.getItem("list cart products"))?JSON.parse(localStorage.getItem("list cart products")):[];

let dropdown_mycart_list = document.querySelector(".dropdown_mycart_list");
let viewall = document.querySelector("#view_all_btn");

let list_favorite_item =JSON.parse(localStorage.getItem("list favorite products"))?JSON.parse(localStorage.getItem("list favorite products")):[];

// string to object  JASON.Parse();
// object to string  JASON.stringfy();
let number_qt;
////////////////////////////  local data we make it aleardy without any touching of user //////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////

add_cart_number_localstorage();
/////////////////// view or show all products in shopping cart to the next page of my cart 

function view_all_mycart(){
    window.setTimeout(() => {
        window.location = "carte_product.html";
},100);
}


if(viewall){
    viewall.addEventListener("click",view_all_mycart);
}
/////////////////////////////////////////////////////////////////////////////////////////////////

let list_allproducts = JSON.parse(localStorage.getItem("list_products")) || list_products;

////////////// add items products cart  from localstorage to menu cart ////////////////////////////////
/////////////fill products cart with cart products of localstorage that already exist //////////////////

function add_cart_number_localstorage(){
    // list_products.map((item)=>{
    //     dropdown_mycart_list.innerHTML+=`<li class="${item.title}">${item.title}<span>${item.quantity}</span></li>`;
    //     });
//console.log(dropdown_mycart_list);

    box_mycart_products.map((item)=>{
        dropdown_mycart_list.innerHTML+= 
        `<li>${item.title}<span>${item.quantity}</span></li>`;
      
    });

    // list_allproducts.map((item)=>{
    //     if(item.liked){
            
    //     }
    // });
  
  //  console.log("no products add number qt"+number_qt);
     //   console.log("no products add chooseitem");
      //  list_products.map(item)=>{
      //   //   console.log(item.quantity);
    //    });
    cirlce_number_product_mycart.innerHTML = box_mycart_products.length;
   // console.log(box_mycart_products.length);
}  
                   
///////////////////////////////////////////////////////////////////////////////////////////////////



////////////////   add item product by clicking icon cart on localstorage of cart and cart menu using id ///////////////
 
function add_carte_func(id){
  
   
    if(username_save){

           
            let chooseitem = list_allproducts.find((item)=> item.id===id) ;

            alert("your item added to carte");
      
                   if(box_mycart_products.some((item)=> item.id===id)){
                     
                   
                    chooseitem.quantity+=1;
                     console.log(chooseitem);
                
                  
                   }
                   else{
                    chooseitem.quantity=1;
                    box_mycart_products=[...box_mycart_products,chooseitem];
                    cirlce_number_product_mycart.innerHTML = box_mycart_products.length;
                    
                   }

                   box_mycart_products.map((item)=>{

                        if(item.id === chooseitem.id){
                            item.quantity = chooseitem.quantity;
                        }

                   });
                   
                   list_allproducts.map((item)=>{
                    if(item.id===chooseitem.id){
                         item.quantity=chooseitem.quantity;
                    }
                 });

                 list_favorite_item.map((item)=>{
                     if(item.id===chooseitem.id){
                         item.quantity=chooseitem.quantity;
                    }
                 });

                   localStorage.setItem("list cart products",JSON.stringify(box_mycart_products));
                   
                   localStorage.setItem("list_products",JSON.stringify(list_allproducts));

                   localStorage.setItem("list favorite products",JSON.stringify(list_favorite_item));

                
                   dropdown_mycart_list.innerHTML="";
                   box_mycart_products.map((item)=>{
                    dropdown_mycart_list.innerHTML+= 
                    `<li>${item.title}<span>${item.quantity}</span></li>`;
                    draw_products(list_allproducts);
                   
                });
            
    }
    else{
        alert("your are not sign in yet !");
        window.setTimeout(() => {
            window.location = "login.html";
        },50);
    }
}


mycart.addEventListener("click",open_dropdown_list);

function open_dropdown_list(){
   
    
    if(dropdown_mycart.style.display==="block"){
        dropdown_mycart.style.display="none";
    }
    else{
        dropdown_mycart.style.display="block";
    }
   

}


////////////////////////////////////////////////////////////////////////////////////////////////

//////////////   add item product  to favorite ///////


function add_to_favorite(id){

    if(username_save){
        let list_allproducts =JSON.parse(localStorage.getItem("list_products")) || list_products;
        let chooseitem = list_allproducts.find((item)=> item.id===id);

        if(!list_favorite_item.some((item)=> item.id===id)){
          
            chooseitem.liked=true;

            list_allproducts.map((item)=>{
                if(item.id===chooseitem.id){
                    item.liked=chooseitem.liked;
                }
              
            });

            box_mycart_products.map((item)=>{
                if(item.id===chooseitem.id)
                {
                    item.liked=chooseitem.liked;
                }
            });
                

            list_favorite_item=[...list_favorite_item,chooseitem];
            localStorage.setItem("list favorite products",JSON.stringify(list_favorite_item));
            localStorage.setItem("list_products",JSON.stringify(list_allproducts));
        
            draw_products(list_allproducts);
        }
       
    
    }
}

//////////////////////////  add all items products  from data products that aleardy exits to home page 

let all_productshave = JSON.parse(localStorage.getItem("list_products"));

draw_products(all_productshave || list_products);

function draw_products(list){

    console.log(list);
    let products_ui = list.map((item) => {
      
        return `  
             <div class="product_item" style="border:${item.isme === 'yes' ? '2px solid #FFCF84' : ''}">
                      
            <div class="product_image">
                <img src="${item.image}" >
            </div>
           
            <div class="item_info">
                <div class="title_product">
                    <h3><a onclick="product_details(${item.id})">${item.title}</a></h3>
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
             
                    <i class="favorite fas fa-heart fa-2x" style="color:${item.liked === true ? "red" : ""}" onclick="add_to_favorite(${item.id})"></i>
                <p>
                   ${item.description}
                </p>
                <div class="boxing_product">
                    <span><i class="fas fa-weight-hanging fa-lg"></i> Size :${item.size}</span>
                    <span><i class="fas fa-truck fa-lg" ></i> Time delevery : ${item.time_delevry}</span>
                </div>
     
                <div class="icons_method_home">
                   ${
                       item.isme === 'yes' ?
                       "<i class='fas fa-edit fa-2x' onclick ='edit_product("+item.id+")'></i>" :""} 
                <i class="addtocarte  fas fa-cart-plus fa-2x" onclick="add_carte_func(${item.id})"></i>
                </div>
               
            </div>
            
        </div>
     `;


    });

    if (product_dom) {
        product_dom.innerHTML = products_ui.join("");
    }

    
}


////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////// 

function product_details(id){

    localStorage.setItem("productID_details",id );
            window.location = "cart_destails.html";
 

}

////////  search products function by  ////////////////
let search_input = document.querySelector(".search input");

if(search_input){
    search_input.addEventListener('keyup',function(e){

        //  if(e.keyCode === 13){
            let products_to = JSON.parse(localStorage.getItem("list_products")) || list_products;
            console.log(products_to);
               search_byname(e.target.value ,products_to);
              
              //console.log("enter");
         // }
      
          if(e.target.value.trim()===""){
              draw_products(products_to);
          }
      })
      
}


function search_byname(text,myarray){

    let text_pur = text.trim().toLowerCase();
    
    let item_look = myarray.filter((item)=> item.title.trim().toLowerCase().indexOf(text_pur) != -1);
   
            draw_products(item_look);
        
          
        
       
   
}



//*******  filter by size and time delevery ******** */

let filter_select_size = document.getElementById("filter_size");
let filter_select_delevery = document.getElementById("filter_delevery");

let filter_choose_delevery;

if(filter_select_size){
    filter_select_size.addEventListener("change",get_filter_sizevalue);
}

if(filter_select_delevery){
    
filter_select_delevery.addEventListener("change",get_filter_deleveryvalue);
}

function get_filter_sizevalue(e){

    filter_select_size = e.target.value;
    console.log(filter_select_size);
    let list_items_local = JSON.parse(localStorage.getItem("list_products")) || list_products;
    if(filter_select_size ==='All'){
        draw_products(list_items_local);
    }else{
        list_items_local = list_items_local.filter((item)=> item.size ===filter_select_size);
        draw_products(list_items_local);
    }
}


function get_filter_deleveryvalue(e){

    filter_select_delevery = e.target.value;
    console.log(filter_select_delevery);
    let list_items_local = JSON.parse(localStorage.getItem("list_products")) || list_products;
    if(filter_select_delevery ==='All'){
        draw_products(list_items_local);
    }else{
        list_items_local = list_items_local.filter((item)=> item.time_delevry ===filter_select_delevery);
        draw_products(list_items_local);
    }
}


/******** Edite product  ********** */

function edit_product(id){

    localStorage.setItem("editproduct_id",id);
    window.location = "edit_products_page.html";
}