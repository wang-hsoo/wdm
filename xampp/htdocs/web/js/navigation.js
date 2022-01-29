const naviForm = document.getElementById("navi");
const menuBtn = document.getElementById("menu");
const x = document.getElementById("x");
const header = document.getElementById("header");



function showNavigation(){
    naviForm.style.display = "block";
    
}

function hideNavigation(){
    naviForm.style.display = "none";
    
}



menuBtn.addEventListener("click", showNavigation);
x.addEventListener("click", hideNavigation);