//Module pattern for the Game Board
let board = ['', '', '', '', '', '', '', '', ''];  
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
  return   turno ? 'O' : 'X';;
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


    showTurn('X');
})();

const field = document.querySelector('.field')

function changeValue(elemento,position){
  if(elemento.innerHTML == '' && winner == ''){
    let valor = getTurno()
    elemento.innerHTML = valor;
    board[position] = valor;
    turno = !turno;
    showTurn(getTurno());
  }
  validateWinner();
}


function showTurn(valor){
  let turn = document.querySelector('#message');
  turn.innerHTML = `Player (${valor}) it's your TURN`
}

function validateWinner(){
  winConditions.forEach((condition) => {
      if(validateGame(board[condition[0]], board[condition[1]], board[condition[2]])){
        if(board[condition[0]] != ''){
          winner = board[condition[0]];
          console.log('winner ' + winner);
          let turn = document.querySelector('#message');
          turn.innerHTML = `Player (${winner}) WIN`
        }
  
      }
  })
}

function validateGame(pos1,pos2,pos3){
  if(pos1.length > 0 && pos2.length > 0 && pos3.length > 0){
    if(pos1 == pos2 && pos2 == pos3 && pos1 == pos3){
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
  let itemsFields  = document.querySelectorAll('.field');
  itemsFields.forEach((field)=> {
    field.innerHTML = '';
  })
  board =  ['', '', '', '', '', '', '', '', ''];
  winner = '';
  showTurn(getTurno());
}



