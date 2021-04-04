let btn_update_profile = document.getElementById("btn_update_profile");

let username_ui = document.getElementById("change_username");
let email_ui = document.getElementById("change_email");
let password_ui = document.getElementById("change_password");
let confirm_password_ui = document.getElementById("confirme_password");

let form_edit = document.getElementById("form_edit");
username_ui.value = username_save;
email_ui.value = email_save;

console.log(password_ui);


    form_edit.addEventListener("submit",update_myprofile);



function update_myprofile(e){
    
    e.preventDefault();

    if(username_ui.value.trim()!="" && email_ui.value.trim()!="" && password_ui.value.trim()!="" && confirm_password_ui.value.trim()!="" && confirm_password_ui.value.toLowerCase().trim() === password_ui.value.toLowerCase().trim()){

        localStorage.setItem("username",username_ui.value);

        localStorage.setItem("email",email_ui.value);

        localStorage.setItem("password",password_ui.value);
    
        console.log("hello");

        window.location = "profile.html";
    }
    else{
        alert("error");
    }
       
 
}

