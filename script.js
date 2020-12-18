// ----------------------------------------
// Let's Draw V3 (Triangle)
// ----------------------------------------

var main = function (input) {
  var myOutputValue = "Let's draw: <br>";
  // Initialise main counter to 0
  var counter = 0;

  // Run this outer loop as long as counter is less than the user input
  while (counter < input) {
    // Initialise an inner counter for the inner while loop
    // This is initialised to 0 every time we come out of the inner loop
    var innerCounter = 0;

    // As long as counter for inner loop is less than main counter, add 👍 to myOutputValue
    // For the first run, it will immediately jump to lines 24 & 25
    while (innerCounter < counter) {
      myOutputValue += '👍';
      // Add 1 to inner counter to exit this inner loop and move back to the main loop
      innerCounter += 1;
    }

    // This is part of the outer while loop & adds a <br> everytime we exit the inner loop
    myOutputValue += '<br>';
    // Add 1 to main counter to get closer to user input each time & fulfil the condition
    // so as to close the outer while loop
    counter += 1;
  }

  return myOutputValue;
};
