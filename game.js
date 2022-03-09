// Global Variables
const instruIcons = document.querySelector('#allInstruments')
const instruButtons = document.querySelectorAll('.buttonImage')
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
    // call computer sequence 
  }

// Increases Round Number Indicator
function roundNum () {
  roundNum +=1
  document.getElementById('rounds').innerHTML = roundNum
}

// Player Clicks
function clicks (e) {
  let playerClick = playerSeq()
  // let compClick = $(e.target).instruButton targeting an array
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
  // find the length of the computerSeq.length 
  // find a random button from the instrument buttons array
  // push random button into computerSeq array
  // play all buttons in computer sequence array
 // players turn
 // listen for player input, push into player sequence array
 // when player sequence array is the same as computer sequence array check for winner
  computerSeq.push(iconArray[Math.floor((Math.random() * 4) + 1)])
  }

function nextSeq () {
  computerSeq.push(iconArray[Math.floor((Math.random() * 4) + 1)])
  roundNum ++
  playerSeq()
}

// Game Over
function gameOver () {
  document.getElementById('message').innerHTML = 'Game Over!'
}

// Event Listeners Here
const startGame = () => {
  startButton.addEventListener('click', startGame)
  instruIcons.addEventListener('click')
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



// startGame()
  