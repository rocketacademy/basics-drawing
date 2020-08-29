/* eslint-disable yoda */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable brace-style */
/* eslint-disable space-in-parens */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
// User can enter the shape to draw
// Later, user can enter the dimension of the shape

// constant variables representing the type of shapes that are supported by the game
var shapePutCharacters = 1;
var shapeSquare = 2;
var shapeTriangle = 3;
var shapeUpsideDownTriangle = 4;
var shapeOutlineSquare = 5;
var shapeCenterSquare = 6;
var shapeRings = 7;

var shapeMode = 0; // Selected mode by the user
var shapeDimension = 0; // Dimension of the shape given by the user

var symbolPineapple = '&#x1F34D';
var symbolCherries = '&#x1F352';
var symbolMushroom = '&#x1F344';
var symbolCandy = '&#x1F36C';
var symbolPear = '&#x1F350';
var symbolMelon = '&#x1F348';
var symbolPeach = '&#x1F351';
var arraySymbols = [symbolCandy, symbolMelon, symbolMushroom, symbolPeach, 
  symbolPear, symbolPineapple, symbolCherries];


var printShapeInputMessage = function () {
  var varMessage = 'Please input one of the following values to select a shape to draw: <br/>';
  varMessage += 'Enter ' + shapePutCharacters + ' to display the number of characters <br/>';
  varMessage += 'Enter ' + shapeSquare + ' to draw Square <br/>';
  varMessage += 'Enter ' + shapeTriangle + ' to draw Triangle <br/>';
  varMessage += 'Enter ' + shapeUpsideDownTriangle + ' to draw Upside down Triangle <br/>';
  varMessage += 'Enter ' + shapeOutlineSquare + ' to draw Outline Square <br/>';
  varMessage += 'Enter ' + shapeCenterSquare + ' to draw Center Square <br/>';
  varMessage += 'Enter ' + shapeRings + ' to draw Rings <br/>';
  return varMessage;
};

var printDimensionMessage = function () {
  var varMessage = 'Please input dimension of the shape';
  return varMessage;
};

var validateShapeInput = function (chosenShape) {
  console.log('Shape input = ' + chosenShape);

  if ((chosenShape <= 0) || (chosenShape > shapeRings)) {
    return false;
  }
  shapeMode = chosenShape;
  return true;
};

// Function to print the characters till the number of times the user specified
var printNumberOfCharacters = function () {
  var returnCharacter = '';

  while (shapeDimension > 0) {
    returnCharacter += symbolPineapple + ' ';
    shapeDimension -= 1;
  }
  console.log('Shape Dimension: ' + shapeDimension);
  console.log(returnCharacter);

  return returnCharacter;
};

// Function to print the shape of a square with the given dimension
var printSquare = function () {
  var returnSquare = '';
  var outerLoopCount = shapeDimension;
  while (outerLoopCount > 0) {
    // Variable for counting the dimension in the inner loop.
    // It will be reset at the start of every outer loop iteration
    // to the dimension specified by the user
    var innerLoopCount = shapeDimension;

    while (innerLoopCount > 0) {
      returnSquare += symbolCandy + ' ';
      innerLoopCount -= 1;
    }
    outerLoopCount -= 1;
    returnSquare += '<br/>'; // adding a new line break after each inner loop
  }
  return returnSquare;
};

// Function to print the shape of a triangle with the given dimension
var printTriangle = function () {
  var returnTriangle = '';
  var outerLoopCount = 0;
  // counting is started from zero, increasing to the given dimension
  while (outerLoopCount != shapeDimension) {
    var innerLoopCount = 0;
    while (innerLoopCount != (outerLoopCount + 1)) {
      returnTriangle += symbolMushroom + ' ';
      innerLoopCount += 1;
    }
    returnTriangle += '<br/>';
    outerLoopCount += 1;
  }
  return returnTriangle;
};

// Function to print the characters in the form of upside down triangle
var printUpsideDownTriangle = function () {
  var returnUpsideDownTriangle = '';
  var outerLoopCount = shapeDimension;
  // counting starts from the given dimension decreasing to 0
  while (outerLoopCount > 0) {
    var innerLoopCount = outerLoopCount;
    while (innerLoopCount > 0) {
      returnUpsideDownTriangle += symbolCandy + ' ';
      innerLoopCount -= 1;
    }
    returnUpsideDownTriangle += '<br/>';
    outerLoopCount -= 1;
  }
  return returnUpsideDownTriangle;
};

/* Function to print the outline Sqaure
 Logic: If index is given by i,
 a new character starts at the cell (i, i ) to the right upto (i, n-1-i)
                      to the bottom (n-1-i, i) to the right upto (n-1-i, n-1-i)
where n is the dimension of the square requested
 So, a sqaure for one character will be between:
      (i, i )   ----------------------------- (i, n-1-i)
      (i+1, i)  ----------------------------- (i+1, n-1-i)
                -----------------------------
                 ----------------------------
      (n-1-i, i) ---------------------------- (n-1-i, n-1-i)
*/
var printOutlineSqaure = function () {
  var returnOutlineSqare = '';
  // Calculating the number of outline squares according to the dimension give.
  var numOfOutlineSquares = Math.floor(shapeDimension / 2);
  if ( shapeDimension % 2 != 0)
  {
    numOfOutlineSquares += 1;
  }
  console.log('numOfOutlineSquares: ' + numOfOutlineSquares);
  // Filling the symbols array for later distribution in squares
  var allSymbols = [];
  var temLoopCount = Math.floor(numOfOutlineSquares / arraySymbols.length);
  temLoopCount += ( ( numOfOutlineSquares % arraySymbols.length) != 0) ? 1 : 0;
  console.log( 'temLoopCount: ' + temLoopCount );
  while ( temLoopCount > 0)
  {
    allSymbols = allSymbols.concat( arraySymbols);
    temLoopCount -= 1;
  }
  if ( allSymbols.length > numOfOutlineSquares)
  {
    var diff = allSymbols.length - numOfOutlineSquares;
    while ( diff > 0)
    {
      allSymbols.pop();
      diff -= 1;
    }
  }
  console.log('allSymbols.length: ', allSymbols.length);
  console.log( 'arraySymbols.length: ', arraySymbols.length);

  // Make a 2D array for storing all the outputs
  var arrayOutput = [];
  var arraySize = 0;
  while( arraySize < shapeDimension )
  {
    arrayOutput[arraySize] = [];
    arraySize += 1;
  }
  console.table(arrayOutput);

  // Filling the 2D array with symbols
  var outlineSquareIndex = 0;
  var symbolCounter = 0;
  var loopCount = numOfOutlineSquares;
  while( outlineSquareIndex < loopCount)  // Number of outline sqaures will the loop count
  {
    console.log('loopIndex: ', outlineSquareIndex);
    var symbol = allSymbols[symbolCounter];    
    //returnOutlineSqare += 'Symbol chosen: ' + symbol + '<br/>';

    var tempFirstRow = outlineSquareIndex;
    var tempLastRow = shapeDimension - 1 - tempFirstRow;
    var tempFirstColumn = tempFirstRow;
    var tempLastColumn = tempLastRow;

    console.log('tempFirstRow: ', tempFirstRow, 'tempLastRow: ', tempLastRow, 
      'tempFirstColumn: ', tempFirstColumn, 'tempLastColumn: ', tempLastColumn );

    // Fill the top row
    // (i, i )   ----------------------------- (i, n-1-i)
    var innerColIndex = tempFirstColumn;
    while( innerColIndex <= tempLastColumn)
    {
      console.log('cell: (', tempFirstRow, ', ', innerColIndex, ' ) - symbol:', symbol);
      arrayOutput[tempFirstRow][innerColIndex] = symbol;
      innerColIndex += 1;
    }
    console.log('<br/>');

    // Fill the bottom row:
    // (n-1-i, i) ---------------------------- (n-1-i, n-1-i)
    innerColIndex = tempFirstColumn;
    while( innerColIndex <= tempLastColumn)
    {
      console.log('cell: (', tempLastRow, ', ', innerColIndex, ' ) - symbol:', symbol);
      arrayOutput[tempLastRow][innerColIndex] = symbol;
      innerColIndex += 1;
    }
    console.log('<br/>');
      
    // Fill the leftmost column
    /*
    (i, i ) ....
    (i+1, i) ...
    ---------
    ---------
    (n-1-i, i) ...
    */
    var innerRowIndex = tempFirstRow;
    while( innerRowIndex <= tempLastRow)
    {
      console.log('cell: (', innerRowIndex, ', ', tempFirstColumn, ' ) - symbol:', symbol);
      arrayOutput[innerRowIndex][tempFirstColumn] = symbol;
      innerRowIndex += 1;
    }
    console.log('<br/>');

    // Fill the right most column
    /*
    ----- (i, n-1-i)
    ----- (i+1, n-1-i)
    -----
    -----
    ----- (n-1-i, n-1-i)
    */
    innerRowIndex = tempFirstRow;
    while( innerRowIndex <= tempLastRow)
    {
      console.log('cell: (', innerRowIndex, ', ', tempLastColumn, ' ) - symbol:', symbol);
      arrayOutput[innerRowIndex][tempLastColumn] = symbol;
      innerRowIndex += 1;
    }
    console.log('<br/>');
    console.log('<br/>');
    outlineSquareIndex += 1;  // Increment the loop count 
    symbolCounter += 1; // choose next symbol for next iteration
  }

  // Fill the return value with the values from the array
  arraySize = 0;
  while( arraySize < arrayOutput.length)
  {
    returnOutlineSqare += arrayOutput[arraySize].join( '' ) + '<br/>';
    arraySize += 1;
  }
  console.table(arrayOutput);
  return returnOutlineSqare;
};

// Function to handle the printing of outline sqaure with a different character in the middle
var printCentreSquare = function ()
{
  // If the given dimension is an even value a specific centre character is not possible
  if(( 0 == shapeDimension % 2 ))
  {
    return ('Given dimension ' + shapeDimension + ' is not allowed for Centre Square');
  }
  return printOutlineSqaure();
};

// Function to print concentric rings
var printConcentricRings = function ()
{
  var returnConcentricRings = '';
  var symbolArray = [symbolCherries, symbolPineapple];

  // Create array to store resulting structure
  // Size = dimension specified by the user
  // total number of cells = 2*size
  var arrayRing = [];
  var outerLoopCount = 0;
  var symbolIndex = 0;
  var centreIndex = Math.floor( shapeDimension / 2 );
  var bEven = false;
  if( 0 == shapeDimension % 2)
  {
    bEven = true;
  }
  console.log('centreIndex: ', centreIndex)
  var arrayCounter = 0;
  while( outerLoopCount < shapeDimension)
  {
    var innerLoopCount = 0;
    
    while (innerLoopCount < shapeDimension ) {    
      // if column index is equal to the centre index, put the symbol in that cell
      if((innerLoopCount == centreIndex) || (bEven &&(innerLoopCount == (centreIndex - 1)))||
        (outerLoopCount == centreIndex) || (bEven &&(outerLoopCount == (centreIndex - 1))))
      {
        console.log('cell: (',outerLoopCount, ', ', innerLoopCount ,') condition to insert symbol reached.');
        arrayRing[arrayCounter] = symbolArray[symbolIndex];
      }
      // else enter space in that position
      else
      {
        arrayRing[arrayCounter] = '';
      }
      arrayCounter += 1;
      innerLoopCount += 1;
    }
    outerLoopCount += 1;
    symbolIndex = Number(!symbolIndex);
  }

  console.log(arrayRing);

  var totalLoopCount = arrayRing.length / shapeDimension;
  var arrayIndex = 0;
  while( totalLoopCount != 0)
  {
    arrayCounter = 0;
    while( arrayCounter < shapeDimension)
    {
      returnConcentricRings += arrayRing[arrayIndex];
      arrayCounter += 1;
      arrayIndex += 1;
    }
    returnConcentricRings += '<br/>';
    totalLoopCount -= 1;
  }
  return returnConcentricRings;
};


var main = function (userInput) {
  if (shapeMode == 0) {
    if (!validateShapeInput(userInput)) {
      return printShapeInputMessage();
    }
    return printDimensionMessage();
  }
  shapeDimension = userInput;

  console.log('Shape Dimension: ' + shapeDimension);

  var outputValue = '';
  if (shapePutCharacters == shapeMode) {
    outputValue = printNumberOfCharacters();
  } else if (shapeSquare == shapeMode) {
    outputValue = printSquare();
  } else if (shapeTriangle == shapeMode) {
    outputValue = printTriangle();
  } else if (shapeUpsideDownTriangle == shapeMode) {
    outputValue = printUpsideDownTriangle();
  } else if (shapeOutlineSquare == shapeMode) {
    outputValue = printOutlineSqaure();
  } else if (shapeCenterSquare == shapeMode) {
    outputValue = printCentreSquare();
  } else if (shapeRings == shapeMode) {
   //outputValue = printConcentricRings();
    outputValue = 'Not yet implemented!!!. <br/> Please refresh the page to select another option. <br/><br/>';
    return outputValue;
  } else {
    return printShapeInputMessage();
  }
  outputValue += '<br/><br/> If you would like to continue further, ' + printDimensionMessage();
  return outputValue;
};
