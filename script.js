const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


//Generate random number and assign comp. choice using it
function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const randNum = Math.floor(Math.random() * 3);

    return choices[randNum];
}


function convertToWord(letter){
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Scissors";
}


function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();    
    result_div.innerHTML = '${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You win!';
    document.getElementById(userChoice).classList.add('green-glow');
}

function lose(userChoice, compChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();    
    result_div.innerHTML = '${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}. You win!';
}

function draw(userChoice, compChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();    
    result_div.innerHTML = '${convertToWord(userChoice)}${smallUserWord} draws against ${convertToWord(compChoice)}${smallCompWord}. You win!';
}


function game(userChoice){
    const compChoice = getCompChoice();

    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;

        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r")
    })
    
    paper_div.addEventListener('click', function(){
        game("p")
    })
    
    scissors_div.addEventListener('click', function(){
        game("s")
    })
}

main();