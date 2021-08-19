// wait for dom to finish loaging before running the game
// get the button elements and add event listners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })
    }

    runGame("addition")

})

/** the main game "loop". called when the script is first loaded
 * and after the user's answer has been processed
*/
function runGame(gameType) {
    // creates 2 random numbers between 1 and 25

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2) ;
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * check the answer against the first element in
 * the returned calculatedCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert ("Hey! you got it right! :D");
        incrementScore();
    } else {
        alert(`awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongScore()
    }

    runGame(calculatedAnswer[1]);

}

/**
 * gets the operands (the numbers) and the operator (plus, minus ect))
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }
    
}

/**
 * gets current score from the DOM and increments by 1
 */
function incrementScore() {
    
let oldSchool = parseInt(document.getElementById("score").innerText);
document.getElementById("score").innerText = ++oldSchool

}

/**
 * gets current incorrect score from the DOM and increments by 1
 */
function incrementWrongScore() {

    let oldSchool = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldSchool   

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

