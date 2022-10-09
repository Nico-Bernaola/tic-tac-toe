//Module pattern for the Game Board
const board = ['', '', '', '', '', '', '', '', ''];  
let turno = false;
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let winner = '';

function getTurno() {
  return turno ? 'O' : 'X';
}

let gameBoard = (function() {
  const fields = Array.from(document.querySelectorAll('.field'));
  const playerDisplay = document.querySelector('.display-player');
  const resetButton = document.querySelector('#restart-button')
  const announcer = document.querySelector('.winner')

    
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    
    createMatriz();
    
})();

const field = document.querySelector('.field')

function changeValue(elemento,position){
  if(elemento.innerHTML == ''){
    let valor = getTurno()
    elemento.innerHTML = valor;
    board[position] = valor;
    turno = !turno;
  }
  validateWinner();
  console.log(elemento)
}

function validateWinner(){
  winConditions.forEach((condition) => {
    console.log(board)
      if(validateGame(board[condition[0]], board[condition[1]], board[condition[2]])){
        console.log(board)
        if(board[condition[0]] != ''){
          winner = board[condition[0]];
          console.log('winner ' + winner);
        }
  
      }
  })
}

function validateGame(pos1,pos2,pos3){
  if(pos1.length > 0 && pos2.length > 0 && pos3.length > 0){
    if(pos1 === pos2 === pos3){
      return true;
    }
  }
  return false;
}

function createMatriz(){
  board.forEach((e,index) => {
    let item = `<div class="field" onclick="changeValue(this,${index})">${e}</div>`
    $('.gameboard').append(item);
  })
}

function deleteMatriz(){
  board.forEach((e,index) => {
    //let item = `<div class="field" onclick="changeValue(${index})">${e}</div>`
    $('.gameboard').remove("div");
  })
}

const matriz = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


  



//Factory Function for the players
const players = (playerName, index) => {
  const tuNombre = () => console.log(`Player name is: ${playerName}`)
  return { playerName, index, tuNombre }
};

