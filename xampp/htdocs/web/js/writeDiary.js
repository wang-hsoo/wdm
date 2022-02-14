const userInfo = JSON.parse(localStorage.getItem("userinfo"));
const userId = userInfo.id;
const userName = userInfo.name;
const welcome = document.getElementById("welcome");
const hiddenId = document.getElementById("hiddenId");
const save = document.getElementById("save");
const date = document.getElementById("date");
const listDiary = document.getElementById("diaryList");
const title = document.getElementById("title");
const seeDiary = document.getElementById("showDiary");
const writeDiary = document.getElementById("writeDiary");
const writeBtn = document.getElementById("writeBtn");
const dDiary = document.getElementById("dDiary");
const delBtn = document.getElementById("delBtn");
const userHiddenId = document.getElementById("userHiddenId");
const hiddenText = document.getElementById("hiddenText");
const hiddenTitle = document.getElementById("hiddenTitle");


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

function saveUserHiddenId(){
    const showText = document.getElementsByClassName("diaryText");
    const showTitle = document.getElementsByClassName("diaryTitle");
    
    userHiddenId.value = userId;
    hiddenText.value = showText[0].textContent;
    hiddenTitle.value = showTitle[0].textContent;
}

    
function saveId(){
    hiddenId.value = userId;
    nowDate();
    date.value = now;
}

function showDiary(event){

    const reDiv = dDiary.querySelector("div");
    if(reDiv){
        while(dDiary.hasChildNodes()){
            dDiary.removeChild(dDiary.firstChild);
        }
    }

    const showDi1 = event.target.children[0].textContent;
    const showDi2 = event.target.children[1].textContent;
    var getDiary = new Array();

    getDiary = JSON.parse(localStorage.getItem("diary"));



    for(let i = 0; i < getDiary.length; i++){
        if(showDi1 === getDiary[i].title && showDi2 === getDiary[i].date){
            var showCon = getDiary[i].content;
        }
    }


    
    
    
    seeDiary.style.display = "flex";
    writeDiary.style.display = "none";

    const div = document.createElement("div");
    div.innerText = showDi1;
    div.className = "diaryTitle";
    div.setAttribute('name',"diaryTitle" );
    dDiary.appendChild(div);

    const div2 = document.createElement("div");
    div2.innerText = showCon;
    div2.className = "diaryText";
    div2.setAttribute('name',"diaryText" );
    dDiary.appendChild(div2);



    writeBtn.addEventListener("click", () => {
        seeDiary.style.display = "none";
        writeDiary.style.display = "flex";
    });

}

function listUp(){
    var diaryArray = new Array();

    diaryArray = JSON.parse(localStorage.getItem("diary"));

    if(diaryArray.length === undefined){
        const li = document.createElement("li");
        li.className = "list";
        

        const span1 = document.createElement("span");
        span1.innerText = diaryArray.title;

        const span2 = document.createElement("span");
        span2.innerText = diaryArray.date;

        li.appendChild(span1);
        li.appendChild(span2);

        listDiary.appendChild(li);

        li.addEventListener("click", showDiary);

    }else{
        for(let i = 0; i <= diaryArray.length; i++){
            const li = document.createElement("li");
            li.className = "list";
            
    
            const span1 = document.createElement("span");
            span1.innerText = diaryArray[i]["title"];
    
            const span2 = document.createElement("span");
            span2.innerText = diaryArray[i]["date"];
    
            li.appendChild(span1);
            li.appendChild(span2);
    
            listDiary.appendChild(li);

            li.addEventListener("click", showDiary);
        }



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
delBtn.addEventListener("click", saveUserHiddenId);



