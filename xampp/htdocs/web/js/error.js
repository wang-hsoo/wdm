const errorDiv = document.getElementById("error");
const input = document.querySelector(".input");

var errorCode;
var interval = 0;
var opacity = 0.8;


function idError(){
     alert ("에라");
}

function hide(){

    if(opacity > 0 ){
        opacity -= 0.1;
        errorDiv.style.opacity = opacity;
    }else{
        clearInterval(interval);
    }
}

function errorFade(){
    errorDiv.style.display = "inline-block";
    setTimeout(function(){
        interval = setInterval(hide, 50);
    }, 1500);
    localStorage.removeItem("errorCode");
}



    errorCode = JSON.parse(localStorage.getItem("errorCode"));
    console.log(errorCode);

    switch(errorCode){

        case 1:
            errorDiv.innerText = "아이디 또는 비밀번호를 다시 입력해 주세요";
            errorFade();
            break;

        case 2:
            console.log("확인");
            errorDiv.innerText = "비밀번호를 다시 확인해주세요";
            errorFade();
            break;

        case 3:
            errorDiv.innerText = "사용하실 수 없는 아이디 입니다.";
            errorFade();
            break;
        

        case 5:
            errorDiv.innerText = "다시 시도해주세요";
            errorFade();
            break;

        default:
            localStorage.removeItem("errorCode");
            break;


    }








