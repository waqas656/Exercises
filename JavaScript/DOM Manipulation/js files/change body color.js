let clickBtn = document.getElementById("clickMeBtn");
let body = document.querySelector("body")

let color = true;

clickBtn.addEventListener("click", function(){
    if(color) body.style.background = "purple"
    else body.style.background = "white"

    color = !color;
})