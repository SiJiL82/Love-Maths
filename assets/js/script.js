document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});


function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    switch(gameType) {
        case "addition":
            displayAdditionQuestion(num1, num2);
            break;
        default:
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType}. Aborting!`;
            break;
    }
}


function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if(isCorrect) {
        incrementScore();
    }
    else {
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    switch(operator) {
        case "+":
            return [operand1 + operand2, "addition"];
            break;
        default:
            alert(`Unimplemented operator ${operator}`);
            throw `Unimplemented operator ${operator}. Aborting!`;
            break;
    }
}

function incrementScore() {
    let scoreObject = document.getElementById("score");
    let score = parseInt(scoreObject.innerText);
    scoreObject.innerText = ++score;
}

function incrementWrongAnswer() {
    let incorrectScoreObject = document.getElementById("incorrect");
    let incorrectScore = parseInt(incorrectScoreObject.innerText);
    incorrectScoreObject.innerText = ++incorrectScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}