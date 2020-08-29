// rings function
var getRings = function (dimensions) {
  var row = 0;
  var column = 0;
  var alternateEmoji = '';
  var repeatingEmoji = '';
  var myOutputValue = '';
  var index;
  var indexToStopRepeatingEmojis;
  var indexToStopAlternatingEmojis;
  console.log('No. of dimensions: ' + dimensions);
  if ((dimensions % 2) == 0) {
    // ring game logic for even dimensions
    while (row < (dimensions / 2)) {
    // print the emojis for the upper half rows
      alternateEmoji = '😀';
      repeatingEmoji = '😀';
      index = 0;
      indexToStopAlternatingEmojis = column;
      while (index < indexToStopAlternatingEmojis) {
      // print the alternating emojis on the left side of the borders
        myOutputValue += alternateEmoji;
        if (alternateEmoji == '😀') {
          alternateEmoji = '👻';
        } else {
          alternateEmoji = '😀';
        }
        index += 1;
      }

      // determine which repeating emoji to use for that row
      repeatingEmoji = alternateEmoji;

      // determine at which index to stop repeating emojis for that row
      indexToStopRepeatingEmojis = (dimensions - column);

      while (index < indexToStopRepeatingEmojis) {
      // print the top borders of the squares
        myOutputValue += repeatingEmoji;
        index += 1;
      }

      while (index < dimensions) {
      // to print the alternating emojis to the right side of the square border
        if (alternateEmoji == '😀') {
          alternateEmoji = '👻';
        } else {
          alternateEmoji = '😀';
        }
        myOutputValue += alternateEmoji;
        index += 1;
      }
      myOutputValue += '<br>';
      row += 1;
      column += 1;
    }

    console.log('you are at column index: ' + column);

    indexToStopAlternatingEmojis = column;
    while (row < dimensions) {
    // print emojis for lower half rows
      alternateEmoji = '😀';
      repeatingEmoji = '😀';
      index = 0;
      indexToStopAlternatingEmojis -= 1;
      while (index < indexToStopAlternatingEmojis) {
      // print the alternating emojis on the left side of the borders
        myOutputValue += alternateEmoji;
        if (alternateEmoji == '😀') {
          alternateEmoji = '👻';
        } else {
          alternateEmoji = '😀';
        }
        index += 1;
      }

      // determine which repeating emoji to use for that row
      repeatingEmoji = alternateEmoji;

      // determine at which index to stop repeating emojis for that row
      indexToStopRepeatingEmojis = (column + 1);

      while (index < indexToStopRepeatingEmojis) {
      // print the bottom borders of the squares
        myOutputValue += repeatingEmoji;
        index += 1;
      }

      while (index < dimensions) {
      // to print the alternating emojis to the right side of the square border
        if (alternateEmoji == '😀') {
          alternateEmoji = '👻';
        } else {
          alternateEmoji = '😀';
        }
        myOutputValue += alternateEmoji;
        index += 1;
      }
      myOutputValue += '<br>';
      row += 1;
      column += 1;
    }
  } else {
    // rings game logic for odd dimensions
    while (row < (Math.floor(dimensions / 2))) {
      // print the emojis for the upper half rows
      alternateEmoji = '😀';
      repeatingEmoji = '😀';
      index = 0;
      indexToStopAlternatingEmojis = column;
      while (index < indexToStopAlternatingEmojis) {
        // print the alternating emojis on the left side of the borders
        myOutputValue += alternateEmoji;
        if (alternateEmoji == '😀') {
          alternateEmoji = '👻';
        } else {
          alternateEmoji = '😀';
        }
        index += 1;
      }

      // determine which repeating emoji to use for that row
      repeatingEmoji = alternateEmoji;

      // determine at which index to stop repeating emojis for that row
      indexToStopRepeatingEmojis = (dimensions - column);

      while (index < indexToStopRepeatingEmojis) {
        // print the top borders of the squares
        myOutputValue += repeatingEmoji;
        index += 1;
      }

      while (index < dimensions) {
        // to print the alternating emojis to the right side of the square border
        if (alternateEmoji == '😀') {
          alternateEmoji = '👻';
        } else {
          alternateEmoji = '😀';
        }
        myOutputValue += alternateEmoji;
        index += 1;
      }
      myOutputValue += '<br>';
      row += 1;
      column += 1;
    }

    console.log('you are at column index: ' + column);

    // print alternating emojis for middle row
    index = 0;
    alternateEmoji = '😀';
    while (index < dimensions) {
      myOutputValue += alternateEmoji;
      if (alternateEmoji == '😀') {
        alternateEmoji = '👻';
      } else {
        alternateEmoji = '😀';
      }
      index += 1;
    }
    myOutputValue += '<br>';
    row += 1;
    column += 1;
    console.log('you are at column index: ' + column);

    indexToStopAlternatingEmojis = (column - 1);
    while (row < dimensions) {
      // print emojis for lower half rows
      alternateEmoji = '😀';
      repeatingEmoji = '😀';
      index = 0;
      indexToStopAlternatingEmojis -= 1;
      while (index < indexToStopAlternatingEmojis) {
        // print the alternating emojis on the left side of the borders
        myOutputValue += alternateEmoji;
        if (alternateEmoji == '😀') {
          alternateEmoji = '👻';
        } else {
          alternateEmoji = '😀';
        }
        index += 1;
      }

      // determine which repeating emoji to use for that row
      repeatingEmoji = alternateEmoji;

      // determine at which index to stop repeating emojis for that row
      indexToStopRepeatingEmojis = (column + 1);

      while (index < indexToStopRepeatingEmojis) {
        // print the bottom borders of the squares
        myOutputValue += repeatingEmoji;
        index += 1;
      }

      while (index < dimensions) {
        // to print the alternating emojis to the right side of the square border
        if (alternateEmoji == '😀') {
          alternateEmoji = '👻';
        } else {
          alternateEmoji = '😀';
        }
        myOutputValue += alternateEmoji;
        index += 1;
      }
      myOutputValue += '<br>';
      row += 1;
      column += 1;
    }
  }
  return myOutputValue;
};

// center square function
var getCenterSquare = function (dimensions) {
  var rowCounter = 0;
  var columnCounter;
  var myOutputValue = '';
  var checkInput = dimensions;
  var getCanPlayOrNot = function () {
    var result = checkInput % 2;
    var answer;
    if (result == 1) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    return answer;
  };
  var canPlayOrNot = getCanPlayOrNot();

  if (canPlayOrNot == 'no') {
  // cannot play game
    myOutputValue = 'Please enter an odd number dimension.';
  } else if (canPlayOrNot == 'yes') {
  // can play game
  // to determine which column and row is center of square
    var centerOfSquare = ((parseInt(dimensions) + 1) / 2) - 1;
    console.log(centerOfSquare);

    // logic for drawing the square
    while (rowCounter < dimensions) {
      columnCounter = 0;
      // prints border of square
      if (rowCounter == 0 || rowCounter == (dimensions - 1)) {
        while (columnCounter < dimensions) {
          myOutputValue += '😀';
          columnCounter += 1;
        }
      } else {
      // prints inside of square
        while (columnCounter < dimensions) {
          if (columnCounter == 0 || columnCounter == (dimensions - 1)) {
            myOutputValue += '😀';
            columnCounter += 1;
          } else if (columnCounter == centerOfSquare && rowCounter == centerOfSquare) {
          // prints center of square
            myOutputValue += '😏';
            columnCounter += 1;
          } else {
            myOutputValue += '👻';
            columnCounter += 1;
          }
        }
      }
      myOutputValue += '<br>';
      rowCounter += 1;
    }
  }
  return myOutputValue;
};

// outline square function
var getOutlineSquare = function (dimensions) {
  var rowCounter = 0;
  var columnCounter;
  var myOutputValue = '';
  // game logic for outline square
  while (rowCounter < dimensions) {
    columnCounter = 0;
    if (rowCounter == 0 || rowCounter == (dimensions - 1)) {
      while (columnCounter < dimensions) {
        myOutputValue += '😀';
        columnCounter += 1;
      }
    } else {
      while (columnCounter < dimensions) {
        if (columnCounter == 0 || columnCounter == (dimensions - 1)) {
          myOutputValue += '😀';
          columnCounter += 1;
        } else {
          myOutputValue += '👻';
          columnCounter += 1;
        }
      }
    }
    myOutputValue += '<br>';
    rowCounter += 1;
  }
  return myOutputValue;
};

// upside down triangle function
var getUpsideDownTriangle = function (dimensions) {
  var rowCounter = 0;
  var columnCounter = dimensions;
  var numOfColumns;
  var myOutputValue = '';
  // game logic for upside down triangle
  while (rowCounter < dimensions) {
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

// triangle function
var getTriangle = function (dimensions) {
  var rowCounter = 0;
  var columnCounter;
  var myOutputValue = '';
  var numOfColumns;
  while (rowCounter < dimensions) {
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

// square function
var getSquare = function (dimensions) {
  var rowCounter = 0;
  var columnCounter;
  var myOutputValue = '';
  while (rowCounter < dimensions) {
    columnCounter = 0;
    while (columnCounter < dimensions) {
      myOutputValue += '😀';
      columnCounter += 1;
    }
    myOutputValue += '<br>';
    rowCounter += 1;
  }
  return myOutputValue;
};

// number of characters function
var getNumberOfCharacters = function (dimensions) {
  var counter = 0;
  var myOutputValue = '';
  while (counter < dimensions) {
    myOutputValue += '😊';
    counter += 1;
  }
  return myOutputValue;
};

// Initial mode when brower loads
var mode = 'game choosing mode';

var main = function (input) {
  var myOutputValue;
  // changing the mode according to what the user wants
  if (mode == 'game choosing mode') {
    if (input == 'number of characters') {
      mode = 'number of characters';
    } else if (input == 'square') {
      mode = 'square';
    } else if (input == 'triangle') {
      mode = 'triangle';
    } else if (input == 'upside down triangle') {
      mode = 'upside down triangle';
    } else if (input == 'outline square') {
      mode = 'outline square';
    } else if (input == 'center square') {
      mode = 'center square';
    } else if (input == 'rings') {
      mode = 'rings';
    }

    myOutputValue = 'please enter number of dimensions';
  } else if (mode == 'number of characters') {
    var numberOfCharacters = getNumberOfCharacters(input);
    myOutputValue = numberOfCharacters;
  } else if (mode == 'square') {
    var square = getSquare(input);
    myOutputValue = square;
  } else if (mode == 'triangle') {
    var triangle = getTriangle(input);
    myOutputValue = triangle;
  } else if (mode == 'upside down triangle') {
    var upsideDownTriangle = getUpsideDownTriangle(input);
    myOutputValue = upsideDownTriangle;
  } else if (mode == 'outline square') {
    var outlineSquare = getOutlineSquare(input);
    myOutputValue = outlineSquare;
  } else if (mode == 'center square') {
    var centerSquare = getCenterSquare(input);
    myOutputValue = centerSquare;
  } else if (mode == 'rings') {
    var rings = getRings(input);
    myOutputValue = rings;
  }

  return myOutputValue;
};
