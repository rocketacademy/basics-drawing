// Please declare functions and variables above where they are used.
//Mode1 = Shape
//Mode2 = Dimension

var inputMode = 'shape';
var selectedShape = '';
var selectedDimension = 0;

var main = function (input) {
  var myOutputValue = '';
  var outerCounter;
  var innerCounter;

  if (inputMode == 'shape') {
    selectedShape = input;
    myOutputValue = 'hi, you have chosen to draw a ' + selectedShape + '. now enter your preferred dimension <br>';
    inputMode = 'dimension';
  } else if (inputMode == 'dimension') {
    selectedDimension = input;

    if (selectedShape == 'square') {
      outerCounter = 0;
      while (outerCounter < selectedDimension) {
        innerCounter = 0;
        while (innerCounter < selectedDimension) {
          myOutputValue = myOutputValue + '👍';

          innerCounter = innerCounter + 1;
        }
        myOutputValue = myOutputValue + '<br>';
        outerCounter = outerCounter + 1;

      }
    }
    if (selectedShape == 'triangle') {
      outerCounter = 0;
      while (outerCounter < selectedDimension) {
        innerCounter = -1;
        while (innerCounter < outerCounter) {
          myOutputValue = myOutputValue + '👍';

          innerCounter = innerCounter + 1;
        }
        myOutputValue = myOutputValue + '<br>';
        outerCounter = outerCounter + 1;
      }
    }
    if (selectedShape == 'upside down triangle') {
      outerCounter = selectedDimension;
      while (outerCounter != 0) {
        innerCounter = 0;
        while (innerCounter < outerCounter) {
          myOutputValue = myOutputValue + '👍';

          innerCounter = innerCounter + 1;
        }
        myOutputValue = myOutputValue + '<br>';
        outerCounter = outerCounter - 1;
      }
    }
    if (selectedShape == 'outline square') {
      outerCounter = 0;
      while (outerCounter < selectedDimension) {
        innerCounter = 0;
        while (innerCounter < selectedDimension) {
          myOutputValue = myOutputValue + '👍';

          innerCounter = innerCounter + 1;
        }
        myOutputValue = myOutputValue + '<br>';
        outerCounter = outerCounter + 1;

      }
    }
  }
  return myOutputValue;
};
