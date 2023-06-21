const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwdBtn = document.getElementById('passwd-btn')
let password1Par = document.getElementById('password1')
let password2Par = document.getElementById('password2')
let passwordOne = ""
let passwordTwo = ""
let copyP1 = document.getElementById('copy-p1')
let copyP2 = document.getElementById('copy-p2')

passwdBtn.addEventListener("click", function() {           
    passwordOne = ""  // reset the first password to null
    passwordTwo = ""  // reset the 2nd password to null
    copyP1.textContent = ""
    copyP2.textContent = ""
        
    for (let i = 0; i < 15; i++) {
        passwordOne += getCharacter()       
        passwordTwo += getCharacter()
    }
    password1Par.textContent = passwordOne + " 📋"  
    password2Par.textContent = passwordTwo + " 📋"
})   

password1Par.addEventListener("click", function() {
    if (password1Par.textContent.length > 0) {
    let copyText = passwordOne;
    navigator.clipboard.writeText(copyText);
    copyP1.textContent = "Password copied to clipboard."
    }
})

password2Par.addEventListener("click", function() {
    if (password2Par.textContent.length > 0) {
    let copyText = passwordOne;
    navigator.clipboard.writeText(copyText);
    copyP2.textContent = "Password copied to clipboard."
    }
})
 function getCharacter() {
    let index = Math.floor(Math.random() * characters.length)
    return characters[index]
 }