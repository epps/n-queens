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
  // create solutions collection
  var solutions = [];
  // make new board
  var board = new Board({n: n});
  // count Rooks placed
  var numRooks = 0;
  // define recursive function
  var recursiveRooks = function(rowNum) {
    // initializa a count
    var rowNum = rowNum || 0;

    // base case: has counter exceeded n
    if (numRooks === n) {
      solutions = board.allRows();
      return;
    }

    // loop over indeces
    for (var colNum = 0; colNum < n; colNum++) {
      // place piece at position x,y (i.e count, i)
      board.setPiece(rowNum, colNum, 1);
      // check for conflict
      if (!board.hasAnyRooksConflicts()) {
        // increment rowNum and recurse
        numRooks++;
        console.log(board.allRows());
        recursiveRooks(rowNum+1);
      }
      else {
        board.setPiece(rowNum, colNum, 0);
      }
    }
  };

  // invoke recursive function
  recursiveRooks(0);

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
