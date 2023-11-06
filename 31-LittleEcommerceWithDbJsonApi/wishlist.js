let content = document.querySelector("#content");

content.addEventListener("click", function(e){
    e.preventDefault();
})
axios.get("http://localhost:3000/wishlist").then(res=>{
     let datas=res.data;
     console.log(datas)
     datas.forEach((element,i) => {
        content.innerHTML +=` 
        <div class="product">
                 <div id = "product0">
                    <img src="${element.image}" height="150" width="200" />
                    <h3>"${element.name}"</h3>
                    <p>"${element.Type}"</p>
                    <p>"${element.Price}"</p>
                </div>
                <input type="button" value="Add to List" id="0" class="but" />
            </div>
    `
     });
   
});
let body = document.querySelector("#layout");
let product = document.querySelectorAll(".product");

let wishList = [];



function addItem (e) {
    let productId = e.target.getAttribute("id");
    if(!wishList.find(element => element === productId)){
        let productDiv = document.getElementById("product" + productId);

        let wishDiv = document.createElement("div");
        wishDiv.setAttribute("id", "wish" + productId);
        wishDiv.setAttribute("class", "product");
        wishDiv.setAttribute("style", "margin-bottom: 10px;")
        wishDiv.innerHTML += productDiv.innerHTML;
        let removeBtn = document.createElement("input");
        removeBtn.setAttribute("id", "remove" + productId);
        removeBtn.setAttribute("type", "button");
        removeBtn.setAttribute("value", "Remove");
        // removeBtn.setAttribute("class", "removebut");
        removeBtn.onclick = () => removeItem(productId);
        wishDiv.appendChild(removeBtn);

        let aside = document.getElementById("wishlist");
        aside.appendChild(wishDiv);

        wishList.push(productId);
    }
}

function setup() 
{
    let products = document.querySelectorAll(".but");
    for (let i = 0; i < products.length; i++)
    
    {
        products[i].onclick = function(e) {
            
            
            addItem(e);
        }
    }
   
}
function removeItem(productId) {
    document.getElementById("wish" + productId).remove();
    wishList = wishList.filter(element => element !== productId)
}

window.addEventListener("load", setup);

 




















function addItem (e) {
    let productId = e.target.getAttribute("id");
    if(!wishList.find(element => element === productId)){
        let productDiv = document.getElementById("product" + productId);

        let wishDiv = document.createElement("div");
        wishDiv.setAttribute("id", "wish" + productId);
        wishDiv.setAttribute("class", "product");
        wishDiv.setAttribute("style", "margin-bottom: 10px;")
        wishDiv.innerHTML += productDiv.innerHTML;
        let removeBtn = document.createElement("input");
        removeBtn.setAttribute("id", "remove" + productId);
        removeBtn.setAttribute("type", "button");
        removeBtn.setAttribute("value", "Remove");
        // removeBtn.setAttribute("class", "removebut");
        removeBtn.onclick = () => removeItem(productId);
        wishDiv.appendChild(removeBtn);

        let aside = document.getElementById("wishlist");
        aside.appendChild(wishDiv);

        wishList.push(productId);
    }
}

function setup() 
{
    let products = document.querySelectorAll(".but");
    for (let i = 0; i < products.length; i++)
    
    {
        products[i].onclick = function(e) {
            
            
            addItem(e);
        }
    }
   
}
function removeItem(productId) {
    document.getElementById("wish" + productId).remove();
    wishList = wishList.filter(element => element !== productId)
}

window.addEventListener("load", setup);