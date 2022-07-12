function login(bool) {
if(bool==true){
    window.location.href="main.html";
}

}

function validateLoginDetails(login) {
    let uname = document.getElementById("username").value;
    let passw = document.getElementById("password").value;
    console.log(uname, passw);

    if (uname == "admin" && passw == "12345") {
         login(true);
    }
    else {
       login(false);
    }

}