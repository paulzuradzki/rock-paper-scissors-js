let userScore = 0;
let compScore = 0;

let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
let result_p = document.querySelector(".result > p");

const scoreBoard_div = document.querySelector(".score-board");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randNumber = Math.floor(Math.random() * 3);

    return choices[randNumber];
}

function letterToWord(letter) {
    let lookup = {'r': 'Rock', 
                  'p': 'Paper', 
                  's': 'Scissors'};

    return lookup[letter];
}

function userWins(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore; 
    let userSubscript = 'user'.fontsize(3).sub();
    let compSubscript = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${letterToWord(userChoice)}${userSubscript} covers ${letterToWord(compChoice)}${compSubscript} => user wins! 🙌`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('green-glow') }, 500);
}
function userLoses(userChoice, compChoice) {
    compScore++;
    compScore_span.innerHTML = compScore; 
    let userSubscript = 'user'.fontsize(3).sub();
    let compSubscript = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${letterToWord(userChoice)}${userSubscript} loses ${letterToWord(compChoice)}${compSubscript} => computer wins 🙁`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('red-glow') }, 500);
}

function draw(userChoice, compChoice) {
    let userSubscript = 'user'.fontsize(3).sub();
    let compSubscript = 'comp'.fontsize(3).sub();
    result_p.innerHTML = `${letterToWord(userChoice)}${userSubscript} and ${letterToWord(compChoice)}${compSubscript} => it's a draw 🤷`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('gray-glow') }, 500);
}

function game(userChoice) {

    let compChoice = getCompChoice();

    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            userWins(userChoice, compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            userLoses(userChoice, compChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;        
        }
}

function main() {
    rock_div.addEventListener('click', () => game('r'))
    paper_div.addEventListener('click', () => game('p'))
    scissors_div.addEventListener('click', () => game('s'))    
}

main();