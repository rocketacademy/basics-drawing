// Please declare functions and variables above where they are used.

var main = function (input) {
  var rowCounter = 0;
  var columnCounter;
  var myOutputValue = '';
  while (rowCounter < input) {
    columnCounter = 0;
    while (columnCounter < input) {
      myOutputValue += '😀';
      columnCounter += 1;
    }
    myOutputValue += '<br>';
    rowCounter += 1;
  }
  return myOutputValue;
};
