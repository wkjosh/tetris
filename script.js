//this grabs the input box
var input = document.querySelector("input");
//this looks for what key is down and calls the function
//"isKeyDown()" whan a key is pressed/
input.addEventListener("keydown", isKeyDown)
var activeTetromino = "stick"

//make an array for each tetromino
//position 4 is the top middle square
var cubeArray = [4,5,14,15];
var stickArray = [4,14,24,34]


function makeButtons() {
  for (var i = 0; i < 200; i++) {
      var btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btnClass");
      btn.setAttribute("id", i);
      document.getElementById("theGrid").appendChild(btn);
  }//end For loop
  makeStick()
}//end function makeButton 

function makeCube(){
  for(i=0 ;i<4; i++){
    document.getElementById(cubeArray[i]).style.backgroundColor = "yellow"  
  }  
}
function makeStick(){
  for(i=0 ;i<4; i++){
    document.getElementById(stickArray[i]).style.backgroundColor = "blue"  
  }  
}
function isKeyDown(e){
  if(e.code == "ArrowLeft"){
    if(activeTetromino == "stick"){
      moveLeftStick();
    }else if (moveLeftStick == "cube"){
      moveLeftCube();
    }else if (moveLeftStick == "el"){
      moveLeftEl();
    }else if (moveLeftStick == "reverseEl"){
      moveLeftReverseEl();
    }else if (moveLeftStick == "es"){
      moveLeftEs();
    }else if (moveLeftStick == "reverseEs"){
      moveLeftReverseEs();
    }else if (moveLeftStick == "tee"){
      moveLeftTee();
  }
}
function moveLeftStick(){
  for(i=0; i <4; i++){
      document.getElementById(stickArray[i]).style.backgroundColor = "black"
      stickArray[i] -= 1;
      document.getElementById(stickArray[i]).style.backgroundColor = "blue"
    }
}
function moveLeftCube(){
  
}
function moveLeftEl(){
  
}
function moveLeftReverseEl(){
  
}
function moveLeftEs(){
  
}
function moveLeftReverseEs(){
  
}
function moveLeftTee(){
  
}
