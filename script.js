// Please declare functions and variables above where they are used.

var main = function (input) {
  var rowCounter = 0;
  var columnCounter;
  var myOutputValue = '';
  var numOfColumns;
  while (rowCounter < input) {
    columnCounter = 0;
    numOfColumns = rowCounter + 1;
    while (columnCounter < numOfColumns) {
      myOutputValue += '😀';
      columnCounter += 1;
    }
    myOutputValue += '<br>';
    rowCounter += 1;
  }
  return myOutputValue;
};
