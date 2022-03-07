// Global Variables
const instrumentIcons = document.querySelector('#instruments')
const instrumentButton = document.querySelector('.insButton')

let computer =[]
let player =[]


// Event Listeners Here
const startGame = () => {
  instrumentIcons.forEach((instrumentButton) => {
    instrumentButton.addEventListener('click', clicked)
  })
}