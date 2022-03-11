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
let round = 0

// Game Functions - Initialize Game, Player, New Round, Verify
function game () {
  gameSeq = []
  playerSeq = []
  roundNum = 0
  roundDisplay.innerText = '1'
  randomSeq ()
  newRound()
  // time = setInterval(newRound, 500)
  }

function randomSeq () {
    for (let i = 0; i < 20; i++) {
      gameSeq.push(Math.floor(Math.random() * 4) +1)
    }
  }  

  // Computer - Set Timeout Function to toggle (repeat) in/out of class, simulates one second press (once), loop over the array, next loop toggle class & settimeout, in between each iteration
  function newRound (){
    if (played == round) {
      compSeq = false
      playerSeq = true
      // clearInterval(time)
    }
    if (compSeq) {
        keys()
        guitar()
        drums()
        bass()
      }
      setTimeout(newRound,500)
    }
// function computerRound () {
//   if (round > 0) {
//     for (let i = 0; i < compSeq.length; i++) {
//       if (compSeq[i] === 1){
//         $('#i0').addClass('tap')
//         setTimeout(function () {
//           $('#i0').removeClass('tap')
//         }, 200)
//       }
//     } else if (compSeq[i] === 2){
//       $('#i0').addClass('tap')
//       setTimeout(function () {
//         $('#i0').removeClass('tap')
//       }, 200)
//     } else if (compSeq[i] === 3){
//     $('#i0').addClass('tap')
//     setTimeout(function () {
//       $('#i0').removeClass('tap')
//     }, 200)
//     } else if (compSeq[i] === 4){
//     $('#i0').addClass('tap')
//     setTimeout(function () {
//       $('#i0').removeClass('tap')
//     }, 200)
//     }
//   }
// }

function verifyRound () {
  if (playerSeq.length === compSeq.length) {
        notifyMessage.innerHTML = 'Winner!'
        if (playerSeq[playerSeq.length - 1] !== gameSeq[playerSeq.length - 1])
        played = false
      }
    }

// Player Round
// user capturing button presses - pushing into the player's array, Compare to computer's array
  

// function resetGame() {
//   game.gameSeq = []
//   game.roundNum = 0
//   playRound()
// }

// Button Functions - Audio, Border Color
function keys() {
  if (played) {
  keysButton.style.borderColor = 'yellow'
  keysButton.classList.toggle('.tap')
  played = true
  keysAudio.play()
  }
  setTimeout(keys, 200)
}

function guitar() {
  if (played) {
  guitarButton.style.borderColor = 'yellow'
  keysButton.classList.toggle('.tap')
  played = true
  guitarAudio.play()
  }
  setTimeout(guitar, 200)

}

function drums() {
  if (played) {
  drumsButton.style.borderColor = 'yellow'
  keysButton.classList.toggle('.tap')
  played = true
  drumsAudio.play()
  }
  setTimeout(drums, 200)
}
function bass() {
  if (played) {
  bassButton.style.borderColor = 'yellow'
  keysButton.classList.toggle('.tap')
  played = true
  bassAudio.play()
  }
  setTimeout(bass, 200)
}


// Game Over
// function gameOver () {
//   document.getElementById('message').innerHTML = 'Game Over!'
// }

// Event Listeners Here
startButton.addEventListener('click', (event) => {
  game()
  })

