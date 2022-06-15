main = document.querySelector("main");
main.innerHTML = `<button id="up" style="color: purple; align-items: center;">
<span id="uv" style="background-color:yellowgreen;"><b>CATCH ME IF YOU CAN!</b></span>
<span id="v" style="background-color:yellowgreen;"><b>Click to Start</b></span>
</button>
<div id="screen">
<button id="btn">Click Me!</button>
</div>
<div id="side">
<div class="boxx"><span style="padding: 5px;">Score:</span><br><b style="color: green;"><p id="score">0</p></b></div>
<div class="boxx" style="z-index: 1;"><span style="padding: 5px;">Points to Next Lavel:</span><br><b style="color: green;"><p id="clicks">10</p></b></div>
<div class="boxx"><span style="padding: 5px;">Lavel:</span><br><b style="color: green;"><p id="lavel">1</p></b></div>
<div class="boxx"><span style="padding: 5px;">Missing Clicks:</span><br><b style="color: green;"><p id="miss">0</p></b></div>
<div class="boxx"><span style="padding: 5px;">Timer:</span><br><b style="color: green;"><p id="timer">60</p></b></div>
<div class="boxx2"><p style="padding:5px 0 0 5px; margin: 0; line-height: 3.3vh;">High Scores:
  <div class="f1" style="padding: 3px 0 0 5px;"><b style="color: green;" id="first"></b><span style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);">${new Date(Date.now()-450000)}</span></div>
  <div class="f2" style="padding: 6px 0 0 5px;"><b style="color: green;" id="second"></b><span style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);">${new Date(Date.now()-350000)}</span></div>
  <div class="f3" style="padding: 6px 0 0 5px;"><b style="color: green;" id="third"></b><span style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);">${new Date(Date.now()-250000)}</span></div>
  <div class="f4" style="padding: 7px 0 0 5px;"><b style="color: green;" id="fourth"></b><span style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);">${new Date(Date.now()-200000)}</span></div>
  <div class="f5" style="padding: 6px 0 0 5px;"><b style="color: green;" id="fifth"></b><span style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);">${new Date(Date.now())}</span></div>
</p></div>
</div>`;

var clicks = document.getElementById("clicks");
var score = document.getElementById("score");
var lavel = document.getElementById("lavel");
var miss = document.getElementById("miss");
var timer = document.getElementById("timer");
const players = [
  { score: "1", fName: "Fifth", lName: "Test", scoreT: `${new Date(Date.now())}` },
  { score: "2", fName: "Fourth", lName: "Test", scoreT: `${new Date(Date.now()-200000)}` },
  { score: "3", fName: "Third", lName: "Test", scoreT: `${new Date(Date.now()-250000)}` },
  { score: "4", fName: "Second", lName: "Test", scoreT: `${new Date(Date.now()-350000)}` },
  { score: "5", fName: "First", lName: "Test", scoreT: `${new Date(Date.now()-450000)}` },
];
const player = { score: "", fName: "", lName:"", scoreT:"" };

var sortPlayers = players.reverse((a, b) => {
  return a.score - b.score;
});
var first = document.getElementById("first");
first.innerText = `${sortPlayers[0].score} - ${sortPlayers[0].fName} ${sortPlayers[0].lName}`;
var second = document.getElementById("second");
second.innerText = `${sortPlayers[1].score} - ${sortPlayers[1].fName} ${sortPlayers[1].lName}`;
var third = document.getElementById("third");
third.innerText = `${sortPlayers[2].score} - ${sortPlayers[2].fName} ${sortPlayers[2].lName}`;
var fourth = document.getElementById("fourth");
fourth.innerText = `${sortPlayers[3].score} - ${sortPlayers[3].fName} ${sortPlayers[3].lName}`;
var fifth = document.getElementById("fifth");
fifth.innerText = `${sortPlayers[4].score} - ${sortPlayers[4].fName} ${sortPlayers[4].lName}`;

function minusClick() {
  miss.innerText = parseInt(miss.innerText) + 1;
  score.innerText = parseInt(score.innerText) - parseInt(lavel.innerText) * 1;
}

function plusClick(e) {
  clicks.innerText = parseInt(clicks.innerText) - 1;
  score.innerText = parseInt(score.innerText) + parseInt(lavel.innerText) * 10;
  if (clicks.innerText < 1) {
    lavel.innerText = parseInt(lavel.innerText) + 1;
    clicks.innerText = 10;
    timer.innerText = parseInt(timer.innerText) + 10;
  }
  // if (lavel.innerText ==5) {
  //     function win(params) {

  //     }
  // }
  e.stopPropagation();
}

function timer1() {
  timer.innerText = parseInt(timer.innerText) - 1;
  if (timer.innerText < 1) {
    clearInterval(timer1);
    timer.innerText = 0;
    // function gOver(){}
  }
}

setInterval(timer1, 1000);

document.getElementById("screen").addEventListener("click", minusClick);
document.getElementById("btn").addEventListener("click", plusClick);

document.getElementById("up").addEventListener("mouseover", function () {
  document.getElementById("uv").style.display = "none";
  document.getElementById("v").style.display = "";
});

document.getElementById("up").addEventListener("mouseout", function () {
  document.getElementById("uv").style.display = "";
  document.getElementById("v").style.display = "none";
});
