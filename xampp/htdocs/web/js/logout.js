const out = document.getElementById("logOut");



function logOut(){
    localStorage.removeItem("userinfo");
    localStorage.removeItem("diary");
    location.replace("../index.html");
}


out.addEventListener("click", logOut);