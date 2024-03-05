const computer_choice = document.getElementById("computer-choice");
const user_choice = document.getElementById("user-choice");
const result = document.getElementById("result");

let user_pick ;
let computer_pick ;
let result_display ;

const possible_choices = document.querySelectorAll("button");

possible_choices.forEach( choice => {
    choice.addEventListener( "click", (event) => {
       user_pick = event.target.id ;
       user_choice.innerHTML = user_pick ; 
       generateComputerChoice();
       getResult();
    })
})

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possible_choices.length)

    if ( randomNumber === 0 ){
        computer_pick = "rock"
    } else if ( randomNumber === 1){
        computer_pick = "scissors"
    } else {
        computer_pick = "paper"
    }

    computer_choice.innerHTML = computer_pick ; 
}

function getResult(){
    if (computer_pick === user_pick){
        result_display = "It's a draw!"
    } 
     else if ( computer_pick === "rock" && user_pick === "paper"){
         result_display = "You win!"
    }
     else if ( computer_pick === "rock" && user_pick === "scissors"){
        result_display = "You lost!"
    } 
     else if ( computer_pick === "paper" && user_pick === "rock"){
        result_display = "You lost!"
    }
    else  if( computer_pick === "paper" && user_pick === "scissors"){
        result_display = "You win!"
    }
    
    else if( computer_pick === "scissors" && user_pick === "paper"){
        result_display = "You lost!"
    }
    
    else if( computer_pick === "scissors" && user_pick === "rock"){
        result_display = "You win!"
    }

    

    result.innerHTML = result_display;
 
}