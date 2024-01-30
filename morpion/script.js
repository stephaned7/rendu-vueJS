const cells = document.querySelectorAll('.cell');
const gameState = document.querySelector('.gameState');
const restartBtn = document.querySelector('.restartBtn');
const winCon = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let options = ["", "", "", "", "", "", "", "", "",];
let currentPlayer = "X";
let running = false;

startGame();

function startGame(){
    running = true;
    cells.forEach(cell => cell.addEventListener('click', cellPicked));
    restartBtn.addEventListener('click', restartGame);
    gameState.innerHTML = ` Au tour des ${currentPlayer} de jouer`
}

function cellPicked(){
    const cellIndex = this.getAttribute('cellIndex');

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.innerHTML = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    gameState.innerHTML = `Au tour des ${currentPlayer} de jouer`
}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winCon.length; i++){
        const condition = winCon[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA === "" || cellB === "" || cellC === ""){
            continue;
        }
        if(cellA === cellB && cellB === cellC){
            roundWon = true;
            break;
        }    
    }

    if(roundWon){
        gameState.innerHTML = `Les ${currentPlayer} ont gagné!`;
        running = false;
    }

    else if(!options.includes("")){
        gameState.innerHTML = `Match nul!`;
        running = false;
}

    else{
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", "",];
    gameState.innerHTML = `Au tour des ${currentPlayer}`;
    cells.forEach(cell => cell.innerHTML = "");
    running = true;
}

