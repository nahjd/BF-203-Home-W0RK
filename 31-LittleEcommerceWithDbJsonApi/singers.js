let cardlist = document.querySelector(".cardlist");
let url = " http://localhost:3000/singers";
fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data);

    data.forEach((element,i) => {
        cardlist.innerHTML +=
        `  <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${element.image}" alt="">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.nationality}</p>
          <a href="details.html?id=${element.id}" class="btn btn-info">Detail</a>
          <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
          <button type="button" class="btn btn-outline-danger"><i class="fa-regular fa-heart"></i></button>
        </div>`
        
    });
    let images = document.querySelectorAll(".card-img-top");
    // console.log(images);

    images.forEach((image) => {
        image.addEventListener("mousemove", function(){
            image.style.transform="scale(1.2)";
            img.style.transition = "transform 0.25s";
        });
        image.addEventListener("mouseout", function(){
            image.style.transform="scale(1)";
            img.style.transition = "transform 0.25s";
        });
    });
    // console.log(img)
    
});
console.log();

