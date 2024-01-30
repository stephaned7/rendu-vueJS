//script avec and addEventListener sur les images pour faire un pierre feuille ciseaux avec un compteur de victoire et de défaite et de match nul

//déclaration des variables
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let drawScore_span = document.getElementById("draw-score");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

//fonction pour le choix de l'ordinateur
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//fonction pour convertir les mots en français
function convertToFrench(word) {
  if (word === "rock") return "Pierre";
  if (word === "paper") return "Feuille";
  return "Ciseaux";
}

//fonction pour la victoire

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    drawScore_span.innerHTML = drawScore;
    result_p.innerHTML = `${convertToFrench(
        userChoice
    )} bat ${convertToFrench(computerChoice)}. Vous avez gagné !`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("green-glow");
    }, 500);
    }

//fonction pour la défaite

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    drawScore_span.innerHTML = drawScore;
    result_p.innerHTML = `${convertToFrench(
        userChoice
    )} perd contre ${convertToFrench(computerChoice)}. Vous avez perdu !`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("red-glow");
    }, 500);
    };

//fonction pour l'égalité

function draw(userChoice, computerChoice) {
    drawScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    drawScore_span.innerHTML = drawScore;
    result_p.innerHTML = `${convertToFrench(
        userChoice
    )} égal ${convertToFrench(computerChoice)}. Egalité !`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("gray-glow");
    }, 500);
    };

//fonction pour le jeu

function game(userChoice) {
    computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
};

//fonction pour le choix de l'utilisateur

function main() {
    rock_div.addEventListener("click", function () {
        game("rock");
    });

    paper_div.addEventListener("click", function () {
        game("paper");
    });

    scissors_div.addEventListener("click", function () {
        game("scissors");
    });
};

main();

//fin du script