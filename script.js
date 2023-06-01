//this grabs the input box
var input = document.querySelector("input");
//this looks for what key is down and calls the function
//"isKeyDown()" whan a key is pressed/
input.addEventListener("keydown", isKeyDown)
var activeTetromino 
var cubeArray = [4,5,14,15,"yellow"];
var stickArray = [4,14,24,34,"blue"];
var elArray = [4,14,24,25,"orange"]
function makeButtons() {
  for (var i = 0; i < 200; i++) {
      var btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btnClass");
      btn.setAttribute("id", i);
      document.getElementById("theGrid").appendChild(btn);
  }//end For loop
  //makeCube()
  activeTetromino = elArray
  placeTetromino(activeTetromino)
}//end function makeButton 
function isKeyDown(e){
  if(e.code == "ArrowLeft"){
   moveTetrominoLeft(activeTetromino);
  }
}
function placeTetromino(thisTetromino){
  for(i=0; i <4; i++){
      document.getElementById(thisTetromino[i]).style.backgroundColor = thisTetromino[4]
    }
}
function moveTetrominoLeft(thisTetromino){
  for(i=0; i <4; i++){
      document.getElementById(thisTetromino[i]).style.backgroundColor = "black"
      thisTetromino[i] -= 1;
      document.getElementById(thisTetromino[i]).style.backgroundColor = thisTetromino[4]
    }
}
