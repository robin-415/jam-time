// Global Variables
const startButton = document.querySelector('.startGame')
const notifyMessage = document.querySelector('.message')
const roundDisplay = document.querySelector('#nums')
// const randomNum = (Math.floor(Math.random() * 4) +1)

const allInstruments = document.querySelectorAll('#allInstruments')
const keysButton = document.getElementById('i0')
const guitarButton = document.getElementById('i1')
const drumsButton = document.getElementById('i2')
const bassButton = document.getElementById('i3')

let keysAudio = document.getElementById('sounds0')
let guitarAudio = document.getElementById('sounds1')
let drumsAudio = document.getElementById('sounds2')
let bassAudio = document.getElementById('sounds3')

let roundNum = 0
let compSeq = []
let playerSeq = []
let gameSeq = []
let played = true
let time = 0
let round = []

// Game Functions - Initialize Game, Player, New Round, Verify
function game () {
  gameSeq = []
  playerSeq = []
  roundNum = 0
  roundDisplay.innerText = '1'
  randomSeq ()
  time = setInterval(newRound, 500)
  }

function randomSeq () {
  for (let i = 0; i < 20; i++) {
    gameSeq.push(Math.floor(Math.random() * 4) +1)
  }
}  
// Round Sequence
// function newRound () { 
  // game.roundNum += 1
//   $(`#allInstruments`).addClass
//   setTimeout(function(){
//   $(`#allinstruments`).removeClass
//   }, 300)
// }

// Player Turn

// Computer Turn
// function newRound() {
//   resetGame()
// }

// function createSeq (){
//   game.gameSeq.push(randomNum)
// 

function newRound (){
  if (played == round) {
    compSeq = false
    playerSeq = true
    clearInterval(time)
  }
  if (compSeq) {
      keys()
      guitar()
      drums()
      bass()
    }
  }

function verifyRound () {
if (playerSeq.length === compSeq.length) {
      notifyMessage.innerHTML = 'Winner!'
      if (playerSeq[playerSeq.length - 1] !== gameSeq[playerSeq.length - 1])
      played = false
    }
  }
  

// function resetGame() {
//   game.gameSeq = []
//   game.roundNum = 0
//   playRound()
// }

// Button Functions - Audio, Border Color
function keys() {
  if (played) {
  keysButton.style.borderColor = 'yellow'
  played = true
  keysAudio.play()
  }
  setTimeout(300)
}

function guitar() {
  if (played) {
  guitarButton.style.borderColor = 'yellow'
  played = true
  guitarAudio.play()
  }
  setTimeout(300)
}

function drums() {
  if (played) {
  drumsButton.style.borderColor = 'yellow'
  played = true
  drumsAudio.play()
  }
  setTimeout(300)
}
function bass() {
  if (played) {
  bassButton.style.borderColor = 'yellow'
  played = true
  bassAudio.play()
  }
  setTimeout(300)
}


// Game Over
// function gameOver () {
//   document.getElementById('message').innerHTML = 'Game Over!'
// }

// Event Listeners Here
startButton.addEventListener('click', (event) => {
  game()
  })
