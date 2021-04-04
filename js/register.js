///////////////// Register User /////////////////
let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let sign_up_btn = document.getElementById("sign_up");
let username_data = localStorage.getItem("username");
let password_data = localStorage.getItem("password");
let email_data = localStorage.getItem("email");
function method_register(e) {
       
    e.preventDefault();

        if (username.value.trim() === "" || password.value.trim() === "" || email.value.trim() === ""){
            
            alert("please enter your information !!!");
        }
        else if(username.value.trim()=== username_data || email.value.trim() === email_data || password.value.trim() === password_data ){
            alert(" there is an account has is aleardy exist !")
        }
        else {

            localStorage.setItem("username", username.value.trim());
            localStorage.setItem("password", password.value.trim());
            localStorage.setItem("email", email.value.trim());
            
            window.setTimeout(() => {
                window.location = "login.html";
            },1500);
        }
    }

sign_up_btn.addEventListener("click",method_register);





