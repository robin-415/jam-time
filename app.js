// Global Variables
const instruIcons = document.querySelector('#allInstruments')
const instruButton = document.querySelector('#buttonImage')
const startButton = document.querySelector('.startGame')

let round = 0

// Increases Round Indicator
instruIcons.onclick = function () {
  round +=1
  document.getElementById('rounds').innerHTML = round
}

// Computer Round
const iconArray = [{'id':'micImage'}, {'id':'keysImage'}, {'id':'guitarImage'}, {'id':'drumsImage'}] 

computerSeq = []
function sequence () {computerSeq.push(iconArray[Math.floor((Math.random() * 4) + 1)])}
console.log(computerSeq)

// run loop to compare to arrays

// Player Round
function playerRound () {

}

// const beginRound = function () {
  let musicSequence = Math.floor((Math.random() * 4) + 1)
  console.log(musicSequence)

// Event Listeners Here
const startGame = () => {
  startButton.addEventListener('click', startGame)
  }
  // window.onload = startGame

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