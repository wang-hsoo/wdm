const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];
const backImg = document.getElementById("backImg");
var i = images.length;



function back(){
    if(i < images.length){
        backImg.src = `img/${images[i]}`;
        i++;
    }else{
        i = 1;
        backImg.src = `img/${images[i]}`;
        i++;

    }
}

setInterval(back, 5000);

