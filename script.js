// CHARACTER
var numOfCharacters = function (input) {
  var myOutputValue = '';
  var counter = 0;
  while (counter < input) {
    myOutputValue += '👍';
    counter += 1;
  }
  return myOutputValue;
};

// SQUARE
var square = function (input) {
  var myOutputValue = '';
  // each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    // add 👍 n amount of times then exit to outer loop
    while (innerCounter < sideLength) {
      myOutputValue += '👍';
      innerCounter += 1;
    }
    // insert a break then enter inner loop n amount of times
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

// TRIANGLE
var triangle = function (input) {
  var myOutputValue = '';
  // each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    console.log('while outerCounter ' + outerCounter + ' < ' + 'input ' + sideLength);
    var innerCounter = 0;
    // add 👍 n amount of times then exit to outer loop
    while (innerCounter <= outerCounter) {
      console.log('while innerCounter ' + innerCounter + ' <= ' + 'outerCounter ' + outerCounter);
      myOutputValue += '👍';
      innerCounter += 1;
    }
    // insert a break then enter inner loop n amount of times
    myOutputValue += '<br>';
    console.log('break');
    outerCounter += 1;
  }
  return myOutputValue;
};

// OUTLINE SQUARE (Before see-ing solution)
var outlineSquare = function (input) {
  var myOutputValue = '';
  // each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    // add ✊ n amount of times then exit to outer loop
    while (innerCounter < sideLength) {
      if ((outerCounter == 0 || outerCounter == sideLength - 1)) {
        myOutputValue += '✊';
      } else if ((innerCounter >= 1 && innerCounter <= sideLength - 2)) {
        myOutputValue += '👍';
      } else {
        myOutputValue += '✊';
      }
      innerCounter += 1;
    }
    // insert a break then enter inner loop n amount of times
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

var outlineSquare2 = function (input) {
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    while (innerCounter < sideLength) {
      // If current iteration represents a border element, draw ✊ instead.
      if (outerCounter == 0 || outerCounter == sideLength - 1
        || innerCounter == 0 || innerCounter == sideLength - 1) {
        myOutputValue += '✊';
      } else {
        // Add a 👍 to the current row
        myOutputValue += '👍';
      }

      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/* ----------------------------------------------------------- */
/* ------------------MAIN FUNCTION---------------------------- */
/* ----------------------------------------------------------- */
var main = function (input) {
  var myOutputValue = '';
  myOutputValue = outlineSquare2(input);
  return myOutputValue;
};
