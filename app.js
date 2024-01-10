//Setting up the variables for later use
const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.scoreBaord');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

//Randomly generates the computer's choice
function getCompChoice() {
    const choices = ['r', 'p', 's'];
    randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber]
}
//Takes and compares user coice against comp choice and returns the result
function game(userChoice) {
    const CompChoice = getCompChoice();
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

jlnjn