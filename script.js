// ----------------------------------------
// Let's Draw V1 (Number of Characters)
// ----------------------------------------

var main = function (input) {
  var myOutputValue = "Let's draw: <br>";

  // Continue to add 👍 to myOutputValue as long as `i` is not more than the input number
  for (var i = 0; i < input; i += 1) {
    myOutputValue += '👍';
  }

  return myOutputValue;
};
