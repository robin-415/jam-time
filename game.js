// Global Variables
const instruIcons = document.querySelector('#allInstruments')
const instruButtons = document.querySelectorAll('.buttonImage')
const startButton = document.querySelector('.startGame')
const notifyMessage = document.querySelector('.message')
const roundDisplay = document.querySelector('#nums')
const randomNum = (Math.floor(Math.random() * 4) +1)

let keysAudio = document.getElementById('sounds0')
let guitarAudio = document.getElementById('sounds1')
let drumsAudio = document.getElementById('sounds2')
let bassAudio = document.getElementById('sounds3')

let roundNum = 0
let compSeq = []
let playerSeq = []
let gameSeq = []
let sound = true
let time = 0
let round = []

function game () {
  gameSeq = []
  playerSeq = []
  roundNum = 0
  active = true
  roundDisplay.innerText = '1'
  for (let i = 0; i < 10; i++) {
    gameSeq.push(randomNum)
  }
  time = setInterval(nextRound, 1000)
  }

function nextRound (){
  if (sound == round) {
    clearInterval(time)
    compSeq = false
    playerSeq = true
  }
  if (compSeq) {
    setTimeout(() => {
    clicks ()
      sound++
    }, 300)
  }
}

function clicks() {
if (keysAudio){
  sound = true
  document.getElementById('i0').style.borderColor = 'yellow'
}
if (guitarAudio){
  sound = true
  document.getElementById('i1').style.borderColor = 'yellow'
}
if (drumsAudio){
  sound = true
  document.getElementById('i2').style.borderColor = 'yellow'
}
if (bassAudio){
  sound = true
  document.getElementById('i3').style.borderColor = 'yellow'
}
}

function verifyRound () {
  if (playerSeq.length === compSeq.length) {
    notifyMessage.innerHTML = 'Winner!'
    if (playerSeq[playerSeq.length - 1] !== gameSeq[playSeq.length - 1])
    active = false
  }
}

// Game Over
// function gameOver () {
//   document.getElementById('message').innerHTML = 'Game Over!'
// }

// Event Listeners Here
startButton.addEventListener('click', (event) => {
  game()
  })


// instruButtons.addEventListener('click', (event) => {
//   playerSeq.push()
//   clicks()
//   verifyRound()
// }
// )
