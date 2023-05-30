//this grabs the input box
var input = document.querySelector("input");
//this looks for what key is down and calls the function
//"isKeyDown()" whan a key is pressed/
input.addEventListener("keydown", isKeyDown)


function makeButtons() {
  for (var i = 0; i < 200; i++) {
      var btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btnClass");
      btn.setAttribute("id", i);
      document.getElementById("theGrid").appendChild(btn);
  }//end For loop
  makeCube()
}//end function makeButton 

function makeCube(){
  document.getElementById("4").style.backgroundColor = "yellow"
  document.getElementById("5").style.backgroundColor = "yellow"
  document.getElementById("14").style.backgroundColor = "yellow"
  document.getElementById("15").style.backgroundColor = "yellow"
}
function isKeyDown(e){
  console.log(e.code)
  if(e.code == "ArrowLeft"){
     document.getElementById("4").style.backgroundColor = "yellow"
    document.getElementById("5").style.backgroundColor = "grey"
    document.getElementById("14").style.backgroundColor = "yellow"
    document.getElementById("15").style.backgroundColor = "grey"
     document.getElementById("3").style.backgroundColor = "yellow"
    document.getElementById("13").style.backgroundColor = "yellow"
  }
}
