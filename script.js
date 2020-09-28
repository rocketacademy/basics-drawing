var main = function (input) {
  var myOutputValue = '';
  var firstRowLength = 0;

  // draw first row (looped with input)
  while (firstRowLength < input) {
    myOutputValue = myOutputValue + '😀';
    firstRowLength = firstRowLength + 1;
  }
  myOutputValue = myOutputValue + '<br>';

  var rowCounter = 0;

  //draw rows between (input - 2) as it doesnt draw the first and last lines
  while (rowCounter < (input - 2)) {
    //start row with smiley
    myOutputValue = myOutputValue + '😀';
    var columnCounter = 0;
    //draw (input - 2) burgers between the smileys
    while (columnCounter < (input - 2)) {
      myOutputValue = myOutputValue + '🍔';
      columnCounter = columnCounter + 1;
    }
    //end row with smiley and break
    myOutputValue = myOutputValue + '😀 <br>';
    rowCounter = rowCounter + 1;
  }

  // draw last row (looped with input) if input is at least 2
  if (input > 1) {
    var lastRowLength = 0;
    while (lastRowLength < input) {
      myOutputValue = myOutputValue + '😀';
      lastRowLength = lastRowLength + 1;
    }
  }
  return myOutputValue;
};


