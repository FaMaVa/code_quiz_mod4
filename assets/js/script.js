var correct = 0
var incorrect = 0
var timeEl = document.getElementById("timer");
var start = document.getElementById("start");
var end = document.getElementById("finish");
var result = document.getElementById("result");
var startBtn = document.getElementById("startbtn");
var multQuiz = document.getElementById("quiz");
var question = document.getElementById("question");
var firstBtn = document.getElementById("onebtn");
var secondBtn = document.getElementById("twobtn");
var thirdBtn = document.getElementById("threebtn");
var fourthBtn = document.getElementById("fourbtn");
var finalScore = document.getElementById("finalscore");
var done = false; 
var scores = []


startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", quiz);

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || done == true) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    };

  }, 1000);
};


var finish = function () {
  multQuiz.setAttribute("style", "display: none");
  end.setAttribute("style", "display");
};


function quiz() {

  var qFive = function () {
    question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    firstBtn.textContent = "1. JavaScript";
    secondBtn.textContent = "2. terminal/bash";
    thirdBtn.textContent = "3. for loops";
    fourthBtn.textContent = "4. console.log";
    firstBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      done = true;
      finish();
    };
    secondBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      done = true;
      finish();
    };
    thirdBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      done = true;
      finish();
    };
    fourthBtn.onclick = function () {
      result.textContent = "Correct!";
      done = true;
      finish();
    };
  };

  var qFour = function () {
    question.textContent = "String values must be enclosed within _______ when being assigned to variables.";
    firstBtn.textContent = "1. commas";
    secondBtn.textContent = "2. curly brackets";
    thirdBtn.textContent = "3. quotes";
    fourthBtn.textContent = "4. parenthesis";
    firstBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qFive();
    };
    secondBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qFive();
    };
    thirdBtn.onclick = function () {
      result.textContent = "Correct!";
      qFive();
    };
    fourthBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qFive();
    };
  };

  var qThree = function () {
    question.textContent = "Arrays in JavaScript can be used to store _______.";
    firstBtn.textContent = "1. numbers and strings";
    secondBtn.textContent = "2. other arrays";
    thirdBtn.textContent = "3. booleans";
    fourthBtn.textContent = "4. all of the above";
    firstBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qFour();
    };
    secondBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qFour();
    };
    thirdBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qFour();
    };
    fourthBtn.onclick = function () {
      result.textContent = "Correct!";
      qFour();
    };
  };

  var qTwo = function () {
    question.textContent = "The condition in an if / else statement is enclosed with _______.";
    firstBtn.textContent = "1. quotes";
    secondBtn.textContent = "2. curly brackets";
    thirdBtn.textContent = "3. parenthesis";
    fourthBtn.textContent = "4. square brackets";
    firstBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qThree();
    };
    secondBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qThree();
    };
    thirdBtn.onclick = function () {
      result.textContent = "Correct!";
      qThree();
    };
    fourthBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qThree();
    };
  };

  var qOne = function () {
    start.setAttribute("style", "display: none");
    multQuiz.setAttribute("style", "display");
    question.textContent = "Commonly used data types DO not include:";
    firstBtn.textContent = "1. strings";
    secondBtn.textContent = "2. booleans";
    thirdBtn.textContent = "3. alerts";
    fourthBtn.textContent = "4. numbers";
    firstBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qTwo();
    };
    secondBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qTwo();
    };
    thirdBtn.onclick = function () {
      result.textContent = "Correct!";
      qTwo();
    };
    fourthBtn.onclick = function () {
      result.textContent = "Wrong!";
      secondsLeft -= 10;
      qTwo();
    };
  };

  qOne();

};


var scoreInput = document.querySelector("#initials");
var scoreForm = document.querySelector("#submit");
var scoreList = document.querySelector("#scorelist");
var submitBtn = document.querySelector("#submitbtn");
var scores = [];

function renderScores () {
  var storedscores = JSON.parse(localStorage.getItem("scores"));
  if (storedscores !== null) {
    scores = storedscores;
  };
  scoreList.innerHTML = "";
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute = ("data-index", i);
    scoreList.appendChild(li);
  };
};

function init () {
  renderScores ();
  done = false;
};

function storeScores () {
  var scoreText = scoreInput.value.trim();
  if (scoreText == "") {
    return;
  }
  scores.push(scoreText);

  localStorage.setItem("scores", JSON.stringify(scores));
};

submitBtn.addEventListener ("click", button);

function button () {
  storeScores ();
  renderScores ();
;}

init ();