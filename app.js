// Global Variables
const instruIcons = document.querySelector('#allInstruments')
const instruButton = document.querySelector('#buttonImage')
const startButton = document.querySelector('.startGame')

let computer =[]
let player =[]


for (let i=0; i < 4; i++) {
  
}




// Event Listeners Here
// const pressButtons = () => {

// }
const startGame = () => {
  instruIcons.forEach((instruButton) => {
    instruButton.addEventListener('click', clicked)
  })
}