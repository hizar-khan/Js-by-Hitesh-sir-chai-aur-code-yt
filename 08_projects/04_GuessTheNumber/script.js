//how to generate random number

let randNum = parseInt(Math.random() * 100 + 1);

const sbmtBtn = document.querySelector("#subt");
const userInpt = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    sbmtBtn.addEventListener('click', (e) =>{
        e.preventDefault();
       const guess = parseInt(userInpt.value)
       console.log(guess);
       validateGuess(guess)
    } )
}

function validateGuess(guess){
 if (isNaN(guess)) {
    alert('please enter a valid number')
 }
 else if(guess < 1){
    alert('please enter a number greater than 0')
 }
 else if(guess > 100){
    alert('please enter a number less than 100')
 }
 else{
    prevGuess.push(guess)
    if (numGuess  === 11) {
        displyGuess(guess)
        displyMessage(`Game Over , Random number was ${randNum}`)
        endGame()
    }
    else{
        displyGuess(guess)
        checkGuess(guess)

    }
 }
}

function checkGuess(guess){
    if (guess === randNum) {
        displyMessage("You guested it right")
        endGame()
        
    } else if (guess < randNum) {
         displyMessage("Number is Too low")
    }else if (guess > randNum) {
        displyMessage("Number is Too high")
   }

}
function displyGuess(guess){
    userInpt.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remining.innerHTML =  `${11 - numGuess}`

}

function displyMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInpt.value = ''
    userInpt.setAttribute('disable', '')
    p.classList.add('button')
    p.innerHTML = `<h2id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click', (e) => {
        randNum  = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remining.innerHTML =  `${11 - numGuess}`
        userInpt.removeAttribute('disable')
        startOver.removeChild(p)
        playGame = true
    })

}






