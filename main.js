const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
const modal = document.getElementById("myModal");
var playerPoints = document.getElementById("player");
var computerPoints = document.getElementById("computer");

choices.forEach((choice) => choice.addEventListener("click", play));
choices.forEach((choice) => choice.addEventListener("click", resetButton));
reset.addEventListener("click", resetScore);

function play(event) {
  const playerChoice = event.target.id;
  const computerChoice = getComputerChoice();
  var res;

  if (playerChoice === "rock" && computerChoice === "scissors") {
    res = 1;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    res = 2;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    res = 1;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    res = 2;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    res = 1;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    res = 2;
  } else {
    res = 0;
  }

  if (res == 1) {
    playerPoints.innerText = +playerPoints.innerText + 1;
    if (playerPoints.innerText === "10") {
      modal.classList.remove("lost");
      modal.classList.add("won");
      modal.querySelector("h1").innerText = "YOU WON THE GAME!";
      modal.querySelector("i").className = "fas fa-trophy fa-10x";
      modal.querySelector("i").style.color = "green";
      modal.querySelector("h5").innerText = "";
    } else {
      modal.classList.remove("lost");
      modal.classList.add("won");
      modal.querySelector("h1").innerText = "YOU WON THE ROUND!";
      modal.querySelector("i").className = document.getElementById(
        computerChoice
      ).className;
      modal.querySelector("i").style.color = "black";
      modal.querySelector("h5").innerText =
        "Computer selected " + computerChoice + ".";
    }
  } else if (res == 2) {
    computerPoints.innerText = +computerPoints.innerText + 1;
    if (computerPoints.innerText === "10") {
      modal.classList.remove("won");
      modal.classList.add("lost");
      modal.querySelector("h1").innerText = "YOU LOST THE GAME!";
      modal.querySelector("i").className = "fas fa-frown fa-10x";
      modal.querySelector("i").style.color = "red";
      modal.querySelector("h5").innerText = "";
    } else {
      modal.classList.remove("won");
      modal.classList.add("lost");
      modal.querySelector("h1").innerText = "YOU LOST THE ROUND!";
      modal.querySelector("i").className = document.getElementById(
        computerChoice
      ).className;
      modal.querySelector("i").style.color = "black";
      modal.querySelector("h5").innerText =
        "Computer selected " + computerChoice + ".";
    }
  } else {
    modal.classList.remove("won");
    modal.classList.remove("lost");
    modal.querySelector("h1").innerText = "YOU DREW THE ROUND!";
    modal.querySelector("i").className = document.getElementById(
      computerChoice
    ).className;
    modal.querySelector("i").style.color = "black";
    modal.querySelector("h5").innerText =
      "Computer selected " + computerChoice + ".";
  }
}

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  if (random == 0) return "rock";
  else if (random == 1) return "paper";
  else return "scissors";
}

function resetScore() {
  playerPoints.innerText = "0";
  computerPoints.innerText = "0";
  reset.style.display = "none";
}

function resetButton() {
  if (+playerPoints.innerText > 0 || +computerPoints.innerText > 0)
    reset.style.display = "inline-block";
  else reset.style.display = "none";
}
