const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let  firstPassword = []
let secondPassword = []
let password1EL = document.getElementById("password-1-el")

function getRandomString() {
    for (let i = 0; i < 16; i++) {
        let char = Math.floor(Math.random() * characters.length)
        firstPassword.push(characters[char])
        // secondPassword = Math.floor(Math.random() * characters.length)
        // console.log(firstPassword[i])
        password1EL.textContent = firstPassword
    }
    console.log(firstPassword)
    return firstPassword
    // password1EL.textContent = firstPassword
    // console.log({secondPassword})
}
// getRandomString()