var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) + 1;

var randomsourceimage1 = "images/dice"+rand1+".png";
var randomsourceimage2 = "images/dice"+rand2+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomsourceimage1);
document.querySelectorAll("img")[1].setAttribute("src", randomsourceimage2);



if (rand1 > rand2) {
  document.querySelector("h1").innerHTML = "player one wins!";
}

if (rand1 < rand2) {
  document.querySelector("h1").innerHTML = "player Two wins!";
}


if (rand1 === rand2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
