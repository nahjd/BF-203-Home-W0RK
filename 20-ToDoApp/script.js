let input = document.querySelector(".inputData input");
let addedButton = document.querySelector(".inputData button");
let ul = document.querySelector("ul");

addedButton.addEventListener("click", function () {
  var p = document.createElement("p");
  p.style.display = "flex";
  p.style.alignItems = "center";
  p.innerHTML = input.value;
  var button = document.createElement("button");
  button.style.padding = "10px";
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.fontSize = "1.2em";
  button.style.border = "none";
  button.innerHTML = `<i class="fa-solid fa-check" style="color: #0b9e00;"></i>`;
  button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  button.style.maxWidth = "100%";
  var li = document.createElement("li");
  ul.appendChild(li);
  li.appendChild(p);
  li.appendChild(button);

  button.addEventListener("click", function () {
    ul.removeChild(li);
  });
});
var cleatbutton = document.querySelector(".clearbutton");
cleatbutton.addEventListener("click", function () {
  var ul = document.querySelector("#clearbutton");
  ul.innerHTML = "";
});