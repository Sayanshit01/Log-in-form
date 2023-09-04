const title = document.getElementById('title');
const namefield = document.getElementById('nameField');
const signinBtn =document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');


signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    namefield.style.display ="block";
}
signinBtn.onclick = function(){
    title.innerHTML = "Log Up";
    namefield.style.display ="none";
}
