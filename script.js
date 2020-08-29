var main = function (input) {
  var rowCounter = 0;
  var columnCounter;
  var myOutputValue = '';

  // game logic for outline square
  while (rowCounter < input) {
    columnCounter = 0;
    if (rowCounter == 0 || rowCounter == (input - 1)) {
      while (columnCounter < input) {
        myOutputValue += '😀';
        columnCounter += 1;
      }
    } else {
      while (columnCounter < input) {
        if (columnCounter == 0 || columnCounter == (input - 1)) {
          myOutputValue += '😀';
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
  return myOutputValue;
};
