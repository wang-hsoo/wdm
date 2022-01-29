const userInfo = JSON.parse(localStorage.getItem("userinfo"));
const userId = userInfo.id;
const userName = userInfo.name;
const welcome = document.getElementById("welcome");
const hiddenId = document.getElementById("hiddenId");
const save = document.getElementById("save");
const date = document.getElementById("date");
const listDiary = document.getElementById("diaryList");
const title = document.getElementById("title");

var now = "";


function nowDate(){
    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let dat = today.getDate();  // 날짜
    let day = today.getDay();  // 요일


    switch(day){
        case 0:
            now = `${year} - ${month} - ${dat} - 일`;
            break;

        case 1:
            now = `${year} - ${month} - ${dat} - 월`;
            break;

        case 2:
            now = `${year} - ${month} - ${dat} - 화`;
            break;

        case 3:
            now = `${year} - ${month} - ${dat} - 수`;
            break;

        case 4:
            now = `${year} - ${month} - ${dat} - 목`;
            break;

        case 5:
            now = `${year} - ${month} - ${dat} - 금`;
            break;

        case 6:
            now = `${year} - ${month} - ${dat} - 토`;
            break;

    }


}

    
function saveId(){
    hiddenId.value = userId;
    nowDate();
    date.value = now;
}

function listUp(){
    var diaryArray = new Array();

    diaryArray = JSON.parse(localStorage.getItem("diary"));
    

    for(let i = 0; i < diaryArray.length; i++){
        const li = document.createElement("li");
        li.id = now;

        const span1 = document.createElement("span");
        span1.innerText = diaryArray[i]["title"];

        const span2 = document.createElement("span");
        span2.innerText = diaryArray[i]["date"];

        li.appendChild(span1);
        li.appendChild(span2);

        listDiary.appendChild(li);
    }

}

function helloWord(){
    if(userInfo){
        welcome.innerText = `${userName}님 환영합니다`;
        listUp();
    }else{
        localStorage.setItem( "errorCode", JSON.stringify(5));
        location.replace("../index.html");
    }

}



window.addEventListener("load", helloWord);
save.addEventListener("click", saveId);


