var main = function (input) {

  // if we arent at the beggining or ending row or
  // center for odd number:

  // to draw a straight line for the top
  // of a box for an inner box,
  // find where the left corner of the box
  // begins and stop alternating chars
  // and find the right corner of the box and
  // begin alternating again

  // otherwise, alternate beggining with the 1st char at the left edge

  // right
  // aaaaaaa 
  // abbbbbA col == size - row -- 6 == 7 - 1 // top: switch back to 1st char
  // abaaaBa col == size - row -- 5 == 7 - 2
  // abababa
  // abaaaba
  // abbbbBa col == row // bottom: switch back to 1st char
  // aaaaaaa

  // left
  // aaaaaaa
  // aBbbbba col == row // top: switch to 2nd char
  // abaaaba
  // abababa
  // aBaaaba col + 1 == size - row -- 2 == 7 - 4 // bottom: switch to 2nd char
  // aBbbbba col + 1 == size - row -- 1 == 7 - 5
  // aaaaaaa

  var out = '';
  var size = input;

  var printSmiley;
  var alternate;
  var rowPosition = 'top'

  var rowCounter = 0;

  while (rowCounter < size) {

    var row = rowCounter;

    alternate = true;

    // only flip this once when we've gone past the center row
    if (row > Math.floor(size / 2)) {
      rowPosition = 'bottom'
    }

    var columnCounter = 0;

    while (columnCounter < size) {

      var col = columnCounter;

      // top and bottom
      if (row == 0 || row == size - 1) {
        alternate = false;
        printSmiley = true;

      // center
      } else if (row == (Math.floor(size / 2))) {

        // center if even
        if (size % 2 == 0 && col == (size - row)) {
          alternate = true;
          printSmiley = !printSmiley;
        }

      // upper left
      } else if (rowPosition == 'top' && col == row) {
        alternate = false;

      // lower right
      } else if (rowPosition == 'bottom' && col == row) {
        alternate = true;

      // lower left
      } else if (rowPosition == 'bottom' && col + 1 == size - row) {
        alternate = false;

      // upper right
      } else if (rowPosition == 'top' && col == (size - row) && alternate == false) {
        alternate = true;
        // flip it back, bc we are back to alternating. but alternate wont happen until later
        printSmiley = !printSmiley;
      }

      if (printSmiley) {
        out = out + '😁';
      } else {
        out = out + '♥️';
      }

      // alternate by switching character
      if (alternate == true) {
        printSmiley = !printSmiley;
      }
      columnCounter = columnCounter + 1;
    }

    // end of line
    out = out + '<br>';

    // reset character to left edge
    printSmiley = true;
    rowCounter = rowCounter + 1;
  }

  return out;
};
