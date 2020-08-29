// Please declare functions and variables above where they are used.
// Rings, Center Square, Outline Square, Upside down triangle, Square
var selectedShape = '';
var selectedDimension = 0;
var inputMode = 'Choose';
var outerCounter;
var innerCounter;
var myOutputValue = '';

var main = function (input) {
  if (inputMode == 'Choose') {
    if (input == 'square' || input == 'triangle' || input == 'upside down triangle') {
      selectedShape = input;
      myOutputValue = 'hi, you have chosen to draw a ' + selectedShape + '. Please enter dimensions <br>';
      inputMode = 'dimension';
    } else {
      myOutputValue = 'Please input one of the choices: <br>square<br>triangle<br>upside down triangle<br>';
    }
  } else if (inputMode == 'dimension') {
    myOutputValue = '';
    if (selectedShape == 'square') {
      selectedDimension = input;
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
    } if (selectedShape == 'triangle') {
      selectedDimension = input;
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
      selectedDimension = input;
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
      selectedDimension = input;
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
