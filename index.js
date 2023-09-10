var images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
function imageChanger() {
  document.querySelector("div.hidden1").classList.remove("winner");
  document.querySelector("div.hidden2").classList.remove("winner");
  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;
  if (player1 === player2) {
    imageChanger();
  } else {
    document
      .querySelector(".player-1 img")
      .setAttribute("src", images[player1 - 1]);
    document
      .querySelector(".player-2 img")
      .setAttribute("src", images[player2 - 1]);
    if (player1 > player2) {
      document.querySelector("div.hidden1").classList.add("winner");
    } else document.querySelector("div.hidden2").classList.add("winner");
  }
}
var btn = document.querySelector("button");
btn.addEventListener("click", imageChanger);
