var main = function (input) {
  var myOutputValue = '';

  var counter  = 0;
  while (counter < input) {
    var innerCounter = 0;
    while (innerCounter < input){
      if ((counter > 0 && counter < input - 1) && (innerCounter > 0 && innerCounter < input -1)){
        myOutputValue = myOutputValue + '🚽';
      }
      else{
        myOutputValue = myOutputValue + '💩';
      }
      innerCounter = innerCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    counter = counter + 1;
  }

  return myOutputValue;
};
