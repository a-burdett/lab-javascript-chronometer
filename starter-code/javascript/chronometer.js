// Constructor
class Chronometer{
  constructor(){
  this.currentTime = 0
  this.intervalId = 0  
}
startClick(){
  var intervalId = setInterval(()=>{
   this.currentTime ++ 
    },1000)
  }

setMinutes(){
  var timeToMinutes = this.currentTime/60
  timeToMinutes = parseInt(timeToMinutes)
  if(timeToMinutes !== 0){
  return timeToMinutes}
  else{return 0}
}

setSeconds(){
return Math.floor(this.currentTime % 60)
}

//twoDigitsNumber 
twoDigitsNumber(value){
  if (value < 10){
    return ("0"+value)
  }
  return value.toString()
}

setTime(){
  var minutes = this.setMinutes()
  var seconds = this.setSeconds() 
  minutes.twoDigitsNumber()
  seconds.twoDigitsNumber()

}

}

// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
