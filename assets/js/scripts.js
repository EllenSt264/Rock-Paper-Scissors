const game = function() {
    let pScore = 0;
    let cScore = 0;

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
                
                playerHand.src = `../assets/img/hand.png`;
                computerHand.src = `../assets/img/hand.png`;
                // Here is where we call compareHands
                compareHands(this.textContent, computerChoice);

                // Update images 
                playerHand.src = `../assets/img/${this.textContent}.png`;
                computerHand.src = `../assets/img/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice)=> {    
        // Update text
        const winner = document.querySelector(".winner");
        // Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie!";
            return;     // ends the function
        }
        // Check for a rock
        if(playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "You Win!"
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "You Win!"
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "You Win!"
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    // call all the inner functions
    startGame();
    playMatch();
}

// start the game
game();