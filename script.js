// Please declare functions and variables above where they are used.

var main = function (input) {

  var myOutputValue = '';
/*
  // Print 1 line of thumb Emoji
  var count = 0; 
  while (count < input) {
    myOutputValue = myOutputValue + '👍';
    count = count + 1; 
  }
*/

/*
// Print Triangle of the thumb Emoji
var count_i = 0; 
var count_j = 0; 
var No_Emoji_Line = 0;
while (count_i < input){
  //console.log ('Line')
  //console.log (count_i);
  No_Emoji_Line = count_i + 1;
  count_j = 0; 
  while (count_j < No_Emoji_Line){
    //console.log ('Column')
    //console.log (count_j);
    myOutputValue = myOutputValue + '👍';
    count_j = count_j + 1;
  }
  //console.log ('note')
  myOutputValue = myOutputValue + '<br>';
  count_i = count_i + 1;
}
*/

//Print Center Square

//Test the input validity
if ((input%2) == 0){
  return "Wrong input";
}

var count_i = 1; 
var count_j = 1; 

while (count_i <= input){
  console.log (count_i);
  count_j = 1; 
  // first and final line
  if (count_i == 1 || count_i == input){
    console.log ('1 or last');
    while (count_j <= input){
      myOutputValue = myOutputValue + '🥺';
      count_j = count_j + 1;
    }
  } 
  // Middle line
  else if (count_i == (Number(input) + 1)/2) {
    console.log ('Mid');
    while (count_j <= input){
      if (count_j == 1 || count_j == input){
        myOutputValue = myOutputValue + '🥺';
      } else if (count_j == (Number(input) + 1)/2) {
        myOutputValue = myOutputValue + '❤️';
      } else {
        myOutputValue = myOutputValue + '👍';
      }
      count_j = count_j + 1;
    }
  } 
  // Other lines
  else {
    console.log ('Other');
    while (count_j <= input){
      if (count_j == 1 || count_j == input){
        myOutputValue = myOutputValue + '🥺';
      } else {
        myOutputValue = myOutputValue + '👍';
      }
      count_j = count_j + 1;
  }
}
  myOutputValue = myOutputValue + '<br>';
  count_i = count_i + 1;
}
  return myOutputValue;

}