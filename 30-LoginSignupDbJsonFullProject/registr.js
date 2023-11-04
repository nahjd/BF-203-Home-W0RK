let login=document.querySelector("#registr-form");
let register_name=document.querySelector(".registr-name");
let balanceInp=document.querySelector(".registr-balance");
let emailInp=document.querySelector(".registr-email");
let usernameInp=document.querySelector(".registr-name");
let passwordInp=document.querySelector(".registr-password");

let r = /[A-Z]/;
let r1 = /[a-zA-Z0-9\s]/;
login.addEventListener("submit", function(e){
  e.preventDefault();
  let usernameInp = document.querySelector(".registr-name");
  let passwordInp = document.querySelector(".registr-password");
  let balanceInp = document.querySelector(".registr-balance");
  let emailInp=document.querySelector(".registr-email");
  let passwordMatch = registerPassword.value.match(r);
})


login.addEventListener("submit", function(e){
  e.preventDefault()
    if(passwordMatch){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })

    }
    axios.get("http://localhost:3000/users").then(res=>{
        let users=res.data;
        let duplicateUserName = users.find((user) => user.username==usernameInp.value);
        // console.log("salam");
       if (duplicateUserName) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          });
          document.location.href ="login.html";
            //sweet alert - username already exist
       }
       else{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          
         //register user - postr request
       }
});
});
        