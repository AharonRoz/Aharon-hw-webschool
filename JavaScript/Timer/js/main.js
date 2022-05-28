// const T = {
//   int: null,
//   mili: 0,
//   sec: 0,
//   min: 0,
//   hour: 0,
//   start: function () {
//     B.start.removeEventListener("click", T.start);
//     T.int = setInterval(function () {
//       T.mili+=10;
//       $.mili.innerHTML = T.mili;
//     }, 100);
//   },
//   stop: function () {
//     clearInterval(T.int);
//     B.start.addEventListener("click", T.start);
//   },
//   reset: function () {},
// };

// const $ = {
//   mili: document.querySelector("#mili"),
//   sec: document.querySelector("#seconds"),
//   min: document.querySelector("#minutes"),
//   hour: document.querySelector("#hours"),
// };

// const B = {
//   start: document.querySelector("#start"),
//   stop: document.querySelector("#stop"),
//   reset: document.querySelector("#reset"),
// };

// B.start.addEventListener("click", T.start);
// B.stop.addEventListener("click", T.stop);



var main = document.getElementById("main")
var start = document.getElementById("start");
var stopp = document.getElementById("stop");
var reset = document.getElementById("reset");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var mili = document.getElementById("mili");

start.addEventListener("click", startime);
function startime() {
  // main.innerHTML=`<button style="width: 150px; height: 50px; background-color: green;" id="start">start</button>
  // <button style="width: 150px; height: 50px; background-color: red;" id="stop">stop</button>
  // <button style="width: 150px; height: 50px; background-color: blue;" id="reset">reset</button>
  // <p><i id="hours">${hours.innerText}</i>:<i id="minutes">${minutes.innerText}</i>:<i id="seconds">${seconds.innerText}</i>:<i id="m">${mili.innerText}</i></p>`
  setInterval(add, 10);
}

stopp.addEventListener("click", stoptime);
function stoptime() {
  main.innerHTML=`<button style="width: 150px; height: 50px; background-color: green;" id="start">start</button>
  <button style="width: 150px; height: 50px; background-color: red;" id="s">stop</button>
  <button style="width: 150px; height: 50px; background-color: blue;" id="r">reset</button>
  <p><i id="hours">${hours.innerText}</i>:<i id="minutes">${minutes.innerText}</i>:<i id="seconds">${seconds.innerText}</i>:<i id="m">${mili.innerText}</i></p>`;
}

reset.addEventListener("click", resett);
function resett() {
  mili.innerText=`00`
  seconds.innerText=`00`
  minutes.innerText=`00`
  hours.innerText=`00`
}

function add() {
if (parseInt(mili.innerText)>99) {
  mili.innerText=0
 seconds.innerText=parseInt(seconds.innerText) + 1
}else if (parseInt(seconds.innerText)>59) {
  seconds.innerText=0
  minutes.innerText=parseInt(minutes.innerText)+1
}else if (parseInt(minutes.innerText)>59) {
  minutes.innerText=0
  hours.innerText=parseInt(hours.innerText)+1
}else mili.innerText=parseInt(mili.innerText) + 1}

