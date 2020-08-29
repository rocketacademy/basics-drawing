// Initial mode is shape entering mode
var mode = 'shape entering mode';
// shapeMode to record the current shape the game is using
var shapeMode;

var main = function (input) {
  var rowCounter = 0;
  var columnCounter;
  var numOfColumns;
  var myOutputValue = '';

  // changing the mode according to the shape user inputs want
  if (mode == 'shape entering mode') {
    if (input == 'square') {
      shapeMode = 'square';
      mode = 'shape mode';
      myOutputValue = 'please enter number of dimensions';
    } else if (input == 'triangle') {
      shapeMode = 'triangle';
      mode = 'shape mode';
      myOutputValue = 'please enter number of dimensions';
    } else {
      myOutputValue = 'you have entered an invalid input. Please enter square or triangle.';
    }
  } else if (mode == 'shape mode') {
    if (shapeMode == 'square') {
      // game logic for square shapeMode
      while (rowCounter < input) {
        columnCounter = 0;
        while (columnCounter < input) {
          myOutputValue += '😀';
          columnCounter += 1;
        }
        myOutputValue += '<br>';
        rowCounter += 1;
      }
    } else if (shapeMode == 'triangle') {
      // game logic for triangle shapeMode
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
    }
  }
  return myOutputValue;
};
