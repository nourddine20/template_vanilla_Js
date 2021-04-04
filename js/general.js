 login = document.querySelector("#login");
 user = document.querySelector("#user");
 user_info = document.querySelector("#user_info");
 log_out = document.querySelector("#log_out");
 username_save = localStorage.getItem("username");
 password_save = localStorage.getItem("password");
 email_save = localStorage.getItem("email");

function method_log_out(e){
    localStorage.clear();
    e.preventDefault();
    user.style.display="none";
    login.style.display="flex";
    window.setTimeout(() => {
        window.location = "index.html";
},100);

}

if(username_save){
   
    login.style.display="none";
    user.style.display="flex";
    user_info.innerHTML=username_save;
log_out.addEventListener("click",method_log_out);

}

