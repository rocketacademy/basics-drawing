var main = function (input) {
  var myOutputValue = '';

  var rowCounter = 0;

  while (rowCounter < input) {

    var columnCounter = 0;

    while (columnCounter < rowCounter + 1) {
      myOutputValue = myOutputValue + '🍔';
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    rowCounter = rowCounter + 1;
  }

  return myOutputValue;
};

