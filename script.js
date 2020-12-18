// ----------------------------------------
// Let's Draw V2 (Square)
// ----------------------------------------

var main = function (input) {
  var myOutputValue = "Let's draw: <br>";
  // Initialise main counter
  var counter = 0;

  // Keep running this loop as long as the counter is less than then number input
  while (counter < input) {
    // Initialise counter for the inner loop, within while loop
    var innerCounter = 0;

    // Keep running this inner loop as long as it also less than than number input
    while (innerCounter < input) {
      // While in this loop, keep adding 👍 input - 1 number of times
      myOutputValue += '👍';
      // We update this innerCounter by adding 1 so we do not get stuck in an infinite loop
      // this will help the innerCounter to be greater than the input at some point
      // breaking us out of the current immediate while loop
      innerCounter += 1;
    }
    // Once broken out of the inner while loop, add a break to go to the next line
    myOutputValue += '<br>';
    // Likewise, this counter is updated to break out of the main loop
    counter += 1;
  }

  return myOutputValue;
};
