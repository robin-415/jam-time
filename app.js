// Global Variables
const instruIcons = document.querySelector('#allInstruments')
const instruButton = document.querySelector('#buttonImage')
const startButton = document.querySelector('.startGame')
// const levelText = document.querySelector('h2')

let computer =''
let player =''
let round = 0

instruIcons.onclick = function () {
  round +=1
  document.getElementById('rounds').innerHTML = round
}
// Music Sequence
// let musicSequence = Math.floor((Math.random() * 4) + 1)
// console.log(musicSequence)

// Event Listeners Here
const startGame = () => {
  startButton.addEventListener('click', startGame)
  }

startGame()

// Timeout Function or Remove Event Listener?
// const iconArray = ['micImage', 'keysImage', 'guitarImage', 'drumsImage'] - not sure if I can call this an array?
// iconArray.time = function (property) {
//   console.log(arguments.length > 0 ? this[property] : this)
// }
// setTimeout(iconArray.method, 1.5*1000, '1')
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

// Notify player Win/Loss
// function notify (){
// }

// Audio Files for Instruments
// https://www.delftstack.com/howto/javascript/play-audio-javascript/
// https://www.w3schools.com/jsref/met_audio_play.asp