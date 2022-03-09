// Global Variables
const instruIcons = document.querySelector('#allInstruments')
const instruButton = document.querySelector('#buttonImage')
const startButton = document.querySelector('.startGame')
const notifyMessage = document.querySelector('.message')
const roundDisplay = document.querySelector('.rounds')

let roundNum = 0
let compSeq = []
let playerSeq = []

// Start Game
function startGame () {
    compSeq = []
    playerSeq = []
    roundNum = 0
    active = true
  }

// Increases Round Number Indicator
function roundNum () {
  roundNum +=1
  document.getElementById('rounds').innerHTML = roundNum
}

// Player Clicks
function clicks (e) {
  let playerClick = playerSeq()
  let compClick = $(e.target).instruButton
  active = (playerClick === compClick)
  verifyRound()
}

function verifyRound (){
  if (playerSeq.length === compSeq.length && active) {
    startGame()
   } else if (!active) {
      gameOver()
    }
  }

//Sequences
function gameSeq () {
  computerSeq.push(iconArray[Math.floor((Math.random() * 4) + 1)])
  }

 function nextSeq () {
  computerSeq.push(iconArray[Math.floor((Math.random() * 4) + 1)])
  roundNum ++
  playerSeq()
 }





 // EXTRAS //

  // const iconArray = [{'id':'micImage'}, {'id':'keysImage'}, {'id':'guitarImage'}, {'id':'drumsImage'}] 

  // Button Functions
  // function compRound (e) {
  //   switch (e) {
  //     case 1:
  //       setTimeout(function () {
  //         .removeEventListener('click')
  //       }, 1.5 * 1000)
  //       break
  //     case 2:
  //       setTimeout(function () {
  //         .removeEventListener('click')
  //       }, 1.5 * 1000)
  //       break
  //       case 3:
  //       setTimeout(function () {
  //         .removeEventListener('click')
  //       }, 1.5 * 1000)
  //       break
  //       case 4:
  //       setTimeout(function () {
  //         .removeEventListener('click')
  //       }, 1.5 * 1000)
  //       break
  //   }
  // }
//   
//   

// Event Listeners Here
const startGame = () => {
  startButton.addEventListener('click', startGame)
  instruIcons.addEventListener('click')
  }

// startGame()
  