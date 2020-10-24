const game = function() {
    let playerScore = 0;
    let computerScore = 0;

    // Start Game function to fade the intro div 
    const startGame = ()=> {
        // only need this variable in this function, so it does not need to be defined above
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");

        playBtn.addEventListener("click", ()=> {
            introScreen.classList.add("fadeOut");
        });
    }

    // call all the inner functions
    startGame();
}

// start the game
game();