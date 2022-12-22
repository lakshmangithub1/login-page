

document.getElementById("forgotPassword").addEventListener("click", function() {

    document.querySelector(".main-bg").style.display = "none"; 
    document.querySelector(".forgot-pass-bg").style.display = "block";
    document.querySelector(".signup-bg").style.display = "none";
    
}) 


document.getElementById("signUp").addEventListener("click", function() {
    document.querySelector(".main-bg").style.display = "none"; 
    document.querySelector(".signup-bg").style.display = "block";
    document.querySelector(".forgot-pass-bg").style.display = "none";
}) 

document.getElementById("pLoginPage").addEventListener("click", function() {
    document.querySelector(".main-bg").style.display = "block"; 
    document.querySelector(".signup-bg").style.display = "none";
    document.querySelector(".forgot-pass-bg").style.display = "none";
}) 


document.getElementById("CLoginPage").addEventListener("click", function() {
    document.querySelector(".main-bg").style.display = "block"; 
    document.querySelector(".signup-bg").style.display = "none";
    document.querySelector(".forgot-pass-bg").style.display = "none";
}) 
