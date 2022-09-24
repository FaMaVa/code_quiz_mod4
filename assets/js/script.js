//Grabbing Elements from the DOM
var timeEl = document.getElementById("timer");
var start = document.getElementById("start");
var enterInitials = document.getElementById("finish");
var result = document.getElementById("result");
var board = document.getElementById("highscores");
var startBtn = document.getElementById("startbtn");
var multQuiz = document.getElementById("quiz");
var question = document.getElementById("question");
var firstBtn = document.getElementById("onebtn");
var secondBtn = document.getElementById("twobtn");
var thirdBtn = document.getElementById("threebtn");
var fourthBtn = document.getElementById("fourbtn");
var idk = document.getElementById("finalscore");
var clearBtn = document.getElementById("clearbtn");
var initialsInput = document.getElementById("initials");
var scoreList = document.getElementById("scorelist");
var submitBtn = document.getElementById("submitbtn");
var gotbackBtn = document.getElementById("gobackbtn");
var gotbackBtn2 = document.getElementById("gobackbtn2");

//Creating Variables
var secondsLeft = 0;
var done = false; 

//Event Listeners for buttons
startBtn.addEventListener("click", quiz);
submitBtn.addEventListener ("click", storeScore);

gotbackBtn.addEventListener ("click", function (event) {
  event.preventDefault();
  board.setAttribute("style", "display: none");
  start.setAttribute("style", "display");
});

gotbackBtn2.addEventListener ("click", function (event) {
  event.preventDefault();
  lost.setAttribute("style", "display: none");
  start.setAttribute("style", "display");
});

clearBtn.addEventListener ("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  scoreList.textContent = " ";
});

document.addEventListener("click", function(event) {  
  var link = event.target;
  if (link.matches("a")) { 
    start.setAttribute("style", "display: none");
    lost.setAttribute("style", "display: none");
    multQuiz.setAttribute("style", "display: none");
    enterInitials.setAttribute("style", "display: none");
    board.setAttribute("style", "display");
  }
});

// Quiz Timer
function setTime() {
  secondsLeft = 60
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      lostMessage();
    } else if (done == true) {
      clearInterval(timerInterval);
    }
  }, 1000);
};


//Rendering the score from local storage
function renderScore () {
  var storedscores = JSON.parse(localStorage.getItem("scores"));
  scoreList.textContent = storedscores;
};

//Page displaying the score
var finalScore = function () {
  enterInitials.setAttribute("style", "display: none");
  board.setAttribute("style", "display");

  renderScore ();
};

//Storing score to local storage
function storeScore(event) {
  event.preventDefault();
  var initialText = initialsInput.value.trim();
  if (initialText === "") {
    return;
  }
  var timeText = secondsLeft;
  if (timeText === 0) {
    return;
  }
  scores = initialText + " - " + timeText;
  localStorage.setItem("scores", JSON.stringify(scores));
  finalScore ();
};

//Displaying score and where to input initials
var finish = function () {
  multQuiz.setAttribute("style", "display: none");
  enterInitials.setAttribute("style", "display");
  idk.textContent = "Your Final Score is " + secondsLeft + ".";
};

// Quiz
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

  setTime()
  qOne();
};

//Display message if lost
var lostMessage = function () {
  multQuiz.setAttribute("style", "display: none");
  lost.setAttribute("style", "display");
};
