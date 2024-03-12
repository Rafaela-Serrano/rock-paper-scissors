let userScore = 0; 
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board"); // . because is a class
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function generateComputerChoice () {
    const choices = [ "rock" , "paper" , "scissors" ] ;
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
};

function convertWord(word){
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissors";
};

function win (userChoice,computerChoice)  {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertWord(userChoice)} ➡️ beats ➡️ ${convertWord(computerChoice)} : You win !` ;

    document.getElementById(userChoice).classList.add('green-glow');

    setTimeout( () => {
        document.getElementById(userChoice).classList.remove('green-glow')
    },700);
};

function lose (userChoice, computerChoice)  {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(userChoice)} ➡️ loses to ➡️ ${convertWord(computerChoice)} : You Lost . . .`;
    document.getElementById(userChoice).classList.add('red-glow');

    setTimeout( () => {
        document.getElementById(userChoice).classList.remove('red-glow')
    },700);
};

function draw (userChoice, computerChoice)  {
    result_p.innerHTML = `${convertWord(userChoice)} ➡️ equals ➡️ ${convertWord(computerChoice)} : It's a draw `;
};



function game (userChoice) {

    const computerChoice = generateComputerChoice();
    
    switch (userChoice + computerChoice){
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
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

function main () {

    rock_div.addEventListener('click', () => {
        game("rock");
    });
    
    paper_div.addEventListener('click', () => {
        game("paper");
    });
    
    scissors_div.addEventListener('click', () => {
        game("scissors");
    });
    
};

main();




















































































//--------------------------------------------------------------------------------------------------------------------------------------------------
// const computer_choice = document.getElementById("computer-choice");
// const user_choice = document.getElementById("user-choice");
// const result = document.getElementById("result");

// let user_pick ;
// let computer_pick ;
// let result_display ;

// const possible_choices = document.querySelectorAll("button");

// possible_choices.forEach( choice => {
//     choice.addEventListener( "click", (event) => {
//        user_pick = event.target.id ;
//        user_choice.innerHTML = user_pick ; 
//        generateComputerChoice();
//        getResult();
//     })
// })

// function generateComputerChoice(){
//     const randomNumber = Math.floor(Math.random() * possible_choices.length)

//     if ( randomNumber === 0 ){
//         computer_pick = "rock"
//     } else if ( randomNumber === 1){
//         computer_pick = "scissors"
//     } else {
//         computer_pick = "paper"
//     }

//     computer_choice.innerHTML = computer_pick ; 
// }

// function getResult(){
//     if (computer_pick === user_pick){
//         result_display = "It's a draw!"
//     } 
//      else if ( computer_pick === "rock" && user_pick === "paper"){
//          result_display = "You win!"
//     }
//      else if ( computer_pick === "rock" && user_pick === "scissors"){
//         result_display = "You lost!"
//     } 
//      else if ( computer_pick === "paper" && user_pick === "rock"){
//         result_display = "You lost!"
//     }
//     else  if( computer_pick === "paper" && user_pick === "scissors"){
//         result_display = "You win!"
//     }
    
//     else if( computer_pick === "scissors" && user_pick === "paper"){
//         result_display = "You lost!"
//     }
    
//     else if( computer_pick === "scissors" && user_pick === "rock"){
//         result_display = "You win!"
//     }

    

//     result.innerHTML = result_display;
 
// }