//this grabs the input box
var input = document.querySelector("input");
//this looks for what key is down and calls the function
//"isKeyDown()" whan a key is pressed/
input.addEventListener("keydown", isKeyDown)
var activeTetromino 
var cubeArray = [4,5,14,15,"yellow","cube"];
var stickArray = [4,14,24,34,"blue","stick","vertical"];
var elArray = [4,14,24,25,"orange","el","vertical"];
var reverseElArray = [4,14,24,23,"cyan","reverseEl","vertical"];
var esArray = [4,5,13,14,"green","es","horizontal"];
var reverseEsArray = [4,5,15,16,"grey","reverseEs","horizontal"];
var teeArray = [5,14,15,16,"purple","tee","knobUp"]
function makeButtons() {
  for (var i = 0; i < 200; i++) {
      var btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btnClass");
      btn.setAttribute("id", i);
      document.getElementById("theGrid").appendChild(btn);
      document.getElementById(i).textContent = i
  }//end For loop
  //makeCube()
  activeTetromino = reverseEsArray
  placeTetromino(activeTetromino)
}//end function makeButton 
function isKeyDown(e){
  if(e.code == "ArrowLeft"){
   moveTetrominoLeft(activeTetromino);
  }
  if(e.code == "ArrowRight"){
   moveTetrominoRight(activeTetromino);
  }
  if(e.code == "ArrowUp"){
    rotateTetromino(activeTetromino)
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
function moveTetrominoRight(thisTetromino){
  for(i=3; i >-1; i--){
      document.getElementById(thisTetromino[i]).style.backgroundColor = "black"
      thisTetromino[i] += 1;
      document.getElementById(thisTetromino[i]).style.backgroundColor = thisTetromino[4]
    }
}
function rotateTetromino(thisTetromino){
 if(thisTetromino[5] == "stick"){
   rotateStick(thisTetromino)
 }else if(thisTetromino[5] == "el"){
   rotateEl(thisTetromino)
 }else if(thisTetromino[5] == "reverseEl"){
   rotateReverseEl(thisTetromino)
 }else if(thisTetromino[5] == "es"){
   rotateEs(thisTetromino)
 }else if(thisTetromino[5] == "reverseEs"){
    rotateReverseEs(thisTetromino)
 }else if(thisTetromino[5]== "tee"){
   rotateTee(thisTetromino)
 }
    
}
function rotateStick(thisTetromino){
   if(thisTetromino[6]=="vertical"){
    document.getElementById(thisTetromino[0]).style.backgroundColor = "black"
    thisTetromino[0] += 9
    document.getElementById(thisTetromino[0]).style.backgroundColor = thisTetromino[4]

   document.getElementById(thisTetromino[2]).style.backgroundColor = "black"
    thisTetromino[2] -= 9
    document.getElementById(thisTetromino[2]).style.backgroundColor = thisTetromino[4]

   document.getElementById(thisTetromino[3]).style.backgroundColor = "black"
    thisTetromino[3] -= 18
    document.getElementById(thisTetromino[3]).style.backgroundColor = thisTetromino[4]
    thisTetromino[6] = "horizontal"
  }else{
     document.getElementById(thisTetromino[0]).style.backgroundColor = "black"
    thisTetromino[0] -= 9
    document.getElementById(thisTetromino[0]).style.backgroundColor = thisTetromino[4]

     document.getElementById(thisTetromino[2]).style.backgroundColor = "black"
    thisTetromino[2] += 9
    document.getElementById(thisTetromino[2]).style.backgroundColor = thisTetromino[4]

   document.getElementById(thisTetromino[3]).style.backgroundColor = "black"
    thisTetromino[3] += 18
    document.getElementById(thisTetromino[3]).style.backgroundColor = thisTetromino[4]
    thisTetromino[6] = "vertical"
  }
}
function rotateEl(thisTetromino){
  
}
function rotateReverseEl(thisTetromino){
  
}
function  rotateEs(thisTetromino) {
  
}
function  rotateReverseEs(thisTetromino) {
  
}
function rotateTee(thisTetromino){
  
}
