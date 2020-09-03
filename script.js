// Please declare functions and variables above where they are used.
//define global variable for shapeInput to store data across all functions
var shapeInput;

var numberOfCharacters = function (input) {
  var counter = 0;
  var myOutputValue = '';
  while (counter < input) {
    myOutputValue = myOutputValue + '👍';
    counter = counter + 1;
  }
  return myOutputValue;
}

var square = function (input) {
  var myOutputValue = '';
  var dimensions = Number(input);
  var lineCounter = 0;
  while (lineCounter < dimensions) {
    var columnCounter = 0;
    while (columnCounter < dimensions) {
      myOutputValue = myOutputValue + '👍';
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    lineCounter = lineCounter + 1;
  }
  return myOutputValue;
}

var triangle = function (input) {
  var myOutputValue = '';
  var dimensions = Number(input);
  var lineCounter = 0;
  while (lineCounter < dimensions) {
    var columnCounter = 0;
    while (columnCounter < lineCounter) {
      myOutputValue = myOutputValue + '👍';
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    lineCounter = lineCounter + 1;
  }
  return myOutputValue;
}

var main = function (input) {
  //get user input for either square or triangle
  if (input == 'square' || input == 'triangle') {
    shapeInput = input;
    console.log(shapeInput);
    return 'You have entered ' + shapeInput + ' . Please enter the dimensions.';
  }
  //once user inputs shape or square, user would next input dimensions
  var dimensions = Number(input);
  console.log(dimensions);
  //if use inputs square, call square function with dimensions entered by user
  if (shapeInput === 'square') {
    return square(dimensions);
  }
  //if use inputs triangle, call triangle function with dimensions entered by user
  if (shapeInput === 'triangle') {
    return triangle(dimensions);
  }
}

var upsideDownTriangle = function (input) {
  var myOutputValue = '';
  var length = Number(input);
  var columnCounter = 0;
  while (columnCounter < lineCounter) {
    var lineCounter = 0;
    while (lineCounter < length - columnCounter) {
      myOutputValue += '👍';
      columnCounter += 1;
    }
    myOutputValue = myOutputValue + '👍';
    counter = counter + 1;
  }
  return myOutputValue;
};

var outlineSquare = function (input) {
  var myOutputValue = '';
  var length = Number(input);
  var outerCounter = 0;
  while (outerCounter < length) {
    var innerCounter = 0;
    while (innerCounter < length) {
      if (outerCounter == 0 || outerCounter == length - 1
        || innerCounter == 0 || innerCounter == length - 1) {
        myOutputValue = myOutputValue + '✊';
      } else {
        myOutputValue = myOutputValue + '👍';
      }
      innerCounter = innerCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    outerCounter = outerCounter + 1;
  }
  return myOutputValue;
};
//i gave up doing rings :( but will look thru the solution proivided