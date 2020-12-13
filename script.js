//initialize state for question:
var stateOfProgram = 'question selection'; // 1) starts with input of question followed by 2) number of characters

var main = function (input) {
  var myOutputValue = '';



  //First Input on selection of question:
  if (input == '1' && stateOfProgram == 'question selection') {
    myOutputValue = 'Enter a number to draw!'
    stateOfProgram = 'numOfCharacters';

  } else if (input == '2' && stateOfProgram == 'question selection') {
    myOutputValue = 'Enter a number to draw!'
    stateOfProgram = 'square';

  } else if (input == '3' && stateOfProgram == 'question selection') {
    myOutputValue = 'Enter a number to draw!'
    stateOfProgram = 'triangle';

  } else if (input == '4' && stateOfProgram == 'question selection') {
    myOutputValue = 'Enter a number to draw!'
    stateOfProgram = 'outline square';

  } else if (stateOfProgram == 'numOfCharacters') {
    myOutputValue = numOfCharacter(input);

  } else if (stateOfProgram == 'square') {
    myOutputValue = square(input);

  } else if (stateOfProgram == 'triangle') {
    myOutputValue = triangle(input);

  } else if (stateOfProgram == 'outline square') {
    myOutputValue = outlineSquare(input);
  }

  return myOutputValue;

};

// Qn 1: Number of Characters
var numOfCharacter = function (input) {
  var characterCounter = 0;
  var outputDrawing = "";
  var inputNumber = Number(input);

  while (characterCounter < inputNumber) {
    outputDrawing = outputDrawing + '👍';
    console.log(outputDrawing);
    characterCounter += 1;
  };

  return outputDrawing;
}

// Qn 2: Square
var square = function (input) {
  var lineCounter = 0;
  var outputDrawing = "";
  var inputNumber = Number(input);

  while (lineCounter < inputNumber) {
    var characterCounter = 0;

    while (characterCounter < inputNumber) {
      outputDrawing = outputDrawing + '👍';
      characterCounter += 1;
    };
    outputDrawing = outputDrawing + '<br>';
    lineCounter += 1;
  }
  return outputDrawing;
}

// Qn 3: triangle
var triangle = function (input) {
  var lineCounter = 0;
  var inputNumber = Number(input);
  var outputResult = "";

  while (lineCounter < inputNumber) {
    lineCounter += 1;

    console.log('lineCounter is ' + lineCounter);

    var characterCounter = 0;
    var outputDrawing = "";

    while (characterCounter < lineCounter) {
      outputDrawing = outputDrawing + '👍';
      characterCounter += 1;
    }
    outputResult = outputResult + outputDrawing + '<br>';

    console.log('break is added');
    console.log('outputResult is ' + outputResult);

  }
  return outputResult;
};

// Qn 4: outline square
var outlineSquare = function (input) {
  var lineCounter = 0;
  var outputDrawing = "";
  var inputNumber = Number(input);


  while (lineCounter < inputNumber) {
    var characterCounter = 0;

    //If lineCounter = 0 or lineCounter is the last line, print only fists
    if (lineCounter == 0 || lineCounter == inputNumber - 1) {
      while (characterCounter < inputNumber) {
        outputDrawing = outputDrawing + '✊';
        characterCounter += 1;
      };

      outputDrawing = outputDrawing + '<br>';

      //else the lines being printed are the middle segments
    } else {
      //start the outputDrawing with a fist first
      outputDrawing = outputDrawing + '✊';

      //no matter the size, the inner lines will always have exactly 2 fists. Hence the number of inner thumbs up are exactly inputNumber - 2;

      while (characterCounter < inputNumber - 2) {
        outputDrawing = outputDrawing + '👍';
        characterCounter += 1;
      }
      //end the outputDrawing with a fist and a break
      outputDrawing = outputDrawing + '✊' + '<br>';
    }
    //increment the lineCounter to start printing the next line
    lineCounter += 1;
  }

  return outputDrawing;
}

//Qn 5: Triangles within Square


//👍
//✊


//👍✊✊
//👍👍✊
//👍👍👍

//✊✊✊✊
//👍✊✊✊
//👍👍✊✊
//👍👍👍✊