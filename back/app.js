const container = document.getElementById("ww");

const color = "#b791e9";

function getElement(){
    var np = document.documentElement.clientWidth / 30;

    for (var i = 0; i < np; i++) {

        var nw = container.offsetWidth;
        var nh = container.offsetHeight;
        var w = Math.floor((Math.random() * (100 - 20 + 1)) + 20);
        var s = Math.floor((Math.random() * (20 - 5 + 1)) + 5);
        var rndw = Math.floor(Math.random() * nw ) + 1;
        var rndh = Math.floor(Math.random() * nh ) + 1;

        
        var div = document.createElement("div");

        div.style.width = w + "px";
        div.style.height = w + "px";
        div.style.background = color;
        div.style.marginLeft = rndw+"px";
        div.style.marginTop = rndh+"px";
        div.style.animation = "rotate " + s + "s";
        div.style.animationIterationCount = "infinite"; 
        div.style.animationTimingFunction = "linear";
        div.style.position = "absolute";
        
        
        container.appendChild(div);
        moveElement(div);
    }
}

function moveElement(div){
    const x = div.getBoundingClientRect().top;
    const y = div.getBoundingClientRect().left;


    
    
}

function main(){
    getElement();
}



window.addEventListener("load", main);
window.addEventListener("resize", main);
