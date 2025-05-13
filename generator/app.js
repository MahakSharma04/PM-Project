const passwordbox = document.getElementById("password");
const length = 15;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*?";

const allchars = uppercase+lowercase+numbers+symbols;

function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*26)];
    password += lowercase[Math.floor(Math.random()*26)];
    password += numbers[Math.floor(Math.random()*10)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    while(length > password.length){
        password += allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordbox.value = password;
}

document.querySelector("#btn").addEventListener("click",createpassword);

function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
}

let copyimg = document.querySelector("#copyimg");

copyimg.addEventListener("click",copypassword);