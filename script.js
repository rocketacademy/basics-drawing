var mode = 'enter mode';
// draw a triangle
var triangleDrawing = function (length) {
  var verticalCounter = 0;
  var message = '';

  while (verticalCounter < length) {
    var horizontalCounter = 0;

    while (horizontalCounter <= verticalCounter) {
      message = message + '👍';
      horizontalCounter += 1;
    }

    message += '<br>';
    verticalCounter += 1;
  }

  return message;
};

// get a horizontal line
var numOfCharacters = function (length) {
  var counter = 0;
  var message = '';

  while (counter < length) {
    message += '👍';
    counter += 1;
  }
  return message;
};

// draw a square
var squareDrawing = function (length) {
  var verticalCounter = 0;
  var message = '';

  while (verticalCounter < length) {
    var horizontalCounter = 0;

    while (horizontalCounter < length) {
      message += '👍';
      horizontalCounter += 1;
    }

    message += '<br>';
    verticalCounter += 1;
  }
  return message;
};

var main = function (input) {
  var myOutputValue = '';

  // input validation for choice of mode
  if (input == 'triangle' || input == 'number of characters' || input == 'square') {
    // choosing a mode
    if (input == 'triangle') {
      myOutputValue = 'You are now in \'triangle mode\'. Please enter a number';
      mode = 'triangle mode';
    } else if (input == 'number of characters') {
      myOutputValue = "You are now in 'number of characters' mode. Please enter a number";
      mode = 'number of characters mode';
    } else {
      myOutputValue = 'You are now in \'square\' mode. Please enter a number.';
      mode = 'square mode';
    }

  // input validation for entering a number
  } else if (isNaN(input) == false) {
    // calling the functions
    if (mode == 'triangle mode') {
      myOutputValue = triangleDrawing(input);
    } else if (mode == 'number of characters mode') {
      myOutputValue = numOfCharacters(input);
    } else if (mode == 'square mode') {
      myOutputValue = squareDrawing(input);
    }

  // error message
  } else {
    myOutputValue = 'Please enter a vaild choice';
  }

  return myOutputValue;
};
