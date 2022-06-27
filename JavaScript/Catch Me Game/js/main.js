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
  <div class="f1" style="padding: 3px 0 0 5px;"><b style="color: green;" id="first"></b><span id="first1" style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);"></span></div>
  <div class="f2" style="padding: 6px 0 0 5px;"><b style="color: green;" id="second"></b><span id="second1" style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);"></span></div>
  <div class="f3" style="padding: 6px 0 0 5px;"><b style="color: green;" id="third"></b><span id="third1" style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);"></span></div>
  <div class="f4" style="padding: 7px 0 0 5px;"><b style="color: green;" id="fourth"></b><span id="fourth1" style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);"></span></div>
  <div class="f5" style="padding: 6px 0 0 5px;"><b style="color: green;" id="fifth"></b><span id="fifth1" style="margin-top:-20%; padding: 0 5px; position: absolute; color: darkgoldenrod; background-color: black; border: 2px solid rgb(192, 107, 107);"></span></div>
</p></div>
</div>`;

var clicks = document.getElementById("clicks");
var score = document.getElementById("score");
var lavel = document.getElementById("lavel");
var miss = document.getElementById("miss");
var timer = document.getElementById("timer");
var first1 = document.getElementById("first1");
var second1 = document.getElementById("second1");
var third1 = document.getElementById("third1");
var fourth1 = document.getElementById("fourth1");
var fifth1 = document.getElementById("fifth1");
var gStatus = "off";
var spin1 = 2.25;
var pop = 350;

const players = [
  {
    score: "1",
    fName: "Fifth",
    lName: "Test",
    scoreT: `${new Date(Date.now())}`,
  },
  {
    score: "2",
    fName: "Fourth",
    lName: "Test",
    scoreT: `${new Date(Date.now() - 200000)}`,
  },
  {
    score: "3",
    fName: "Third",
    lName: "Test",
    scoreT: `${new Date(Date.now() - 250000)}`,
  },
  {
    score: "4",
    fName: "Second",
    lName: "Test",
    scoreT: `${new Date(Date.now() - 350000)}`,
  },
  {
    score: "5",
    fName: "First",
    lName: "Test",
    scoreT: `${new Date(Date.now() - 450000)}`,
  },
];

var sortPlayers = players;

sortPlayers.sort((a, b) => {
  return a.score - b.score;
});
sortPlayers.reverse();
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
  if (gStatus == "on") {
    miss.innerText = parseInt(miss.innerText) + 1;
    score.innerText = parseInt(score.innerText) - parseInt(lavel.innerText) * 1;
  }
}

function plusClick(e) {
  if (gStatus == "on") {
    clicks.innerText = parseInt(clicks.innerText) - 1;
    score.innerText =
      parseInt(score.innerText) + parseInt(lavel.innerText) * 10;
    if (clicks.innerText < 1) {
      lavel.innerText = parseInt(lavel.innerText) + 1;
      clicks.innerText = 10;
      timer.innerText = parseInt(timer.innerText) + 10;
    }
    if (lavel.innerText == 6) {
      endG();
    }
    e.stopPropagation();
  }
}

function endG() {
  gStatus = "off";
  document.getElementById("btn").style.animationName = "";
  document.getElementById("btn").style.top = 0;
  document.getElementById("btn").style.left = 0;
  alert("Your score: " + score.innerText);
  if (score.innerText > sortPlayers[4].score) {
    toappend(
      score.innerText,
      prompt(
        "Congratulations, you're one of the top five! \n" +
          "Please enter your full name"
      ),
      new Date(Date.now())
    );
    newG();
    var pData = JSON.stringify(
      `${(first1.innerText = players[0].scoreT)}; ${(second1.innerText =
        players[1].scoreT)}; ${(third1.innerText =
        players[2].scoreT)}; ${(fourth1.innerText =
        players[3].scoreT)}; ${(fifth1.innerText = players[4].scoreT)};`
    );
    var pData = JSON.stringify(sortPlayers);
    localStorage.setItem("High Scores", pData);
  }
  newG();
}

function timer1() {
  if (gStatus == "on") {
    timer.innerText = parseInt(timer.innerText) - 1;
    if (timer.innerText < 1) {
      clearInterval(gTimer1);
      timer.innerText = 0;
      gStatus = "off";
      document.getElementById("btn").style.animationName = "";
      endG();
    }
  }
}

var gTimer1 = setInterval(timer1, 1000);

document.getElementById("screen").addEventListener("click", minusClick);
document.getElementById("btn").addEventListener("click", plusClick);
document.getElementById("btn").addEventListener("click", spin);
document.getElementById("btn").addEventListener("mouseover", change1);
document.getElementById("up").addEventListener("click", function () {
  gStatus = "on";
  spiner();
  spin();
});
document.getElementById("up").addEventListener("mouseover", function () {
  document.getElementById("uv").style.display = "none";
  document.getElementById("v").style.display = "";
});

document.getElementById("up").addEventListener("mouseout", function () {
  document.getElementById("uv").style.display = "";
  document.getElementById("v").style.display = "none";
});

function spiner() {
  document.getElementById("btn").style.animationName = "c";
  document.getElementById("btn").style.animationDuration = `${spin1}s`;
  document.getElementById("btn").style.animationIterationCount = "infinite";
}
function spin() {
  if (clicks.innerText == 10 && gStatus == "on") {
    spin1 -= 0.25;
    pop -= 50;
    document.getElementById("btn").style.animationDuration = `${spin1}s`;
  }
}
function timmm() {
  document.getElementById("btn").style.top = `${Math.floor(
    Math.random() * 94 + 1
  )}%`;
  document.getElementById("btn").style.left = `${Math.floor(
    Math.random() * 83 + 1
  )}%`;
}
function change1() {
  if (gStatus == "on") {
    setTimeout(timmm, pop);
  }
}

function newG() {
  gStatus = "off";
  spin1 = 2.25;
  pop = 350;
  clicks.innerText = 10;
  score.innerText = 0;
  lavel.innerText = 1;
  miss.innerText = 0;
  timer.innerText = 60;
  gTimer1 = setInterval(timer1, 1000);
}

function toappend(score, fName, scoreT) {
  var pDate =
    scoreT.getDate() +
    "/" +
    `${scoreT.getMonth() + 1}` +
    "/" +
    `${scoreT.getYear() - 100 + 2000}`;
  players.push({ score: score, fName: fName, lName: "", scoreT: pDate });
  sortPlayers1();
}

function sortPlayers1() {
  sortPlayers.sort((a, b) => {
    return a.score - b.score;
  });
  sortPlayers.reverse();
  first.innerText = `${sortPlayers[0].score} - ${sortPlayers[0].fName} ${sortPlayers[0].lName}`;
  second.innerText = `${sortPlayers[1].score} - ${sortPlayers[1].fName} ${sortPlayers[1].lName}`;
  third.innerText = `${sortPlayers[2].score} - ${sortPlayers[2].fName} ${sortPlayers[2].lName}`;
  fourth.innerText = `${sortPlayers[3].score} - ${sortPlayers[3].fName} ${sortPlayers[3].lName}`;
  fifth.innerText = `${sortPlayers[4].score} - ${sortPlayers[4].fName} ${sortPlayers[4].lName}`;
}

first1.innerText = players[0].scoreT;
second1.innerText = players[1].scoreT;
third1.innerText = players[2].scoreT;
fourth1.innerText = players[3].scoreT;
fifth1.innerText = players[4].scoreT;

var parObj=JSON.parse(localStorage.getItem("High Scores"))

first1.innerText = parObj[0].scoreT;
second1.innerText = parObj[1].scoreT;
third1.innerText = parObj[2].scoreT;
fourth1.innerText = parObj[3].scoreT;
fifth1.innerText = parObj[4].scoreT;
first.innerText = `${parObj[0].score} - ${parObj[0].fName} ${parObj[0].lName}`;
second.innerText = `${parObj[1].score} - ${parObj[1].fName} ${parObj[1].lName}`;
third.innerText = `${parObj[2].score} - ${parObj[2].fName} ${parObj[2].lName}`;
fourth.innerText = `${parObj[3].score} - ${parObj[3].fName} ${parObj[3].lName}`;
fifth.innerText = `${parObj[4].score} - ${parObj[4].fName} ${parObj[4].lName}`;