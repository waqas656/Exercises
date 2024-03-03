
var h1 = document.getElementById("h1Tag");

h1.classList.add("h1ColorGreen"); //we can add as many style classes to element & then toggle it
h1.classList.add("h1ColorBlack");

function changeColor() {
    // if (h1.classList.contains("h1ColorBlack")) {
    //     h1.classList.remove("h1ColorBlack");
    //     h1.classList.add("h1ColorGreen");
    // }
    // else {
    //     h1.classList.remove("h1ColorGreen");
    //     h1.classList.add("h1ColorBlack");
    // }


    // or
    h1.classList.toggle("h1ColorBlack");

}