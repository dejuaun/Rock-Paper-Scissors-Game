//Setting up the variables for later use
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_p = document.querySelector('.result p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

//Randomly generates the computer's choice
function getCompChoice() {
    const choices = ['r', 'p', 's'];
    randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber]
}
//This converts the user and computer choice to readable words
function convertToWord(letter) {

    if (letter === 'r') return "Rock";
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

//Adds The Functionality For When The User Wins
function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You Won!`;
}
function lose(userChoice, compChoice) {
    compScoreScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses ${convertToWord(compChoice)}. You Lost!`;
}
function draw() {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You Win!`;
}

//Takes and compares user choice against comp choice and returns the result
function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, compChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, compChoice);
            break;
        case 'rr':
        case 'ps':
        case 'ss':
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game('r')
    })

    paper_div.addEventListener('click', function () {
        game('p')
    })

    scissors_div.addEventListener('click', function () {
        game('s')
    })
}

main();
