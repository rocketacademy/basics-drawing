// ----------------------------------------
// Let's Draw V4 (Outline Square)
// ----------------------------------------

var main = function (input) {
  var myOutputValue = "Let's draw: <br><br>";
  var counter = 0;

  // As long as counter is less than input, run this loop
  while (counter < input) {
    var innerCounter = 0;
    // As long as inner counter is less than input, run this loop
    while (innerCounter < input) {
      /* We get the middle of the square by the following:
       ( 1st column ||  The middle of top row (excl. 1st & last) || Last column || The middle of bottom row (excl .1st & last) */
      if (innerCounter == 0 || counter == 0 || innerCounter == input - 1 || counter == input - 1) {
        myOutputValue += '✊';
      } else {
        myOutputValue += '👍';
      }
      // Update inner counter to exit inner loop to add <br> to go to next line of drawing
      innerCounter += 1;
    }
    myOutputValue += '<br>';
    counter += 1;
  }
  return myOutputValue;
};
