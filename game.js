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
    computerSeq() //call computer sequence 
  }

  function gameSeq () {
    const buttonArray = ['0', '1', '2', '3']  // find the length of the computerSeq.length 
    const randomButton = buttonArray[Math.floor(Math.random() * buttonArray.length)] // find a random button from the instrument buttons array 
    
    randomButton.push(computerSeq())// push random button into computerSeq array

    // play all buttons in computer sequence array
    playerSeq () // players turn
    
    if (playerSeq.length === computerSeq.length) {
      nextSeq ()
    }
  // listen for player input, push into player sequence array
  // when player sequence array is the same as computer sequence array check for winner

function computerSeq () {
  const gameSeq = randomButton.push(computerSeq())
  roundNum +=1
}

// function playerSeq (){
//  const playerClick = 
// }

// function nextSeq (){

// }

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

// Verify Round (Loss)
// function verifyRound (){
//   if (playerSeq.length === compSeq.length && active) {
//     startGame()
//   } else if (!active) {
//       gameOver()
//     }
//   }

// Game Over
// function gameOver () {
//   document.getElementById('message').innerHTML = 'Game Over!'
// }

// Event Listeners Here
const startGame = () => {
  startButton.addEventListener('click', gameSeq)
  }


 // EXTRAS //
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
  }