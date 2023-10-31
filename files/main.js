let uScore = 0;
let cScore = 0;
const lastGame = 5;

const userScore = document.querySelector('#userScore');
const computerScore = document.querySelector('#computerScore');
const resultDisplay = document.querySelector('#result')
const resultOfGame = document.querySelector('#resultOfGame')


function playRound(userSelection) {
    const options = ["Paper","Rock","Scissors"];
    const computerSelection = options[Math.floor(Math.random() * 3)];
    
    if(uScore === lastGame) {
        resultOfGame.textContent = "You are the best, you win!"
    } else if(cScore === lastGame) {
        resultOfGame.textContent = "Really? I'm disappointed in you."
    } else if(userSelection === computerSelection){
        return "It is a tie!";
    } else if (
    (userSelection === "Paper" && computerSelection === "Rock") || 
    (userSelection === "Rock" && computerSelection === "Scissors") ||
    (userSelection === "Scissors" && computerSelection === "Paper")
) { 
    uScore++;
    userScore.textContent = "User Score: " + uScore;
    return "You've won!" 
 } else {
        cScore++;
        computerScore.textContent = "Computer Score: " + cScore;
        return "You've lost!"
    }

} 

function disableButtons(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true); 
}

document.querySelector('#rock').addEventListener('click', ()=> {
    const result = playRound("Rock");
    resultDisplay.textContent = result;
})

document.querySelector('#paper').addEventListener('click', ()=> {
    const result = playRound("Paper");
    resultDisplay.textContent = result;
})

document.querySelector('#scissors').addEventListener('click', ()=> {
    const result = playRound("Scissors");
    resultDisplay.textContent = result;
})