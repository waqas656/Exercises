 //attaching listener
 //this is called only when an span inside a ul is clicked
 $("ul").on("click", "li span", function(event){ //this listener is for future li as well it tells whenever an li is clicked inside a ul then run this code
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
     event.stopPropagation(); //this line stops clicks going up in the hierarchy(i-e span < li < ul < div < body) so that li clicked code (adding strike through line) is not called
});

//attaching listener for future li as well
//this is called when an li inside a ul is clicked
$("ul").on("click", "li", function(){ //all the li inside ul
    $(this).toggleClass("completed");
});

$("#todoText").on("keypress", function(event){
    if(event.which === 13){
        //below line is used to add a child (li) to a ul
        $("ul").append('<li>  <span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + $("#todoText").val() + '</li>')
        $("#todoText").val("");


    //below written is the manual way of attaching listeners for the newly added todos

    //     //attaching listener
    //     $("li:last-child span").on("click", function(event){
    //         $(this).parent().fadeOut(1000, function(){
    //             $(this).remove();
    //         });
    //         event.stopPropagation();
    //     });

    //     //attaching listener
    //     $("li:last-child").on("click", function(){
    //         $(this).toggleClass("completed");
    //    });
    }
});

$("#addNewToDo").on("click", function() {
    $("#todoText").fadeToggle();
    $("#todoText").focus();
});