var ageString = prompt("Please enter your age in years: ");
var age = parseInt(ageString);
// console.log ("You have lived roughly " + (age * 365) + " days");
var msg; 

if(age < 1) {
    msg = "Wrong age";
    // alert (msg)
}
else if( age == 21) {
    msg = "Happy 21st birthday";
    // alert (msg)
}
else if ( age % 2 !== 0 && !(Math.sqrt(age) % 1 === 0)){
    msg = "Your age is odd";
    // alert (msg)
}
else if(Math.sqrt(age) % 1 === 0){
    msg = "Perfect Square"
}
else {
    msg = "nice age bro :D"
}
// else if ()
// alert ("You have lived roughly " + (age * 365) + " days");
document.getElementById("age").innerHTML = msg;