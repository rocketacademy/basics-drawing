var myOutputValue = '';

var lineCounter = 0;

while (lineCounter < input) {
  var columnCounter = 0;

  while (columnCounter < input) {
    myOutputValue = myOutputValue + '👍';

    columnCounter = columnCounter + 1;
  }

  // start a new line
  myOutputValue = myOutputValue + '<br>';

  lineCounter = lineCounter + 1;
}

return myOutputValue;
};

