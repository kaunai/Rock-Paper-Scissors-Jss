let playerWins = 0;
let playerLosses = 0;
let playerTies = 0;

function getComputerChoice () {
    randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
    case 0: computerChoice = `rock`;
            
    break;
    case 1: computerChoice = `paper`
            
    break;
    case 2: computerChoice = `scissors`
            
    break;
 
}return computerChoice;
}

function playRound (playerSelection, computerSelection){
    playerSelection = prompt(`enter:`).toLowerCase();
    getComputerChoice();
    computerSelection = computerChoice;
    if (playerSelection == `rock` && computerSelection == `paper`){console.log(`you lose`), ++playerLosses}
    else if(playerSelection == `rock` && computerSelection == `scissors`){console.log(`you win`), ++playerWins}
    else if(playerSelection == `rock` && computerSelection == `rock`){console.log(`game is a tie`), ++playerTies}
    else if(playerSelection == `paper` && computerSelection == `paper`){console.log(`game is a tie`), ++playerTies}
    else if(playerSelection == `paper` && computerSelection == `scissors`){console.log(`you lose`), ++playerLosses}
    else if(playerSelection == `paper` && computerSelection == `rock`){console.log(`you win`), ++playerWins}
    else if(playerSelection == `scissors` && computerSelection == `paper`){console.log(`you win`), ++playerWins}
    else if(playerSelection == `scissors` && computerSelection == `scissors`){console.log(`game is a tie`), ++playerTies}
    else if(playerSelection == `scissors` && computerSelection == `rock`){console.log(`you lose`), ++playerLosses}
return;
}

function game() {
    for (let i = 0; i < 5; ++i)
    {
        playRound()
    }
    gameResult = ``
    if ( playerWins > playerLosses ){
        console.log(`you won: ${playerWins}\nyou lost: ${playerLosses}\nyou tied: ${playerTies}`)
        gameResult = `you won`
    }
    else if (playerWins < playerLosses){
        console.log(`you won: ${playerWins}\nyou lost: ${playerLosses}\nyou tied: ${playerTies}`)
        gameResult = `you lost`
    }
    else {gameResult = `its a tie`}

    playerWins = 0;
    playerLosses = 0;
    playerTies = 0;
    return gameResult;
}
