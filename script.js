// input: number of characters on the screen

// line drawing
var getLine = function (lineLength) {
  var drawLine = 0;
  var draw = '';
  while (drawLine < lineLength) {
    draw = draw + '🚃';
    drawLine = drawLine + 1;
  }
  return draw;
};

// square drawing
var getSquare = function (squareDimension) {
  var draw = '';
  var squareHeight = 0;
  while (squareHeight < squareDimension) {
    var squareLength = 0;
    while (squareLength < squareDimension) {
      draw = draw + '🥰';
      squareLength = squareLength + 1;
    }
    draw = draw + '<br>';
    squareHeight = squareHeight + 1;
  }
  return draw;
};

// triangle drawing
var getTri = function (triDimension) {
  var draw = '';
  var triHeight = 0;
  while (triHeight < triDimension) {
    var triRows = 0;
    // @height= 0, 1st row doesn't print
    // used "<="" to get one extra row
    while (triRows <= triHeight) {
      draw = draw + '🗻';
      triRows = triRows + 1;
    }
    draw = draw + '<br>';
    triHeight = triHeight + 1;
  }
  return draw;
};

// reverse triangle drawing
var getRevTri = function (revTriDimension) {
  var draw = '';
  var revTriHeight = 0;
  while (revTriHeight < revTriDimension) {
    var revTriRows = 0;
    // to reverse triangle, legnth of triangle starts @max input and -1 each loop
    var rowLength = revTriDimension - revTriHeight;
    while (revTriRows < rowLength) {
      draw = draw + '🍕';
      revTriRows = revTriRows + 1;
    }
    draw = draw + '<br>';
    revTriHeight = revTriHeight + 1;
  }
  return draw;
};

// Outline Square Drawing
var getOutSquare = function (squareDimension) {
  var draw = '';
  var squareHeight = 0;
  while (squareHeight < squareDimension) {
    var squareLength = 0;
    // for top and bottom borders
    if (squareHeight == 0 || squareHeight == (squareDimension - 1)) {
      while (squareLength < squareDimension) {
        draw = draw + '😎';
        squareLength = squareLength + 1;
      }
    } else {
      while (squareLength < squareDimension) {
        // for left and right borders
        if (squareLength == 0 || squareLength == (squareDimension - 1)) {
          draw = draw + '😎';
          squareLength = squareLength + 1;
          // fill in everything else
        } else {
          draw = draw + '🥰';
          squareLength = squareLength + 1;
        }
      }
    }
    draw = draw + '<br>';
    squareHeight = squareHeight + 1;
  }
  // error message to inform user to input higher number to see outline square
  if (squareDimension <= 2) {
    draw = draw + '<br> Error. In order to see outlined square, please input above 3';
  }
  return draw;
};

// Center Square Drawing
var getCenSquare = function (squareDimension) {
  var draw = '';
  var squareHeight = 0;
  // +0.5 to get center position
  var squareMid = (squareDimension / 2) + 0.5;
  // error messages (input validation)
  if (squareDimension < 5) {
    draw = 'Error. Square dimensions too small, due to limitations please enter only 5, 7, or, 9.';
    return draw;
  }
  if (squareDimension >= 10) {
    draw = 'Error. Square dimensions too big, due to limitations please enter only 5, 7, or, 9.';
    return draw;
  }
  if ((squareDimension % 2) == 0) {
    draw = 'Error. Please only enter an odd number 5 and above.<br>i.e. 5, 7, 9';
    return draw;
  }
  // valid input -> drawing
  if ((squareDimension % 2) == 1) {
    while (squareHeight < squareDimension) {
      var squareLength = 0;
      // prioritize middle square; squareMid - 1 b/c offset 0 count
      if (squareHeight == squareMid - 1) {
        while (squareLength < squareDimension) {
          // for left and right borders
          if (squareLength == 0 || squareLength == (squareDimension - 1)) {
            draw = draw + '😎';
            squareLength = squareLength + 1;
            // middle emoji; squareMid - 1 b/c offset 0 count
          } else if (squareLength == (squareMid - 1)) {
            draw = draw + '😮';
            squareLength = squareLength + 1;
            // fill in everything else
          } else {
            draw = draw + '🥰';
            squareLength = squareLength + 1;
          }
        }
        // for top and bottom borders
      } else if (squareHeight == 0 || squareHeight == (squareDimension - 1)) {
        while (squareLength < squareDimension) {
          draw = draw + '😎';
          squareLength = squareLength + 1;
        }
      } else {
        while (squareLength < squareDimension) {
          // for left and right borders
          if (squareLength == 0 || squareLength == (squareDimension - 1)) {
            draw = draw + '😎';
            squareLength = squareLength + 1;
            // fill in everything else
          } else {
            draw = draw + '🥰';
            squareLength = squareLength + 1;
          }
        }
      }
      draw = draw + '<br>';
      squareHeight = squareHeight + 1;
    }
  }
  return draw;
};

// "line", "square", "triangle", "reverse-triangle", "outline-square", or "center-square"
var drawMode = 'default';
var main = function (input) {
  var myOutputValue = '';
  // invalid entry: number < 10
  if (input >= 10) {
    myOutputValue = 'Error. Sorry, due to limitations, input has to be under 10';
    return myOutputValue;
  }
  // changing modes
  if (input == 'line') {
    drawMode = 'line-drawing';
    myOutputValue = 'Current mode: ' + drawMode + '. Input defines the number of emojis returned';
    return myOutputValue;
  }
  if (input == 'square') {
    drawMode = 'square-drawing';
    myOutputValue = 'Current mode: ' + drawMode + '. Input defines the dimensions of the square';
    return myOutputValue;
  }
  if (input == 'triangle') {
    drawMode = 'triangle-drawing';
    myOutputValue = 'Current mode: ' + drawMode + '. Input defines the dimensions of the triangle';
    return myOutputValue;
  }
  if (input == 'reverse-triangle') {
    drawMode = 'reverse-triangle-drawing';
    myOutputValue = 'Current mode: ' + drawMode + '. Input defines the dimensions of the reverse triangle';
    return myOutputValue;
  }
  if (input == 'outline-square') {
    drawMode = 'outline-square-drawing';
    myOutputValue = 'Current mode: ' + drawMode + '. Input defines the dimensions of the outline square';
    return myOutputValue;
  }
  if (input == 'center-square') {
    drawMode = 'center-square-drawing';
    myOutputValue = 'Current mode: ' + drawMode + '. Input defines the dimensions of the square';
    return myOutputValue;
  }
  // Drawing!
  if (drawMode == 'default') {
    myOutputValue = 'Please input a mode: "line", "square", "triangle", "reverse-triangle", "outline-square", or "center-square"';
  } else if (drawMode == 'line-drawing') {
    myOutputValue = getLine(input);
  } else if (drawMode == 'square-drawing') {
    myOutputValue = getSquare(input);
  } else if (drawMode == 'triangle-drawing') {
    myOutputValue = getTri(input);
  } else if (drawMode == 'reverse-triangle-drawing') {
    myOutputValue = getRevTri(input);
  } else if (drawMode == 'outline-square-drawing') {
    myOutputValue = getOutSquare(input);
  } else if (drawMode == 'center-square-drawing') {
    myOutputValue = getCenSquare(input);
  }

  return myOutputValue;
};
