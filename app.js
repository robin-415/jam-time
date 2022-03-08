// Global Variables
const instruIcons = document.querySelector('#allInstruments')
const instruButton = document.querySelector('#buttonImage')
const startButton = document.querySelector('.startGame')

let computer =[]
let player =[]
let round = 0

let musicSequence = Math.floor((Math.random() * 4) + 1)
console.log(musicSequence)






// Event Listeners Here
const startGame = () => {
  startButton.addEventListener('click', startGame)
  }
