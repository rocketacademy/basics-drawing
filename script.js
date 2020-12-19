//  NUMBER OF CHARACTERS
var counter = 0;

var main = function (input) {
  var myOutputValue = '';

  while (counter < input) {
    myOutputValue = myOutputValue + '👍';
    counter = counter + 1;
    console.log(counter);
  }
  console.log(myOutputValue);
  return myOutputValue;
};

// SQUARE EXERCISE
var main = function (input) {
  var myOutputValue = '';
  var lineCounter = 0;

  while (lineCounter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      myOutputValue = myOutputValue + '👍';
      console.log(myOutputValue + 'inner');
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    lineCounter = lineCounter + 1;
  }
  console.log(myOutputValue + 'outer');
  return myOutputValue;
};

// TRIANGLE EXERCISE
var main = function (input) {
  var myOutputValue = '';
  var lineCounter = 0;

  while (lineCounter < input) {
    var columnCounter = 0;
    while (columnCounter < lineCounter) {
      myOutputValue = myOutputValue + '👍';
      console.log(myOutputValue + 'inner');
      columnCounter = columnCounter + 1;
    }
    lineCounter = lineCounter + 1;
    myOutputValue = myOutputValue + '👍<br>';
  }
  console.log(myOutputValue + 'outer2');
  return myOutputValue;
};

// OUTLINE SQUARE EXERCISE
var main = function (input) {
  var lineCounter = 0;

  while (lineCounter < input) {
    var myOutputValue = '✊✊✊✊';
    var columnCounter = 0;
    while (columnCounter < input) {
      if (columnCounter == 1 || columnCounter == 2) {
        myOutputValue = myOutputValue + '✊👍👍✊';
      }
      if (columnCounter == 3) {
        myOutputValue = myOutputValue + '✊✊✊✊';
      }
      console.log(myOutputValue + 'inner');
      columnCounter = columnCounter + 1;
      myOutputValue = myOutputValue + '<br>';
    }
    console.log(myOutputValue + 'outer');
    lineCounter = lineCounter + 1;
    return myOutputValue;
  }
};
