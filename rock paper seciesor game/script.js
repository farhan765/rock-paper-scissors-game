let stone = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let userscore = document.querySelector("#user-score");
let computerscore = document.querySelector("#computer-score");
let UserScore = 0;
let ComputerScore = 0;
let choices = document.querySelectorAll(".elm");
let msgg = document.querySelector("#msg");
const Element = ["rock", "paper", "scissors"];

function random() {
  const index = Math.floor(Math.random() * Element.length);
  return Element[index];
}

const updateScore = () => {
  userscore.textContent = UserScore;
  computerscore.textContent = ComputerScore;
};

const game = (userchoices) => {
  console.log(userchoices);
  const computerchoice = random();
  console.log("computer choice", computerchoice);

  msgg.style.backgroundColor = "#081828";
  msgg.style.color = "white";
  msgg.style.fontSize = "22px";
  msgg.style.fontWeight = "bold";

  if (userchoices === computerchoice) {
    console.log("the ans is tie");
    msgg.textContent = "THE GAME IS TIE";
  } else if (userchoices === "rock" && computerchoice === "paper") {
    console.log("computer wins");
    msgg.textContent = "computer wins";
    msgg.style.backgroundColor = "#ff4d4d";
    msgg.style.color = "#fff5f5";
    ComputerScore++;
    updateScore();
  } else if (userchoices === "rock" && computerchoice === "scissors") {
    console.log("user wins");
    msgg.textContent = "you win";
    msgg.style.backgroundColor = "#2ecc71";
    msgg.style.color = "#f0fff7";
    UserScore++;
    updateScore();
  } else if (userchoices === "paper" && computerchoice === "rock") {
    console.log("user wins");
    msgg.textContent = "you win";
    msgg.style.backgroundColor = "#2ecc71";
    msgg.style.color = "#f0fff7";
    UserScore++;
    updateScore();
  } else if (userchoices === "paper" && computerchoice === "scissors") {
    console.log("computer wins");
    msgg.textContent = "computer wins";
    msgg.style.backgroundColor = "#ff4d4d";
    msgg.style.color = "#fff5f5";
    ComputerScore++;
    updateScore();
  } else if (userchoices === "scissors" && computerchoice === "rock") {
    console.log("computer wins");
    msgg.textContent = "computer wins";
    msgg.style.backgroundColor = "#ff4d4d";
    msgg.style.color = "#fff5f5";
    ComputerScore++;
    updateScore();
  } else if (userchoices === "scissors" && computerchoice === "paper") {
    console.log("user wins");
    msgg.textContent = "you win";
    msgg.style.backgroundColor = "#2ecc71";
    msgg.style.color = "#f0fff7";
    UserScore++;
    updateScore();
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoices = choice.getAttribute("id");
    game(userchoices);
  });
});
