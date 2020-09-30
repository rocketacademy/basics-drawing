var main = function (input) {
  var counter = 0;
  var myOutputValue = ''
  console.log('default \'myoutputvalue\'')
  console.log('start outer counter');


  while (counter < input) {
    console.log('start inner counter');
    var innerCounter = 0;
    while (innerCounter < input) {
      myOutputValue = myOutputValue + '(Y)';
      innerCounter = innerCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>'
    counter = counter + 1;
  }
  return myOutputValue;
};
