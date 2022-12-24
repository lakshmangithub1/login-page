



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


let accounts = getAccountsFromLocalStorage() ;
function getAccountsFromLocalStorage() {
    let accountsDetails = JSON.parse(localStorage.getItem("accounts")); 
    if (accountsDetails === null) {
        return [];
    }
    else {
        return accountsDetails;
    }
}  

function addToLocalStorage(accounts, fullname, mailid, createdpassword) {
    
    let newUser = {
        fullname:fullname,
        mail:mailid,
        password:createdpassword 
      } 
    accounts.push(newUser);  
    localStorage.setItem("accounts", JSON.stringify(accounts));
    
}


// login page code
 
document.getElementById("myForm").addEventListener("submit", function(e) {

    let lsAccounts = getAccountsFromLocalStorage(); 
    if (lsAccounts === null) {
        alert("you dont have account please sign up"); 
        // replace alert with error msg in paragraph element in html
    } 
    else {
        let username = document.getElementById("username").value; 
        let password = document.getElementById("password").value;  
        let su =0;
        for (let ele of lsAccounts) {
            if (ele.mail === username) {
                su=su+1;
            }
        } 
        if (su===0) {
            alert("user doesnt exists or wrong user name")
        }
        else {
            for (let idss of lsAccounts) {
                if (idss.mail === username) {
                    if (idss.password === password) {
                        alert("Login success")
                    } 
                    else {
                        alert("entered password is wrong")
                    }
                }
            }
        }

        
    }
    e.preventDefault();

}) 





// sign up code 


document.getElementById("signupForm").addEventListener("submit", function(e) {
    let fullname = document.getElementById("fullname").value;
    let mailid = document.getElementById("mailId").value;
    let createdpassword = document.getElementById("createPassword").value; 
    let sconfirmpassword = document.getElementById("SConfirmPassword").value; 
    
     
    
    let sAccounts = getAccountsFromLocalStorage(); 
    if (sAccounts === null) {
        // add to local storage and print login
        if (createdpassword !== sconfirmpassword) {
            alert("enterd password doesnt matches please re-confirm the password"); 
            // replace alert with error para element in the html 
        }  
        else{
            
            
            addToLocalStorage(accounts, fullname, mailid, createdpassword);
            alert("account created succesfully") 
            // replace alert with para sucess element in the html 
        
        }
        
    }
    else {
        //if user email matches with the email in local storage print user exists 
        //else add user to local storage and print login 
        let count=0
        //console.log(sAccounts);
        for (let id of sAccounts) {
            if (id.mail === mailid) {
               count=count+1; 
            }
        } 
        if (count>0) {
            alert("user already exists")
        }
        
        else{
            
            addToLocalStorage(accounts, fullname, mailid, createdpassword) 
            alert("user created successfullyu")
        } 
       
        
        

    
    e.preventDefault();
}}) 


// forgot password 


