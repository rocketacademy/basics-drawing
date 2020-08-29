var main = function (input) {
  var rowCounter = 0;
  var columnCounter;
  var myOutputValue = '';
  var checkInput = input;
  var getCanPlayOrNot = function () {
    var result = checkInput % 2;
    var answer;
    if (result == 1) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    return answer;
  };
  var canPlayOrNot = getCanPlayOrNot();

  if (canPlayOrNot == 'no') {
    // cannot play game
    myOutputValue = 'Please enter an odd number dimension.';
  } else if (canPlayOrNot == 'yes') {
    // can play game
    // to determine which column and row is center of square
    var centerOfSquare = ((parseInt(input) + 1) / 2) - 1;
    console.log(centerOfSquare);

    // logic for drawing the square
    while (rowCounter < input) {
      columnCounter = 0;
      // prints border of square
      if (rowCounter == 0 || rowCounter == (input - 1)) {
        while (columnCounter < input) {
          myOutputValue += '😀';
          columnCounter += 1;
        }
      } else {
        // prints inside of square
        while (columnCounter < input) {
          if (columnCounter == 0 || columnCounter == (input - 1)) {
            myOutputValue += '😀';
            columnCounter += 1;
          } else if (columnCounter == centerOfSquare && rowCounter == centerOfSquare) {
            // prints center of square
            myOutputValue += '😏';
            columnCounter += 1;
          } else {
            myOutputValue += '👻';
            columnCounter += 1;
          }
        }
      }
      myOutputValue += '<br>';
      rowCounter += 1;
    }
  }
  return myOutputValue;
};
