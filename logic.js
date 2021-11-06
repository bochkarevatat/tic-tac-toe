let players = ['x', 'o'];
let activePlayer = 0;





function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  renderBoard(board);

}

function click(row, column) {
  activePlayer = activePlayer == 0 ? 1 : 0
  // console.log(activePlayer)

  if (activePlayer == 1) {

    board[row][column] = players[0];
  } else {
    board[row][column] = players[1];
  }


  checkWinner()

  
  renderBoard(board);
  
}


function checkWinner() {
  let winner = null;

  // по горизонтале
  for (let g = 0; g < 3; g++) {
    if (board[g][0] == board[g][1] && board[g][1] == board[g][2]) {
      winner = board[g][0];

    }
    if (winner == players[0]) {
      // console.log(winner);
      showWinner(winner)
    } else if (winner == players[1]) {
      // console.log(winner);
      showWinner(winner)
      
    } else {
      console.log();
    }

  }
  // по вертикале

  for (let v = 0; v < board.length; v++) {
    if (board[0][v] == board[1][v] && board[1][v] == board[2][v]) {
      winner = board[0][v];

    }
    if (winner == players[0]) {
      // console.log(winner);
      showWinner(winner)
    } else if (winner == players[1]) {
      // console.log(winner);
      showWinner(winner)
    } else {
      console.log();
    }
  }

  // по диагонале

  for (let d = 0; d < board.length; d++) {
    for (let t = 0; t < board[d].length; t++) {
      for (let m = 0; m < board[d][t].length; m++) {

        if (board[2][m] == board[t][d] && board[t][d] == board[m][2]) {
          winner = board[2][m];
          // console.log("win");
        }
        if (winner == players[0]) {
          console.log(winner);
          showWinner(winner)
        } else if (winner == players[1]) {
          console.log(winner);
          showWinner(winner)
        } else {
          console.log();
        }


        if (board[0][m] == board[t][d] && board[t][d] == board[t][2]) {
          winner = board[0][m];
          // console.log("win");
        }
        if (winner == players[0]) {
          console.log(winner);
          showWinner(winner)
        } else if (winner == players[1]) {
          console.log(winner);
          showWinner(winner)
        } else {
          console.log();
        }

      }


    }
  }

//   if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
//     winner = board[0][0];

//   }

//     if (winner == players[0]) {
//     console.log(winner);
//     showWinner(winner)
//   } else if (winner == players[1]) {
//     console.log(winner);
//     showWinner(winner)
//   } else {
//     console.log();
//   }

// if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
//     winner = board[0][2];

//   }
//   if (winner == players[0]) {
//     console.log(winner);
//     showWinner(winner)
//   } else if (winner == players[1]) {
//     console.log(winner);
//     showWinner(winner)
//   } else {
//     console.log();
//   }

}





