const _images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

let randomNumber = function generateNumbers(){
return Math.floor(Math.random() * (_images.length -1));
}

function queryUpdateImage(number){
  document.querySelectorAll("img")[number].setAttribute("src" , _images[randomNumber()]);
}
queryUpdateImage(0);
queryUpdateImage(1);

function reRender(){
  queryUpdateImage(0);
  queryUpdateImage(1);
}

 if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
 }

 else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
 }

 else {
    document.querySelector("h1").innerHTML = "Draw game"
 }


