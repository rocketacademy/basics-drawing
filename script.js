// // No of Emojis
// var main = function (input) {
//   var noOfEmojis = Number(input);
//   var myOutputValue = '';
//   var counter = 0
//   while (counter < input) {
//     counter += 1;
//     myOutputValue += '👍';
//   }
//   return myOutputValue
// }

// // Square
// var main = function (input) {
//   var myOutputValue = '';
//   var sideLength = Number(input);
//   var columnCounter = 0;
//   while (columnCounter < sideLength) {
//     var rowCounter = 0;
//     while (rowCounter < sideLength) {
//       rowCounter += 1;
//       myOutputValue += '👍';
//     }
//     myOutputValue += '<br>';
//     columnCounter += 1;
//   }
//   return myOutputValue;
// };

// Triagle
var main = function (input) {
  var numberOfRows = Number(input);
  var counter = 0;
  var myOutputValue = '';
  while (counter < numberOfRows) {
    var innerCounter = 0;
    while (innerCounter <= counter) {
      innerCounter += 1
      myOutputValue += '👍';
    }
    counter += 1;
    myOutputValue += '<br>'
  }
  return myOutputValue
}