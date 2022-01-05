function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == 'admin1' && password == 'consoleadmin'){
        
        var backgroundcolor = document.getElementById('thebody');
        window.open('mainpage.html', "_self");
    }
    else{
        
        alert("Username or Password is incorrect. Please try again.")
        var backgroundcolor1 = document.getElementById('thebody');
        
        
    }
}