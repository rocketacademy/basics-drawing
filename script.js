// first
// var main = function (input) {
//   var myOutputValue = "";
//   var counter = 0;
//   while (counter < input) {
//     myOutputValue = myOutputValue + "👍";
//     counter += 1;
//   }
//   return myOutputValue;
// };

//second
// var main = function (input) {
//   var myOutputValue = "";
//   var counter = 0;
//   while (counter < input) {
//     var innercounter = 0;
//     while (innercounter < input) {
//       myOutputValue = myOutputValue + "👍";
//       innercounter += 1;
//     }
//     myOutputValue = myOutputValue + "<br>";
//     counter += 1;
//   }
//   return myOutputValue;
// };

//third
// var main = function (input) {
//   var myOutputValue = "";
//   var counter = 0;
//   while (counter < input) {
//     var innercounter = 0;
//     while (innercounter <= counter) {
//       myOutputValue = myOutputValue + "👍";
//       innercounter += 1;
//     }
//     myOutputValue = myOutputValue + "<br>";
//     counter += 1;
//   }
//   return myOutputValue;
// };

//fourth
var main = function (input) {
  var myOutputValue = "";
  var counter = 0;
  while (counter < input) {
    var innercounter = 0;
    while (innercounter < input) {
      if (
        counter == 0 ||
        counter == input - 1 ||
        innercounter == 0 ||
        innercounter == input - 1
      ) {
        myOutputValue += "✊";
      } else {
        myOutputValue += "👍";
      }
      innercounter += 1;
    }
    myOutputValue = myOutputValue + "<br>";
    counter += 1;
  }
  return myOutputValue;
};
