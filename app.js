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
    //Change and display the scores
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    //Change color of comp and user choice to reflect each respective scoreboard color
    const coloredUserChoice = `<span class="colored-text-user">${convertToWord(userChoice)}</span>`;
    const coloredCompChoice = `<span class="colored-text-comp">${convertToWord(compChoice)}</span>`;

    //Display who won on screen
    result_p.innerHTML = `${coloredUserChoice} beats ${coloredCompChoice} <br>You Won!`;

    //Adds and removes a green glow when the player wins
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}


//Adds The Functionality For When The User Loses
function lose(userChoice, compChoice) {
    //Change and display the scores
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    //Change color of comp and user choice to reflect each respective scoreboard color
    const coloredUserChoice = `<span class="colored-text-user">${convertToWord(userChoice)}</span>`
    const coloredCompChoice = `<span class="colored-text-comp">${convertToWord(compChoice)}</span>`

    //Display who won on screen
    result_p.innerHTML = `${coloredUserChoice} loses to ${coloredCompChoice} <br>You Lost...`;

    //Adds and removes a red glow when the player loses
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
}


//Adds The Functionality For When The User Draws
function draw(userChoice, compChoice) {
    //Change color of comp and user choice to reflect each respective scoreboard color
    const coloredUserChoice = `<span class="colored-text-user">${convertToWord(userChoice)}</span>`
    const coloredCompChoice = `<span class="colored-text-comp">${convertToWord(compChoice)}</span>`

    //Display who won on screen
    result_p.innerHTML = `${coloredUserChoice} and ${coloredCompChoice} <br>It's A Draw!`;

    //Adds and removes a grey glow when the player draws
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 300);
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


//This runs the game and generates different outcomes depending on which option the user clicks
function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

main();
