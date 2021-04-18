// caching the Dom, storing variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerPick() {
    const picks = ['r', 's', 'p'];
    // making the index of the array a whole number
    const randomNumber = (Math.floor(Math.random() * 3));
    return picks[randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";

}

function win(userPick, computerPick) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML = `${convertToWord(userPick)} beats ${convertToWord(computerPick)} . You win `;
}

function lose(userPick, computerPick){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML = `${convertToWord(userPick)} loses to ${convertToWord(computerPick)} . You lost `;
}

function draw(userPick, computerPick) {
    result_p.innerHTML = `${convertToWord(userPick)} equals ${convertToWord(computerPick)} . Its a draw `;
}

function game(userPick) {
    const computerPick = getComputerPick();
    // making switch statements
    switch (userPick + computerPick) {
        case "rs":
        case "pr":
        case "sp":
            win(userPick, computerPick);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userPick, computerPick);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userPick, computerPick);
            break;      

    }
    
}


// created a function called main
function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })
}

// runs main function
main();