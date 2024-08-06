//Elements for updating UI
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Initial scores
let userScore = 0;
let compScore = 0;

//Get comp. choice
function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

//Converts letter to corresponding word
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

//Handle winning scenario
function win(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

//Handle losing scenario
function lose(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}. You lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

//Handle draw scenario
function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws against ${convertToWord(compChoice)}${smallCompWord}. It's a draw.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

//Main game func. to determine outcome based on set of choices
function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

//Main func. to add event listeners to choice elements
function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

//Initialize game
main();