
$("h1").css("color", "red"); //.style property from vanilla js in jQuery

console.log("original li text: " + $("li").text()); //textContent from vanilla js in jQuery

let anchorTagsHtml = $("#second").html(); //innerHTML from vanilla js in jQuery

alert("second li item's html is : " + anchorTagsHtml + "\n" + " and TextContent = " + $("#second").text());

$("h1").mouseover(function () { //querySelector or any other selector method from vanilla js in jQuery
    console.log("inside h1 mouseover event")
    $("li").text("MOUSER HOVERED ON H1 :@")
});

$("h1").click(function () {
    console.log("TextContent : " + $("li").text());
    console.log("image src : " + $("img").attr("src")) //setAttribute/getAttribute from vanilla js

    if ($("li").text() === "HappySadShappy") {
        $("li").text("League Of Legends");
    }
    else {
        $("li:first-of-type").text("Happy");
        $("li:last").text("Shappy");
        $("#second").html(anchorTagsHtml);
    }

    if ($("img").attr("src") === "imgz/poke2.jpg") {
        $("img").attr("src", "imgz/poke5.jpg"); //attr() gets/update the attributes of a tag (in this case we are changing the src attribute of img)
    } else {
        $("img").attr("src", "imgz/poke2.jpg");
    }
    console.log("NEW image src : " + $("img").attr("src"))
})

$("#userInput").on("change", function () { //vanilla js style event listener in jQuery
    let input = $("#userInput").val(); //val() gets/update the value of an input field
    $("li").text(input);
})
let addClsHeading = $("#addCls");
$("#addCls").on("click", function () {
    //toggling classes manually
    if (addClsHeading.hasClass("green")) { //.contains class method for style classes from vanilla js
        $(this).addClass("red") // classList.add() method from vanilla js
        $(this).removeClass("green") //classList.remove() method from vanilla js
    } else {
        $(this).removeClass("red")
        $(this).addClass("green") //jQuery version of vanilla js's 'this' operator
    }
})

//toggling classes with toggleClass function
$("#toggleCls").on("click", function () {
    //toggling classes manually
    if (addClsHeading.hasClass("green")) {
        $("#toggleCls").removeClass("red")
        $("#toggleCls").toggleClass("green") //classList.toggle() method from vanilla js
    } else if (addClsHeading.hasClass("red")) {
        $("#toggleCls").removeClass("green")
        $("#toggleCls").toggleClass("red")
    }
})

//coloring remove class message
$("#rmvClsMsg").css("color", "orange")

//coloring add class message
$("#addClsMsg").css("color", "gray")