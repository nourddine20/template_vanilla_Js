let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let sign_in_btn = document.getElementById("sign_in");
let username_data = localStorage.getItem("username");
let password_data = localStorage.getItem("password");

function method_login(e){

    e.preventDefault();
   
    if (username.value.trim() === "" || password.value.trim() === ""){
            
        alert("please enter your information !!!");
    }
    else if(username.value.trim()=== username_data && password.value.trim() === password_data){
        window.setTimeout(() => {
                        window.location = "index.html";
            },100);
            
    }
    else{
   
           alert("Opps !!! your username or password is wrong or maybe you are not sign in yet ? ");
       
    }
   
}

sign_in_btn.addEventListener("click",method_login);
