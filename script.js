// Please declare functions and variables above where they are used.

var mode = "";

var main = function (input) {
  var myOutputValue = "";
  if (mode == "") {
    mode = input;
    myOutputValue = "you are in mode: " + mode;
  } else if (mode == "triangle") {
    myOutputValue = triangleMode(input);
  } else if (mode == "square") {
    myOutputValue = squareMode(input);
  }
  return myOutputValue;
};

//triangle mode based on dimension input
var triangleMode = function (input) {
  var myOutputValue = "";
  var lineCounter = 0
  while (lineCounter < input) {
    var columnCounter = 0;
    while (columnCounter < (lineCounter + 1)) {
      myOutputValue = myOutputValue + "😀"
      console.log("2" + myOutputValue);
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>'
    console.log("3" + myOutputValue);
    lineCounter = lineCounter + 1;
  }
  return myOutputValue;
}

//square mode based on dimension input
var squareMode = function (input) {
  var myOutputValue = "";
  var lineCounter = 0
  while (lineCounter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      myOutputValue = myOutputValue + "😀";
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    lineCounter = lineCounter + 1;
  }
  return myOutputValue;
}