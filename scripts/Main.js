var currentQuestion = 1;
var selectedAnswer = 0;
var choiceLabels = ["A)","B)","C)","D)"];
function loadQuestion(number) {
    var currentQuestionData = questionData[number - 1];
    for(var i = 1; i <= 4; i++) {
        document.getElementById(`choice${i}`).innerHTML = `${choiceLabels[i - 1]} ${currentQuestionData.answer[i - 1]}`;
    }
    document.getElementById(`prompt`).innerHTML = `${questionData[number - 1].question}`;
    fixAnswerHeights();
}

function beginGame() {
    document.getElementById("TitlePage").style.display = "none";
    document.getElementById("Game").style.display = "block";
    loadQuestion(currentQuestion);
}
function giveAnswer() {
    return document.getElementById(`choice${questionData[currentQuestion - 1].correctAnswer}`).textContent;
}
function fixAnswerHeights() {
    var maxHeight = 0;
    for(var i = 1; i <= 4; i++) {
        if (document.getElementById(`choice${i}`).scrollHeight >= maxHeight) {
            maxHeight = document.getElementById(`choice${i}`).scrollHeight;
        }
    }
    for(var i = 1; i <= 4; i++) {
        document.getElementById(`choice${i}`).style.height = maxHeight;
    }
}

function selectChoice(choice) {
    for(var i = 1; i <= 4; i++) {
        document.getElementById(`choice${i}`).style.backgroundColor = "#0000ff"; // Set to default color
    }
    document.getElementById(`choice${choice}`).style.backgroundColor = "#2244ff";
    document.getElementById(`SubmitButton`).disabled = false;
    selectedAnswer = choice;
}

function submitAnswer() {
    for(var i = 1; i <= 4; i++) {
        document.getElementById(`choice${i}`).disabled = "true";
    }
    document.getElementById(`choice${selectedAnswer}`).style.backgroundColor = "gold" // Set to color for wrong answer
    document.getElementById(`choice${questionData[currentQuestion - 1].correctAnswer}`).style.backgroundColor = "green" // Set to color for wrong answer
    document.getElementById(`SubmitButton`).style.display = "none";
    document.getElementById(`NextButton`).style.display = "inline";
    if(questionData[currentQuestion - 1].correctAnswer != selectedAnswer) {
        document.getElementById(`NextButton`).innerHTML = "Game Over<br>(Click to reload)";
    }
}

function gameOver() {
    document.getElementById('Game').style.display = "none";
    document.getElementById('GameOver').style.display = "inline";
}

function resetQuestion() {
    for(var i = 1; i <= 4; i++) {
        document.getElementById(`choice${i}`).style.backgroundColor = "#0000ff"; // Set to default color
        document.getElementById(`choice${i}`).disabled = false;
    }
    selectedAnswer = 0;
    document.getElementById(`SubmitButton`).disabled = true;
    document.getElementById(`SubmitButton`).style.display = "inline";
    document.getElementById(`NextButton`).style.display = "none";
}

function nextQuestion() {
    if(questionData[currentQuestion - 1].correctAnswer == selectedAnswer) {
        if(currentQuestion < questionData.length) {
            resetQuestion();
            currentQuestion -=- 1;
            loadQuestion(currentQuestion);
        } else {
            winGame();
        }
    } else {
        location.reload();
    }
}

function winGame() {
    document.getElementById('Game').style.display = "none";
    document.getElementById('WinScreen').style.display = "inline";
}
function toggleMusic() {
    if(getComputedStyle(document.getElementById('soundImg')).display === "inline") {
        document.getElementById('soundImg').style.display = "none";
        document.getElementById('mutedImg').style.display = "inline";
        document.getElementById('backgroundMusic').pause();
    } else {
        document.getElementById('soundImg').style.display = "inline";
        document.getElementById('mutedImg').style.display = "none";
        document.getElementById('backgroundMusic').play();
    }
}

