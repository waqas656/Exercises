var body = document.querySelector("body");

var bodyColor = "blue";

setInterval(function(){

    if (bodyColor === "blue"){
        bodyColor = "green";
        body.style.backgroundColor = bodyColor;
    }
    else {
        bodyColor = "blue";
        body.style.backgroundColor = bodyColor;
    }
}, 500)