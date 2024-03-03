var userInput = prompt("Enter command:")

var todoList = [];

while (userInput !== "quit") {
    if (userInput === "new") {
        addNewToDo();
    }

    else if (userInput === "list") {
        listAllTodos();
    }

    else if (userInput === "delete") {
        deleteTodo();
    }

    else {
        alert("Command not recognized !");
    }
    var userInput = prompt("Enter command:")
}

function addNewToDo() {
    var inp = prompt("Enter a new to-do item : ");
    todoList.push(inp);
    console.log("added " + inp);
}

function listAllTodos() {
    console.log("**************************")
    todoList.forEach(function (todo, i) {

        console.log(i + ":" + todo);
    });
    console.log("**************************")
}

function deleteTodo() {
    var index = prompt("Write index of to-do to delete:")
    console.log("deleted " + todoList[index]);
    todoList.splice(index, 1); //1st argument (index) tells the positon/index of elemenet in array and 2nd argument tells how many elements to delete

}