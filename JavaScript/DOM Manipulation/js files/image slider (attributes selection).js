var imagesList = ["imgz/poke1.png", "imgz/poke2.jpg", "imgz/poke3.jpg", "imgz/poke4.jpg", "imgz/poke5.jpg", "imgz/poke6.jpg"];

var img = document.querySelector("img");

var imgListLength = imagesList.length;

var currentImageNumber = -1;

function prevImage(){
    if (currentImageNumber === 0 || currentImageNumber === -1){ //if first image is currently in view and we want to go to last image by pressing previous image button
        currentImageNumber = imagesList.length;
    }

    img.setAttribute("src", imagesList[--currentImageNumber]); //similary we can get attributes with getAttribute("src")
    
}

function nextImage(){
    
    if (currentImageNumber >= imagesList.length - 1){ //if last image
        currentImageNumber = -1;
    }
    
    img.setAttribute("src", imagesList[++currentImageNumber]);
    
}

var chngBtn = document.querySelector("#changeBtn");
console.log(chngBtn.textContent)

chngBtn.addEventListener("click", function(){
    let link = document.querySelector("a");
    link.setAttribute("href", "https://www.facebook.com");
    link.textContent = "Link to FACEBOOK";
})

var h1Tag = document.querySelector("h1");
h1Tag.addEventListener("dblclick", function(){
    alert("H1 is double clicked!")
})

h1Tag.addEventListener("mouseenter", function(){
    alert("H1 is hovered!")
})

function changeLink(){ //for onClick() in html
    let link = document.querySelector("a");
    link.setAttribute("href", "https://www.facebook.com");
    link.textContent = "Link to FACEBOOK";
}