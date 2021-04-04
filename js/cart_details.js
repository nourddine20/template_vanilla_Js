let list_products =JSON.parse(localStorage.getItem("list_products"));
let product_details_id = localStorage.getItem("productID_details");

let product_details_item = list_products.find((item)=> item.id == product_details_id);
let box_product_details = document.querySelector(".box_product_details");

console.log(product_details_item.image);

box_product_details.innerHTML =` 
<div class="item_details">
<div class="item_details_image">
    <img src='${product_details_item.image}' >
</div>
<div class="small_images">
    <div class="box_img  active" style="background-image: url('${product_details_item.image}');">
   <div class="overlay">

   </div>
    </div> 
    <div class="box_img" style="background-image: url('${product_details_item.image}');">
        <div class="overlay">

        </div>
         </div> 
         <div class="box_img" style="background-image: url('${product_details_item.image}');" >
            <div class="overlay">

            </div>
             </div> 
             <div class="box_img" style="background-image: url('${product_details_item.image}');">
                <div class="overlay">

                </div>
             </div> 

</div>
</div>

<div class="item_details_info">

<div class="title_product">
<h3>${product_details_item.title}</h3>
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
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad reprehenderit eum aliquid sunt placeat sequi commodi, fugiat quam quod, similique obcaecati eveniet officiis quibusdam, provident tempore assumenda? Minima, voluptatibus.
</p>
<div class="boxing_product">
<span><i class="fas fa-weight-hanging fa-lg"></i> Size :Large</span>
<span><i class="fas fa-truck fa-lg" ></i> Time delevery : 2 days</span>
</div>
<div class="icons_method">

</div>

 `;

 


