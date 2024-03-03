// let colors = [
//     "rgb(255, 0, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(255, 255, 255)",
//     "rgb(255, 0, 255)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 0, 255)"
// ]
var numberOfSquares = 6;
let colors = generateRandomColor(numberOfSquares);

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let body = document.querySelector("body");
let messageDisplay = document.querySelector("#messageDisplay");
let newColorBtn = document.querySelector("#newColorsBtn");
let h1 = document.querySelector("h1");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");


let pickedColor = getRandomColor(); //picking a random color 
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        console.log(this.style.backgroundColor);
        console.log(pickedColor);

        if (this.style.backgroundColor == pickedColor) {
            messageDisplay.textContent = "Correct!"
            setAllSquaresColorSame();
            newColorBtn.textContent = "Play Again"
            // body.style.backgroundColor = pickedColor;
            h1.style.backgroundColor = pickedColor;
        } else {
            messageDisplay.textContent = "Wrong! Try Again"
            this.style.backgroundColor = "transparent"
        }
    })
}

newColorBtn.addEventListener("click", function () {
    if (newColorBtn.textContent === "Play Again") {
        newColorBtn.textContent = "New Colors";
    }

    messageDisplay.textContent = "";
    
    //generate random color
    colors = generateRandomColor(numberOfSquares);

    //pick a random color from array
    pickedColor = getRandomColor();

    //change h1 color name (colorDisplay) to match picked color
    colorDisplay.textContent = pickedColor;

    //set all squares' colors
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    //change h1 backgroundcolor to normal
    h1.style.backgroundColor = "steelblue"
})

easyBtn.addEventListener("click", function () {

    this.classList.add("selected")
    hardBtn.classList.remove("selected")

    numberOfSquares = 3;

    //generate random color
    colors = generateRandomColor(numberOfSquares);

    //pick a random color from array
    pickedColor = getRandomColor();

    //change h1 color name (colorDisplay) to match picked color
    colorDisplay.textContent = pickedColor;


    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            //hide bottom 3 squares
            squares[i].style.display = "none"
        }
    }

})

hardBtn.addEventListener("click", function () {
    this.classList.add("selected")
    easyBtn.classList.remove("selected")
    //generate random color
    numberOfSquares = 6;
    colors = generateRandomColor(numberOfSquares);

    //pick a random color from array
    pickedColor = getRandomColor();

    //change h1 color name (colorDisplay) to match picked color
    colorDisplay.textContent = pickedColor;


    for (let i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];

        //hide bottom 3 squares
        squares[i].style.display = "block"
    }
})



function setAllSquaresColorSame() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function getRandomColor() {
    //Math.floor gives us the whole number while Math.random() gives 0 or 1 so we multiply it with our array's length so it gives number between that length e.g between 0-5
    let randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function generateRandomColor(num) {
    //make an array
    let arr = [];

    //repeat num times
    for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    //pick a red from 0-255
    let r = Math.floor(Math.random() * 256);

    //pick a green from 0-255
    let g = Math.floor(Math.random() * 256);

    //pick a blue from 0-255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}