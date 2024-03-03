let playingToScoreInput = document.querySelector("#playingToField");
console.log(playingToScoreInput)

let maxScoreSpanElement = document.querySelector("#playingToScore");
console.log(maxScoreSpanElement)

let playerOneBtn = document.querySelector("#player1Btn");
let playerTwoBtn = document.querySelector("#player2Btn");
console.log(playerOneBtn)
console.log(playerTwoBtn)

let playerOneScore = document.querySelector("#player1Score");
let playerTwoScore = document.querySelector("#player2Score");
console.log(playerOneScore)
console.log(playerTwoScore)

let playingToField = document.querySelector("#playingToField");
console.log(playingToField)

playerOneScore.textContent = "0";
playerTwoScore.textContent = "0";

let resetBtn = document.querySelector("#resetBtn");
console.log(resetBtn)


playerOneBtn.addEventListener("click", function () {
    if (maxScoreSpanElement.textContent != "") {
        playingToField.classList.remove("errorStyle")
        let score1 = playerOneScore.textContent;
        ++score1;
        if (score1 <= maxScoreSpanElement.textContent) {
            playerOneScore.textContent = score1;
            if (score1 == maxScoreSpanElement.textContent) {
                playerOneScore.classList.add("greenColor");
            }
        }
    } else {
        playingToField.classList.add("errorStyle")
    }
})

playerTwoBtn.addEventListener("click", function () {
    if (maxScoreSpanElement.textContent != "") {
        playingToField.classList.remove("errorStyle")
        let score2 = playerTwoScore.textContent;
        ++score2;
        if (score2 <= maxScoreSpanElement.textContent) {
            playerTwoScore.textContent = score2;
            if (score2 == maxScoreSpanElement.textContent) {
                playerTwoScore.classList.add("greenColor");
            }
        }
    } else {
        playingToField.classList.add("errorStyle")
    }
})

playingToScoreInput.addEventListener("change", function () { //'change' listens for any change whether it is through click or typing or arrow keys
    maxScoreSpanElement.textContent = playingToScoreInput.value;
})

resetBtn.addEventListener("click", function(){
    playerOneScore.textContent = "0";
    playerTwoScore.textContent = "0";

    maxScoreSpanElement.textContent = "";

    playingToField.value = "";


    playerOneScore.classList.remove("greenColor");
    playerTwoScore.classList.remove("greenColor");
})

