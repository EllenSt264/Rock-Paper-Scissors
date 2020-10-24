const game = function() {
    let playerScore = 0;
    let computerScore = 0;

    // Start Game function to fade the intro div 
    const startGame = ()=> {
        // only need this variable in this function, so it does not need to be defined above
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    }

    // Play match
    const playMatch = function() {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        // Computer Options - randomly generated
        /* Generate a random number
        between 1 and 2 (0 -3) with each number
        asssociated with an image (rock paper scissors)
        */
        const computerOptions = ["rock", "paper", "scissors"];

        // We only want the computer to generate a number once a button has been clicked
        options.forEach((option)=>{
            option.addEventListener("click", function() {   // use normal function, rather than arrow function so that we can use this keyword
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);
            })
        })
    }

    // call all the inner functions
    startGame();
    playMatch();
}

// start the game
game();