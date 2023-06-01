//this grabs the input box
var input = document.querySelector("input");
//this looks for what key is down and calls the function
//"isKeyDown()" whan a key is pressed/
input.addEventListener("keydown", isKeyDown)
var activeTetromino 
var cubeArray = [4,5,14,15,"yellow"];
var stickArray = [4,14,24,34,"blue"]
function makeButtons() {
  for (var i = 0; i < 200; i++) {
      var btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btnClass");
      btn.setAttribute("id", i);
      document.getElementById("theGrid").appendChild(btn);
  }//end For loop
  makeCube()
  activeTetromino = cubeArray
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
   moveTetrominoLeft(activeTetromino);
  }
}
function moveTetrominoLeft(thisTetromino){
  for(i=0; i <4; i++){
      document.getElementById(thisTetromino[i]).style.backgroundColor = "black"
      thisTetromino[i] -= 1;
      document.getElementById(thisTetromino[i]).style.backgroundColor = thisTetromino[4]
    }
}
