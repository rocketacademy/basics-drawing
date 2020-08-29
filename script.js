var main = function (input) {
  var rowCounter = 0;
  var columnCounter = input;
  var numOfColumns;
  var myOutputValue = '';

  // game logic for upside down triangle
  while (rowCounter < input) {
    numOfColumns = columnCounter;
    while (numOfColumns > 0) {
      myOutputValue += '😀';
      numOfColumns -= 1;
    }
    myOutputValue += '<br>';
    rowCounter += 1;
    columnCounter -= 1;
  }
  return myOutputValue;
};
