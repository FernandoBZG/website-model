var computerOptions = ['Rock','Paper','Scissors']
function getComputerChoice(){
    choice = computerOptions[Math.floor(Math.random() * 3)]
    return choice
}
function playRound(playerSelection, computerSelection){
    if (computerSelection == playerSelection)
        return `It's a draw, ${computerSelection} and ${playerSelection}`
    if((computerSelection == 'rock') & (playerSelection == 'paper'))
        return `Player Wins, Paper beats Rock`
    if((computerSelection == 'rock') & (playerSelection == 'scissors'))
        return `Computer Wins, Rock beats Scissors`
    if((computerSelection == 'scissors') & (playerSelection == 'rock'))
        return `Player Wins, Paper beats Rock`
    if((computerSelection == 'scissors') & (playerSelection == 'paper'))
        return `Computer Wins, Scissors beats Paper`
    if((computerSelection == 'paper') & (playerSelection == 'scissors'))
        return `Player Wins, Scissors beats Paper`
}
function game(){
    for (let i = 0; i < 5; i++){
        computerSelection = getComputerChoice().toLowerCase();
        playerSelection = prompt('What do you choose? Paper, Scissors or Rock? ').toLowerCase();
        console.log(playerSelection , computerSelection)
        alert(playRound(playerSelection , computerSelection))
}}


