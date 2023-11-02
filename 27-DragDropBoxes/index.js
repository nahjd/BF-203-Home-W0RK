let square = document.querySelectorAll(".square");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
console.log(second);

for (let item of square) {
    square.addEventListener("dragstart", function (e) {
      e.preventDefault();
    let selected = e.target;

    second.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    second.addEventListener("drop", function (e) {
      e.preventDefault();
    

      second.appendChild(selected);
      selected = null;
    });
    first.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    first.addEventListener("drop", function (e) {
      e.preventDefault();
     

      first.appendChild(selected);
      selected = null;
    });
  });
}


  

