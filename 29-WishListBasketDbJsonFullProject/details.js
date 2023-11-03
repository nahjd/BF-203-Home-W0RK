let detailBox = document.querySelector(".detailBox");

let id = new URLSearchParams(location.search).get("id");

console.log(id);

fetch("http://localhost:3000/singers?id=" + id)
 .then((res) => res.json())
 .then((data) => {
    data.forEach((element) => {
        detailBox.innerHTML=`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${element.image}" alt="">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.nationality}</p>
    <a href="index.html" class="btn btn-info">home</a>
  </div>`
});
        
    });
 
 