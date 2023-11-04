let form = document.querySelector("#login-form");
let usernameInp = document.querySelector(".login-username");
let passwordInp = document.querySelector(".login-password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  axios.get("http://localhost:3000/users").then((res) => {
    let user = res.data.find(
      (user) =>
        user.username === usernameInp.value &&
        user.password === passwordInp.value
    );

    if (user) {
      window.location.href = "index.html";
    } else {
      alert("Login failed. Please check your username and password.");
    }
  });
});