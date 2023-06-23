let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

console.log(buttons)
/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */
let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';
//array for moveList
let moveList =['Rock', 'Paper', 'Scissors'];
console.log(moveList)


function calcResult(move1, move2) {
    if(move1 === move2){
    statusDisplay.textContent = 'Tie!';

    }
    else if(move1 === 0 && move2 === 1){
    statusDisplay.textContent = loseMsg;   
    }
    else if(move1 === 0 && move2 === 2){
    statusDisplay.textContent = winMsg;   
    }
    else if(move1 === 1 && move2 === 0){
    statusDisplay.textContent = winMsg
    }
    else if(move1 === 1 && move2 === 2){
    statusDisplay.textContent = loseMsg;   
    }
    else if(move1 === 2 && move2 === 0){
    statusDisplay.textContent = loseMsg;   
    }
    else if(move1 === 2 && move2 === 1){
    statusDisplay.textContent = winMsg;   
    }
    buttons[0].style = 'display:none'
    buttons[1].style = 'display:none'
    buttons[2].style = 'display:none'
    buttons[3].style = 'display:block'
    buttons[3].textContent = 'play again'
    buttons[3].addEventListener("click", startGame)


    
}

/**
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
  return Math.floor(Math.random() * 3);
}

/**
 * Displays start state of game
 */

function startGame() {
    statusDisplay.textContent = 'Choose!';  
    for (let i =0; i<buttons.length; i++){
        buttons[i].textContent = moveList[i];
        buttons[i].style.display = "inline-block";
        buttons[i].addEventListener("click",endGame)
    }
    buttons[3].style = 'display:none'
    
}

/**
 * Displays end state of game
 * @param {Event} event event containing information of users input.
 */

function endGame(event) {
    let usermove = moveList.indexOf(event.target.textContent)
    console.log("usermove",usermove)
    let computermove = randomMove();
    console.log("computermove",computermove)
    calcResult(usermove,computermove)
}

startGame();