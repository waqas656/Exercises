var pElement = document.querySelector("p");
var ulElement = document.querySelector("ul");


function onBtnClick(){
    console.log(pElement.textContent)
    console.log(ulElement.textContent)

    console.log(pElement.innerHTML)
    console.log(ulElement.innerHTML)

    //we can change the strong property font size using inner html, but can't do the same with .textContent
    pElement.innerHTML = "Corgi mixes are <strong style=\"font-size: 50px;\">super</strong> cute.";
    //InnerHtml extracts the nested tags like <strong> in this case while .textContent just extracts the text
}

function onBtnClickForBody(){
    var body = document.getElementsByTagName("body");
    document.body.innerHTML = "<h1>OK GOODBYE THEN !!</h1>" //we can't do the same with textContent()
}