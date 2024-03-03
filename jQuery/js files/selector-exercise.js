if(jQuery){
    console.log("jQuery Loaded")
}
else{
    console.log("jQuery Failed Loading...")
}
$("div").css("background-color", "purple");
$(".highlight").css("width", "200px");
$("#third").css("border", "2px solid orange");
$("div:first").css("color", "pink"); //to select just the first div

// or last point can be made a little faster using bcoz firstS-of-type is native css:
$("div:first-of-type").css("color", "pink"); //to select just the first div