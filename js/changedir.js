let en_lang = document.getElementById("lang_en");

let ar_lang = document.getElementById("lang_ar");

let get_lang = localStorage.getItem("lang_dir");

if(get_lang){

    if(get_lang==="rtl"){
        change_dir('rtl');
    }
    else{
        change_dir('rtl');
    }
}
ar_lang.addEventListener('click',()=>change_dir("rtl"));
en_lang.addEventListener('click',()=>change_dir("ltr"));
function change_dir(dir){

    document.documentElement.setAttribute('dir',dir)
    localStorage.setItem("lang_dir",dir);
}