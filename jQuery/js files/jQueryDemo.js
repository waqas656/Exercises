const h1 = $("h1");

let h1Style = {
    border: "2px solid green",
    margin: "0",
    "font-size": "100px",
    color: "Red",
    "background-color": "lightgray" 
}

let liStyle = {
    border: "2px solid green",
    color: "orange",
    "background-color": "pink",
    "font-size": "30px",
    margin: "10px"
}


$(h1).css(h1Style); //using objects for css properties
$("ul").css("margin-top", "50px") //inline css properties
$("li").css(liStyle); //using objects for css properties (in case of normal js, we have to loop through the array of li we get from selecting all of them and then apply properties)
$("a").css("color", "green").css("font-size", "70px")