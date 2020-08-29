var myOutputValue = ""; 
var gameStage = "first";
var counter = 0;
var dimension ="";
var shapeCreated = "";

var main = function (input) {
  if (gameStage=="first"){
    if (input =="square" || input == "triangle" || input == "upside down triangle" || input == "outline square" || input == "centre square" || input == "ring"){
      shapeCreated = input;
      myOutputValue = "Hello! You have requested to create " + shapeCreated + " shape! Please enter the dimension now! " + "<br>";
      gameStage = "second";
    }  
    else {
      myOutputValue = 'Please enter either "square" or "triangle" or "upside down triangle" or "outline square" or "centre square"';
    }
   console.log("Shape: "+ shapeCreated) ;
  }  
  else if (gameStage=="second"){
    if (shapeCreated == "square"){
      dimension = input;
      console.log ("gamestage: " + gameStage + ". And dimension: " + dimension)
      while (counter < dimension) {
        var innerCounter = 0;  
        while (innerCounter < dimension){
          myOutputValue = myOutputValue + " 😆 ";
          innerCounter = innerCounter + 1;
        }
        counter = counter + 1;  
        myOutputValue = myOutputValue + "<br>";
      }
    }
    else if (shapeCreated == "triangle"){
      dimension = input;
      while (counter < dimension){
        var innerCounter = -1;  
        while (innerCounter < counter){
          myOutputValue = myOutputValue + " 😆 ";
          innerCounter = innerCounter + 1 ;
        }
        counter = counter + 1; 
        myOutputValue = myOutputValue + "<br>";
      }
    }
    else if (shapeCreated == "upside down triangle"){
      counter = input;
      dimension = input;
      while (counter != 0) {
        var innerCounter = 0;
        while (innerCounter<counter){
          myOutputValue = myOutputValue + " 😆 ";
          innerCounter = innerCounter + 1; 
        } 
        myOutputValue = myOutputValue + "<br>"
        counter = counter - 1;
      }
    }
    else if (shapeCreated == "outline square"){
      while (counter < input){
        if (counter == 0 || counter == (input-1)){
          var innerCounter = 0;
          while (innerCounter < input){
            myOutputValue = myOutputValue + " 😆 ";
            innerCounter = innerCounter + 1;
          }
        }
        
        else if (counter != 0 || counter != (input-1)){
          var innerCounter = 0;
          while (innerCounter < input){
            if (innerCounter == 0 || innerCounter == (input-1)){
              myOutputValue = myOutputValue + " 😆 ";
            }
            else{
              myOutputValue = myOutputValue + " 🥳 ";
            }
            innerCounter = innerCounter + 1;
          }
        }
        counter = counter + 1;
        myOutputValue = myOutputValue + "<br>";
      } 
    }
    else if (shapeCreated == "centre square"){
      if (input%2 != 1){
        myOutputValue = "Please enter only odd-number dimension" + "<br>";
      }
      else {
        while (counter < input){
          if (counter == 0 || counter == (input-1)){
            var innerCounter = 0;
            while (innerCounter < input){
              myOutputValue = myOutputValue + " 😆 ";
              innerCounter = innerCounter + 1;
            }
          }
          else if (counter == (input/2 - 0.5)){
            var innerCounter = 0;
            while (innerCounter < input){
              if (innerCounter == 0 || innerCounter == (input-1)){
                myOutputValue = myOutputValue + " 😆 ";
              }
              else if (innerCounter == (input/2 - 0.5)){
                myOutputValue = myOutputValue + " 😈 ";
              }
              else {
                myOutputValue = myOutputValue + " 🥳 ";
              }
              innerCounter = innerCounter + 1;
            }
          }
    
          else {
            var innerCounter = 0;
            while (innerCounter < input){
              if (innerCounter == 0 || innerCounter == (input-1)){
                myOutputValue = myOutputValue + " 😆 ";
              }
              else{
                myOutputValue = myOutputValue + " 🥳 ";
              }
              innerCounter = innerCounter + 1;
            }
          }
          counter = counter + 1;
          myOutputValue = myOutputValue + "<br>";
        }
      }
    }
    else if (shapeCreated == "ring"){
      while (counter < input){
        if (counter <= input/2-0.5){
          if (counter%2 == 0){
            var innerCounter = 0;
            while (innerCounter < input){
              if (innerCounter < counter || innerCounter > (input - counter - 1)){
                if (innerCounter%2 == 0){
                  myOutputValue = myOutputValue + " 😆 ";
                }
                else if (innerCounter%2 == 1){
                  myOutputValue = myOutputValue + " 😈 ";
                }
              innerCounter = innerCounter + 1;
              }
              else if (innerCounter >= counter && innerCounter < (input-counter)) {
                myOutputValue = myOutputValue + " 😆 ";
                innerCounter = innerCounter + 1;
              }
            }
          }
          else {
            var innerCounter = 0;
            while (innerCounter < input){
              if (innerCounter < counter || innerCounter > (input - counter - 1)){
                if (innerCounter%2 == 0){
                  myOutputValue = myOutputValue + " 😆 ";
                }
                else if (innerCounter%2 == 1){
                  myOutputValue = myOutputValue + " 😈 ";
                }
              innerCounter = innerCounter + 1;
              }
              else if (innerCounter >= counter && innerCounter < (input-counter)) {
                myOutputValue = myOutputValue + " 😈 ";
                innerCounter = innerCounter + 1;
              }
            }
          }
        }
        else{
          var equivalentCounter = input - counter - 1;
          if (equivalentCounter%2 == 0){
            var innerCounter = 0;
            while (innerCounter < input){
              if (innerCounter < equivalentCounter || innerCounter > (input - equivalentCounter - 1)){
                if (innerCounter%2 == 0){
                  myOutputValue = myOutputValue + " 😆 ";
                }
                else if (innerCounter%2 == 1){
                  myOutputValue = myOutputValue + " 😈 ";
                }
              innerCounter = innerCounter + 1;
              }
              else if (innerCounter >= equivalentCounter && innerCounter < (input-equivalentCounter)) {
                myOutputValue = myOutputValue + " 😆 ";
                innerCounter = innerCounter + 1;
              }
            }
          }
          else {
            var innerCounter = 0;
            while (innerCounter < input){
              if (innerCounter < equivalentCounter || innerCounter > (input - equivalentCounter - 1)){
                if (innerCounter%2 == 0){
                  myOutputValue = myOutputValue + " 😆 ";
                }
                else if (innerCounter%2 == 1){
                  myOutputValue = myOutputValue + " 😈 ";
                }
              innerCounter = innerCounter + 1;
              }
              else if (innerCounter >= equivalentCounter && innerCounter < (input-equivalentCounter)) {
                myOutputValue = myOutputValue + " 😈 ";
                innerCounter = innerCounter + 1;
              }
            }
          }
        }
        counter = counter + 1;
        myOutputValue = myOutputValue + "<br>";
        }
    }
  }    
  return myOutputValue;
}