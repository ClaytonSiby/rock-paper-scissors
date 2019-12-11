const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        })
    }

    // *********** play match ********

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        })

        // computer options
        const computerOptions = ['rock', 'paper', 'scissors'];


        options.forEach((option) => {
            option.addEventListener('click', function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
                // we call compare hands here
                compareHands(this.textContent, computerChoice);

                // update images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;

            }, 2000);

            
                // animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        })
    }

    // ********* update score ********

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // ***** compare hands ******** 

    const compareHands = (playerChoice, computerChoice) => {
        // update text
        const winner = document.querySelector(".winner");
        // check for a tie.
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie";
            return;
        }
        // check for the rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        // check for the paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

        // check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    // call all inner functions
    startGame();
    playMatch();
}

game();     