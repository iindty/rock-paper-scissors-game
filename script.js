let winPlayer = 0;
let losePlayer = 0;
let tiePlayer = 0;
let winComputer = 0;
let loseComputer = 0;
let tieComputer = 0;
let inputPlayer;
let round = 0;

const pattern = ["rock", "sissors", "paper"];
const final = ["win", "lose", "tie"];

const scorePlayer = document.getElementById('score-Py');
const scoreComputer = document.getElementById('score-Cm');
const buttonRock = document.getElementById('button-Rock');
const buttonPaper = document.getElementById('button-Paper');
const buttonScissors = document.getElementById('button-Scissors');
const choosePlayer = document.getElementById('choose-Player');
const chooseComputer = document.getElementById('choose-Computer');


function playGame () {
    
    // let inputPlayer
    // console.log("Player chose", inputPlayer);
    if (round < 5) {
        round++
        let inputComputer = pattern[randomComputer(pattern.length)];

        if (inputPlayer === "rock" && inputComputer === "sissors" || inputPlayer === "sissors" && inputComputer === "paper" || inputPlayer === "paper" && inputComputer === "rock") {
            winPlayer++;
            loseComputer++;
            document.getElementById('count-round').innerHTML = round;
            document.getElementById('score-Py').innerHTML = winPlayer;
            document.getElementById('status').innerHTML = "WIN";
            document.getElementById('choose-Py').innerHTML = inputPlayer;
            document.getElementById('choose-Cm').innerHTML = inputComputer;
            // console.log("Round : ", round, " Result : You Win!");
            // console.log("You win this round! Computer chose", inputComputer);

        } else if (inputPlayer === "sissors" && inputComputer === "rock" || inputPlayer === "paper" && inputComputer === "sissors" || inputPlayer === "rock" && inputComputer === "paper") {
            winComputer++;
            losePlayer++;
            document.getElementById('count-round').innerHTML = round;
            document.getElementById('score-Cm').innerHTML = WinComputer;
            document.getElementById('status').innerHTML = "LOSE";
            document.getElementById('choose-Py').innerHTML = inputPlayer;
            document.getElementById('choose-Cm').innerHTML = inputComputer;
            // console.log("Round : ", round, " Result : You Lose!");
            // console.log("You lose this round! Computer chose", inputComputer);
        } else {
            tiePlayer++;
            tieComputer++;
            document.getElementById('count-round').innerHTML = round;
            document.getElementById('status').innerHTML = "TIE";
            document.getElementById('choose-Py').innerHTML = inputPlayer;
            document.getElementById('choose-Cm').innerHTML = inputComputer;
            // console.log("Round : ", round, " Result : It's a Tie!");
            // console.log("It's tie");
        } 

        // if (round >= 5) {
        //     console.log("Your Score : ", winPlayer, "Computer Score : ", WinComputer);
        //     document.getElementById('choose-Computer').innerHTML = "";
        //     document.getElementById('choose-Player').innerHTML = "";
        //     document.getElementById('choose-Cm').innerHTML = "";
            
        //     if (winPlayer > winComputer) {
        //         document.getElementById('choose-Py').innerHTML = "In this round :";
        //         document.getElementById('status').innerHTML = "YOU WIN";
        //     } else if (winComputer > winPlayer) {
        //         document.getElementById('choose-Py').innerHTML = "In this round :";
        //         document.getElementById('status').innerHTML = "YOU LOSE";
        //     } else {
        //         document.getElementById('choose-Py').innerHTML = "In this round :";
        //         document.getElementById('status').innerHTML = "IT'S TIE";
        //     }
        // } 
    }
} 


function randomComputer (max) {
    const random = Math.floor(Math.random() * max);
    return random
}

buttonRock.addEventListener("click", () => playGame(inputPlayer = "rock"));
buttonPaper.addEventListener("click", () => playGame(inputPlayer = "paper"));
buttonScissors.addEventListener("click", () => playGame(inputPlayer = "scissors"));