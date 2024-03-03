const NUM = 7;

var userInput = Number(prompt ("Guess the number :")); //converting input to a number
var msg;

// while (userInput !== NUM){
//     var userInput = Number(prompt ("Guess the number :")); //converting input to a number
// }

if (userInput === NUM){
   msg = "Hurray! you guessed it RIGHT!! Congrats ...";
}

else if (NUM >= 0 && userInput < 0){
    msg = "Wrong! It's a positive number";
}

else if(NUM < 0 && userInput >= 0){
    msg = "Wrong! It's a negative number";
}

else if ( (userInput <= (NUM + 6)) && (userInput > (NUM + 2)) ){ //if between upper 6 numbers limit but not 2 digits close from upper side
    msg = "High";
}

else if ( (userInput >= (NUM - 6)) && (userInput < (NUM - 2)) ){ //if between lower 6 numbers limit but not 2 digits close from lower side
    msg = "Low";
}

else if (userInput == (NUM + 2)){
    msg = "Very close";
}

else if (userInput == (NUM - 2)){
    msg = "Very close";
}

else if (userInput == (NUM + 1) || userInput == (NUM - 1)){
    msg = "Almost got it";
}

else {
    if (userInput > NUM){
        msg = "Too High";
    }
    else{
        msg = "Too Low"
    }

}


document.getElementById("result").innerHTML = msg;