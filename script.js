// Please declare functions and variables above where they are used.

var main = function (input) {
  var myOutputValue = '';
  var counter = 0;
  while (counter < input) {
    // var innerCounter = 0;
    // while (innerCounter < input) {
    //   myOutputValue += '😀';
    //   innerCounter += 1;
    // }
    counter += 1;
    myOutputValue += '<br>';
  }
  // returning output
  return myOutputValue;
};
