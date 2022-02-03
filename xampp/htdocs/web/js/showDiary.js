const ul = document.querySelector("#id");
const li = document.querySelector(".list");
const writeDiary = document.getElementById("writeDiary");
const showdiary = document.getElementById("showDiary");


function showDiary(event){
    writeDiary.style.display = "none";
    showdiary.style.display = "flex";
}

li.addEventListener("click", showDiary);
