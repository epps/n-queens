/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// Hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space.)
// Take a look at solversSpec.js to see what the tests are expecting




// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n rooks placed such that none of them can attack each other.

/*
* Notes from 07/08:
* Base case: if board passing hasAnyRooksConflicts(), put array to solutions
* Recursive case:
*  recursive condition: ???
*  recursive function accepts three arguments: 1) rowIndex, 2) colIndex, 3) val
*  it must iterate over columns and rows, setting pieces, testing for conflicts and
*  recursing as necessary.
*/

// Termination case: when loop inside of recursive function reaches n iterations

window.findNRooksSolution = function(n) {
  // initialize empty array
  var solutions = [];
  // create a working board
  var board = new Board({n: n});
  // initialize a count
  var rooksPlaced = 0;
  // initialize index variables for y and x coordinates
  var rowIndex = 0;
  var colIndex = 0;
  // initialize a starting value
  var val = 1;

  // define a recursive function
  var recursiveRooks = function(board, rowIndex, colIndex, val) {
    // reset colIndex when it reaches n
    if (colIndex === n) {
      colIndex = 0;
    }

    // handle termination case
    if (rowIndex === n || rooksPlaced === n) {
      // push successful board to solutions array
      solutions.push(board);
      // generate a new board
      board = new Board({n:n});
      // how to handle new values?

      // recurse with new board
      recursiveRooks(board, rowIndex, colIndex, val);
    }

    // set a piece on the board
    board.setPiece(rowIndex, colIndex, val);
    // if new piece placement has any conflicts
    if (!board.hasAnyRooksConflicts()) {
      // increment rooksPlaced
      rooksPlaced++;
      // increment colIndex
      colIndex++;
      // recurse with new position
      recursiveRooks(board, rowIndex, colIndex, val);
    }

    // if new pieve placement has conflicts
    if (board.hasAnyRooksConflicts()) {
      // change the value to 0
      val = 0;
      // recurse with same position
      recursiveRooks(board, rowIndex, colIndex, val);
    }

    //
  };

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions));
  // return array of solutions
  return solutions;
};


// Return the number of nxn chessboards that exist, with n rooks placed such that none
// of them can attack each other.
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n queens placed such that none of them can attack each other.
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// Return the number of nxn chessboards that exist, with n queens placed such that none
// of them can attack each other.
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
