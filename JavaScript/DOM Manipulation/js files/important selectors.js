//selected by ID
var idElement = document.getElementById("highlight");
idElement.style.backgroundColor = "yellow";
idElement.style.fontSize = "50px";

//selected by class
var elements = document.getElementsByClassName("bolded");
elements[0].style.fontSize = "25px";
elements[1].style.fontSize = "15px";
// elements.forEach(function(ele){ //THIS IS NOT A FUNCTION BCOZ THIS ISNT AN ARRAY BUT A NODE 
//     ele.style.fontSize = "15px"; //LIST WHICH IS A LIGHTWEIGHT VERSION OF ARRAY THAT DOESN'T 
// })                               //HAVE FOREACH METHOD UNLIKE ARRAYS

//selected by Tag (h1,li, body, div etc)
var liElements = document.getElementsByTagName("li");
liElements[0].style.border = "1px solid blue"
liElements[1].style.border = "1px dashed black"
liElements[2].style.border = "1px solid green"


//querySelector() this follows css syntax
var qIdElement = document.querySelector("#highlight");
qIdElement.style.backgroundColor = "purple";


//With query selector we get only single element unlike getElementByClassName() which gets all the elements with that class, but we can use querySelectoAll()
var elements2 = document.querySelector(".bolded");
elements2.style.fontSize = "35px";

//this gets multiple elements related to .bolded class
var elements3 = document.querySelectorAll(".bolded");
elements3[0].style.backgroundColor = "orange";
elements3[1].style.backgroundColor = "red"; //or we can use forEach loop 

//all anchor tags inside li
var anchorElements = document.querySelectorAll("li a");
anchorElements.forEach(function(ele){
    ele.style.fontSize = "25px";
    console.log(ele)
})

//tags
var allH1s = document.querySelectorAll("h1");
allH1s.forEach(function(h1Element){
    h1Element.style.color = "green"
})
