
var usrinp = prompt("Are we there yet?")
while (!usrinp.includes("yes") && !usrinp.includes("yeah") ){
    usrinp = prompt("Are we there yet?")
}

alert("yayy! we made it")


//Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
 var num = -10;

 while (num < 20 ){
     console.log(num);
     num++;
 }


//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
 var num2 = 10;

 while (num2 < 41){
     if(num2 % 2 === 0){
         console.log(num2);
     }
     num2++;
 }


//Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
var num3 = 300;
while (num3 <= 333) {
    if (num3 % 2 !== 0) {
        console.log(num3);
    }
    num3++;
}


//Print all numbers divisible by 5 and 3 between 5 and 20
console.log("Print all numbers divisible by 5 and 3 between 5 and 20");
var num4 = 5;

while (num4 < 21){
    if(num4 % 3 === 0 || num4 % 5 === 0){
        console.log(num4);
    }
    num4++;
}