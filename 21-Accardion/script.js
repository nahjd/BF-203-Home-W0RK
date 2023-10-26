let body = document.querySelector("body");
let container = document.querySelector(".container");
let box = document.querySelectorAll(".box");
let questions = document.querySelectorAll(".questions");
let answers = document.querySelectorAll(".answer");
let buttons = document.querySelectorAll("button");
let icons = document.querySelectorAll("button i");

buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        if(icons[index].classList.contains("fa-share")){
            icons[index].classList.replace("fa-share","fa-circle-xmark");
            box[index].style.backgroundColor="white";
            answers[index].style.display="block";
        }
        else{
            icons[index].classList.replace("fa-circle-xmark","fa-share");
            box[index].style.backgroundColor =  "rgb(224, 223, 223)";
            answers[index].style.display="none";

        }
        
    })
    
})