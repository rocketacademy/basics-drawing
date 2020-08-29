// Please declare functions and variables above where they are used.
var currentGamemode = 'User input shape';
var shapeChose = '';

var main = function (input) {
  var myOutputValue = '';
  if (currentGamemode == 'User input shape') {
    shapeChose = input;
    currentGamemode = 'input dimensions';
  } else if (currentGamemode == 'input dimensions') {
    if (shapeChose == 'square') {
      // draw square
      var counter = 0;
      while (counter < input) {
        var innerCounter = 0;
        while (innerCounter < input) {
          myOutputValue += '😀';
          innerCounter += 1;
        }
        counter += 1;
        myOutputValue += '<br>';
      }
    } else if (shapeChose == 'triangle') {
      // draw triangle
      var counter = 0;
      while (counter < input) {
        var innerCounter = 0;
        while (innerCounter <= counter) {
          myOutputValue += '😀';
          innerCounter += 1;
        }
        counter += 1;
        myOutputValue += '<br>';
      }
    }
  }
  // returning output
  return myOutputValue;
};
