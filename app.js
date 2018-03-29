function signup(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var num = document.getElementById("num").value;
    var pass = document.getElementById("pass").value;
    
    if(name == ""){
        alert("Enter Name");
    }
    
    else if(email == ""){
        alert("Enter Email");
    }
    
    else if(num == ""){
        alert("Enter Number");
    }
    
    else if(pass == ""){
        alert("Enter Password");
    }

    else{    
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("num",num);
        localStorage.setItem("pass",pass);
        window.location = "index.html";
    }
}

function login(){
    var email1 = document.getElementById("email1").value;
    var pass1 = document.getElementById("pass1").value;
    var emailget = localStorage.getItem("email");
    var passget = localStorage.getItem("pass");
    if(email1 == ""){
        alert("Enter Email");
    }
    else if(pass1 == ""){
        alert("Enter Password");
    }
    else{    
        if(email1 == emailget && pass1 == passget){
            window.location = "main.html";        
        }
        else
        {
            alert("Incorrect Email or Password");
        }
    }
}

var pname = localStorage.getItem("name");
document.getElementById("spName").innerHTML = pname;

var pemail = localStorage.getItem("email");
document.getElementById("spEmail").innerHTML = pemail;

var ppass = localStorage.getItem("pass");
document.getElementById("spPass").innerHTML = ppass;

var pnum = localStorage.getItem("num");
document.getElementById("spNum").innerHTML = pnum;