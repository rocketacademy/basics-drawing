// Please declare functions and variables above where they are used.



// Setting a counter to limit the amount of times we loop
var gameMode = 'waiting for selection';
var triangleCounter = 1;
var outerCounter = 0;
var myOutputValue = '';
var selection = ';'
var upsideDownCounter = 0;

var main = function (input) {
  if (gameMode == 'waiting for selection') {
    gameMode = input;
    myOutputValue = 'You chose the ' + gameMode + ' game mode.<br>';
  } else if (gameMode == 'default') {
    while (outerCounter < input) {
      // Adding a thumbs up emoji to output
      myOutputValue = myOutputValue + '👍';
      //  Increasing counter by 1
      outerCounter = outerCounter + 1;
    }
  } else if (gameMode == 'square') {
    while (outerCounter < input) {
      // declaring inntercounter here  is important as we need it's value to reset everytime the function runs
      var innerCounter = 0;

      while (innerCounter < input) {
        myOutputValue = myOutputValue + '👍';
        innerCounter = innerCounter + 1;
      };
      // Adding a <br> tag after the innerCounter ensures only one <br> tag per line of emojis
      myOutputValue = myOutputValue + '<br>';
      outerCounter = outerCounter + 1;
    };
  } else if (gameMode == 'triangle') {
    while (outerCounter < input) {
      // Declaring lineCounter here allows us to incrementally add more emojis per line before each <br> tag
      var lineCounter = 0;
      while (lineCounter < triangleCounter) {

        myOutputValue = myOutputValue + '👍';
        lineCounter = lineCounter + 1;
      };
      triangleCounter = triangleCounter + 1;
      outerCounter = outerCounter + 1;
      myOutputValue = myOutputValue + '<br>';
    };
  } else if (gameMode == 'upsidedown') {
    var lineCounter = input;
    while (outerCounter < input) {
      var extraCounter = 0;
      while (extraCounter < lineCounter) {
        myOutputValue = myOutputValue + '👍';
        extraCounter = extraCounter + 1;
      };
      lineCounter = lineCounter - 1;
      outerCounter = outerCounter + 1;
      myOutputValue = myOutputValue + '<br>';
    };
  }

  return myOutputValue;
};


// This is the solution for Square
/*
var main = function (input) {

  var outerCounter = 0;
  var myOutputValue = '';

  while (outerCounter < input) {
    // declaring inntercounter here  is important as we need it's value to reset everytime the function runs
    var innerCounter = 0;

    while (innerCounter < input) {
      myOutputValue = myOutputValue + '👍';
      innerCounter = innerCounter + 1;
    };
    // Adding a <br> tag after the innerCounter ensures only one <br> tag per line of emojis
    myOutputValue = myOutputValue + '<br>';
    outerCounter = outerCounter + 1;
  };
  return myOutputValue;
};
*/

// This is the solution for Triangle

/*
var main = function (input) {
  // brCounter is the variable to manipulate the number of emojis before each <br> tag
  var brCounter = 1;
  var outerCounter = 0;
  var myOutputValue = '';

  while (outerCounter < input) {
    // Declaring lineCounter here allows us to incrementally add more emojis per line before each <br> tag
    var lineCounter = 0;
    while (lineCounter < brCounter) {

      myOutputValue = myOutputValue + '👍';
      lineCounter = lineCounter + 1;
    };
    brCounter = brCounter + 1;
    outerCounter = outerCounter + 1;
    myOutputValue = myOutputValue + '<br>';
  };

  return myOutputValue;
};
*/
