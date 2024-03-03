let liElements = document.querySelectorAll("li"); //selecting all li's

for (let i = 0; i < liElements.length; i++){
    liElements[i].addEventListener("mouseover", function(){
        this.style.color = "green";
        this.style.fontWeight = "bold";
    });

    liElements[i].addEventListener("mouseout", function(){
        this.style.color = "black";
        this.style.fontWeight = "normal";
    });

    liElements[i].addEventListener("click", function(){
        this.classList.toggle("done")
    });
}