var createBoard = () => {
  return {
    1: ['.', '.', '.'],
    2: ['.', '.', '.'],
    3: ['.', '.', '.']
  }
}

var newBoard = createBoard();
console.log(newBoard);

var currentTurn = 'X';
var lock = false;
var filled = 0;

var xScore = 0;
var oScore = 0;

//Cell Functions

var cellOneClicked = () => {
  console.log('Top Left')
  if (newBoard[1][0] !== '.') {
    return
  };
  if (lock === true) {
    return;
  }

  newBoard[1][0] = currentTurn;
  console.log(newBoard);

  let input = createInput();
  document.getElementById("cellOne").prepend(input);

  checkForWinner();

  changeTurn();
};

var cellTwoClicked = () => {
  console.log('Top Middle')
  if (newBoard[1][1] !== '.') {
    return
  };
  if (lock === true) {
    return;
  }

  newBoard[1][1] = currentTurn;
  console.log(newBoard);

  let input = createInput();
  document.getElementById("cellTwo").prepend(input);

  checkForWinner();

  changeTurn();
};

var cellThreeClicked = () => {
  console.log('Top Right')
  if (newBoard[1][2] !== '.') {
    return
  };
  if (lock === true) {
    return;
  }

  newBoard[1][2] = currentTurn;
  console.log(newBoard);

  let input = createInput();
  document.getElementById("cellThree").prepend(input);

  checkForWinner();

  changeTurn();
};

var cellFourClicked = () => {
  console.log('Middle Left')
  if (newBoard[2][0] !== '.') {
    return
  };
  if (lock === true) {
    return;
  }

  newBoard[2][0] = currentTurn;
  console.log(newBoard);

  let input = createInput();
  document.getElementById("cellFour").prepend(input);

  checkForWinner();

  changeTurn();
};

var cellFiveClicked = () => {
  console.log('Center')
  if (newBoard[2][1] !== '.') {
    return
  };
  if (lock === true) {
    return;
  }

  newBoard[2][1] = currentTurn;
  console.log(newBoard);

  let input = createInput();
  document.getElementById("cellFive").prepend(input);

  checkForWinner();

  changeTurn();
};

var cellSixClicked = () => {
  console.log('Middle Right')
  if (newBoard[2][2] !== '.') {
    return
  };
  if (lock === true) {
    return;
  }

  newBoard[2][2] = currentTurn;
  console.log(newBoard);

  let input = createInput();
  document.getElementById("cellSix").prepend(input);

  checkForWinner();

  changeTurn();
};

var cellSevenClicked = () => {
  console.log('Bottom Left')
  if (newBoard[3][0] !== '.') {
    return
  };
  if (lock === true) {
    return;
  }

  newBoard[3][0] = currentTurn;
  console.log(newBoard);

  let input = createInput();
  document.getElementById("cellSeven").prepend(input);

  checkForWinner();

  changeTurn();
};

var cellEightClicked = () => {
  console.log('Bottom Middle')
  if (newBoard[3][1] !== '.') {
    return
  };
  if (lock === true) {
    return;
  }

  newBoard[3][1] = currentTurn;
  console.log(newBoard);

  let input = createInput();
  document.getElementById("cellEight").prepend(input);

  checkForWinner();

  changeTurn();
};

var cellNineClicked = () => {
  console.log('Bottom Right')
  if (newBoard[3][2] !== '.') {
    return
  };
  if (lock === true) {
    return;
  }

  newBoard[3][2] = currentTurn;
  console.log(newBoard);

  let input = createInput();
  document.getElementById("cellNine").prepend(input);

  checkForWinner();

  changeTurn();
};


// Helper Functions

var changeTurn = () => {
  if (currentTurn === 'X') {
    currentTurn = 'O';
  }
  else {
    currentTurn = 'X'
  }
};

var createInput = () => {
  let element = document.createElement("span");
  let content = document.createTextNode(currentTurn);
  element.appendChild(content);
  element.setAttribute("class", "input");

  return element;
};

//Check For Winnner

var checkForWinner = () => {
  filled++
  let winner;

  winner = checkRows();
  simplify(winner);
  if (winner === 'X' || winner === 'O') {
    return;
  }

  winner = checkColumns();
  simplify(winner);
  if (winner === 'X' || winner === 'O') {
    return;
  }

  winner = checkDiagonalRight();
  simplify(winner);
  if (winner === 'X' || winner === 'O') {
    return;
  }

  winner = checkDiagonalLeft();
  simplify(winner);
  if (winner === 'X' || winner === 'O') {
    return;
  }

  if (filled === 9) {
    console.log('TIE!');
    newGame();
  }
};

var simplify = (winner) => {
  if (winner === 'X') {
    console.log('X WINS!');
    xScore++
    removeScores();
    createScores();
    newGame();
  }
  if (winner === 'O') {
    console.log('O WINS!')
    oScore++;
    removeScores();
    createScores();
    newGame();
  }
}

//Winner Helper Functions

//Rows
var checkRow = (row) => {
  let counts = {}
  for (var i = 0; i < row.length; i++) {
    if (counts[row[i]] === undefined) {
      counts[row[i]] = 1;
    }
    else {
      counts[row[i]]++
    }
  }

  delete counts['.'];

  for (var count in counts) {
    if (counts[count] === 3) {
      return count
    }
  }
};

var checkRows = () => {
  for (var row in newBoard) {
    var value = checkRow(newBoard[row]);
    if (value === 'X' || value === 'O') {
      return value;
    }
  }
};

//Columns
var checkColumn = (column) => {
  let counts = {}
  for (var row in newBoard) {
    let content = newBoard[row]
    if (counts[content[column]] === undefined) {
      counts[content[column]] = 1;
    }
    else {
      counts[content[column]]++;
    }
  }

  delete counts['.'];

  for (var count in counts) {
    if (counts[count] === 3) {
      return count
    }
  }
}

var checkColumns = () => {
  for (var i = 0; i < 3; i++) {
    var value = checkColumn(i);
    if (value === 'X' || value === 'O') {
      return value;
    }
  }
};

//Diagonals
var checkDiagonalRight = () => {
  let index = 0;
  let counts = {};

  for (var row in newBoard) {
    let content = newBoard[row];
    if (counts[content[index]] === undefined) {
      counts[content[index]] = 1;
    }
    else {
      counts[content[index]]++;
    }

    index++;
  }

  delete counts['.'];

  for (var count in counts) {
    if (counts[count] === 3) {
      return count
    }
  }
}

var checkDiagonalLeft = () => {
  let index = 2;
  let counts = {};

  for (var row in newBoard) {
    let content = newBoard[row];
    if (counts[content[index]] === undefined) {
      counts[content[index]] = 1;
    }
    else {
      counts[content[index]]++;
    }

    index--;
  }

  delete counts['.'];

  for (var count in counts) {
    if (counts[count] === 3) {
      return count
    }
  }
}

//Create Score
var createScores = () => {
  let x = document.createElement("span");
  let xcontent = document.createTextNode(`X: ${xScore}`);
  x.appendChild(xcontent);
  x.setAttribute("id", "xscores");

  let o = document.createElement("span");
  let ocontent = document.createTextNode(`O: ${oScore}`);
  o.appendChild(ocontent);
  o.setAttribute("id", "oscores");

  document.getElementById("scoreboard").appendChild(x);
  document.getElementById("scoreboard").appendChild(o);
};

createScores();

//Remove Scores for New Scores
var removeScores = () => {
  var elem = document.querySelector('#xscores');
  elem.parentNode.removeChild(elem);

  elem = document.querySelector('#oscores');
  elem.parentNode.removeChild(elem);
};

//Start a New Game

var newGame = () => {
  lock = true;
  newBoard = createBoard();

  console.log('newBoard: ', newBoard)

  setTimeout(function() {
    document.querySelectorAll('.input').forEach(function(a){
    a.remove()
    });
    currentTurn = 'X';
    filled = 0;
    lock = false;
  }, 4000);

};

var restartGame = () => {
  newBoard = createBoard();
  document.querySelectorAll('.input').forEach(function(a){
    a.remove()
    });
  currentTurn = 'X';
  filled = 0;

  removeScores();
  xScore = 0;
  oScore = 0;
  createScores();
}