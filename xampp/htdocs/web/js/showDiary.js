const ul = document.getElementById("diaryList");
const li = document.getElementById("li");
const writeDiary = document.getElementById("writeDiary");
const showdiary = document.getElementById("showDiary");


function showDiary(event){
    console.log("클릭");
}

window.onload = function(){
    console.log("콘솔");
    if(li){
        li.addEventListener("click", showDiary);
    }else{
        console.log("오류");
    }
}



