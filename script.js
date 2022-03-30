generateEl = document.getElementById("generate-el")

let randomString1 = document.getElementById("rectangle1")
let randomString2 = document.getElementById("rectangle2")
let randomString3 = document.getElementById("rectangle3")
let randomString4 = document.getElementById("rectangle4")

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"

let length = 15

function generatePassword1(){
    randomString1.textContent = ""
    
    for ( let i = 0; i < length; i++) {
        randomNum = Math.floor(Math.random()*characters.length)
        randomString1.textContent += characters[randomNum]
    }
}

function generatePassword2(){
    randomString2.textContent = ""
    
    for ( let i = 0; i < length; i++) {
        randomNum = Math.floor(Math.random()*characters.length)
        randomString2.textContent += characters[randomNum]
    }
}

function generatePassword3(){
    randomString3.textContent = ""

    for (let i = 0; i < length; i++) {
        randomNum = Math.floor(Math.random()*characters.length)
        randomString3.textContent += characters[randomNum]
    }
}

function generatePassword4() {
    randomString4.textContent = ""

    for (let i = 0; i < length; i++) {
        randomNum = Math.floor(Math.random()*characters.length)
        randomString4.textContent += characters[randomNum]
    }
}