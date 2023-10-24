let body = document.querySelector("body");
let container = document.createElement("div");
let wrapper = document.createElement("div");
let h1 = document.createElement("h1");
let cardDesign = document.createElement("div");

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
container.classList.add("container");
container.style.width = "960px";
container.style.marginTop = "10px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "20px";
wrapper.classList.add("wrapper");
wrapper.style.width = "960px";
wrapper.style.height = "360px";
wrapper.style.backgroundColor = "black";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.alignItems = "center";
h1.textContent = " 960 x 360px";
h1.style.color = "white";
h1.style.fontFamily = "'Oswald', sans-serif, 'Raleway', sans-serif";

let allElements = document.querySelectorAll("*");
for (var i = 0; i < allElements.length; i++) {
  allElements[i].style.boxSizing = "border-box";
  allElements[i].style.padding = "0";
  allElements[i].style.margin = "0";
}

 let cardData = [
  {
    width: "290px",
    height: "300px",
    topHeight: "180px",
    h2: "290 x 180px",
    title: "Indonectetus facilis",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, voluptas.",
  },
  {
    width: "290px",
    height: "300px",
    topHeight: "180px",
    h2: "290 x 180px",
    title: "Indonectetus facilis",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, voluptas",
  },
  {
    width: "290px",
    height: "300px",
    topHeight: "180px",
    h2: "290 x 180px",
    title: "Indonectetus facilis",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, voluptas",
  },
];

for (var i = 0; i < cardData.length; i++) {
  var card = createCard(cardData[i]);
  cardDesign.append(card);
}

cardDesign.style.display = "flex";
cardDesign.style.justifyContent = "center";
cardDesign.style.justifyContent = "space-between";
function createCard(data) {
  const card = document.createElement("div");
  card.style.width = data.width;
  card.style.height = data.height;

  const top = document.createElement("div");
  top.style.width = data.width;
  top.style.height = data.topHeight;
  top.style.backgroundColor = "black";
  top.style.display = "flex";
  top.style.justifyContent = "center";
  top.style.alignItems = "center";

  const h2 = document.createElement("h2");
  h2.textContent = data.h2;
  h2.style.color = "white";

  const bottom = document.createElement("div");
  bottom.style.position = "relative";

  const title = document.createElement("p");
  title.textContent = data.title;
  title.style.fontWeight = "bold";
  title.style.fontStyle = "italic";
  title.style.fontSize = "1.3em";

  const info = document.createElement("p");
  info.textContent = data.info;

  const moreAbout = document.createElement("p");
  moreAbout.textContent = "Read More >";
  moreAbout.style.color = "orange";
  moreAbout.style.fontWeight = "bold";
  moreAbout.style.position = "relative";
  moreAbout.style.width = "90px";
  moreAbout.style.left = "65%";
  moreAbout.style.bottom = "0px";

  top.appendChild(h2);

  bottom.appendChild(title);
  bottom.appendChild(info);
  bottom.appendChild(moreAbout);

  card.appendChild(top);
  card.appendChild(bottom);

  return card;
}

body.appendChild(container);
container.append(wrapper, cardDesign);
wrapper.appendChild(h1);