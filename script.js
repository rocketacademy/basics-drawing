var main = function (input) {
  var myOutputValue = '';

  var counter  = 0;
  while (counter < input) {
    var innerCounter = 0;
    while (innerCounter < input){
      myOutputValue = myOutputValue + '💩';
      innerCounter = innerCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    counter = counter + 1;
  }

  return myOutputValue;
};
