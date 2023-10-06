function playRound(userSelection) {
    const options = ["Paper","Rock","Scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];

    console.log("You chosen: " + userSelection);
    console.log("The computer chosen: " + computerSelection)
    
    if(userSelection === computerSelection){
        return "It is a tie!";
    } else if (
    (userSelection === "Paper" && computerSelection === "Rock") || 
    (userSelection === "Rock" && computerSelection === "Scissors") ||
    (userSelection === "Scissors" && computerSelection === "Paper")
) { 
    return "You've won!" 
    } else {
        return "You've lost!"
    }
} 

const userSelection = "Paper";
const result = playRound(userSelection);
console.log(result)