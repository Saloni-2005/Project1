// List of famous Bollywood movies and clues
const movies = [
    { name: "Dilwale Dulhania Le Jayenge", clue: "A love story set in Europe" },
    { name: "Kabhi Khushi Kabhi Gam", clue: "Family drama with lots of emotions" },
    { name: "Sholay", clue: "Action-packed film with iconic villains" },
    { name: "3 Idiots", clue: "College friends and a quest for success" },
    { name: "Lagaan", clue: "Revolution against British rule with cricket" },
    { name: "Zindagi Na Milegi Dobara", clue: "A road trip with friends" },
    { name: "Taare Zameen Par", clue: "A boy struggling with dyslexia" },
    { name: "Mughal-e-Azam", clue: "Historical drama about love and power" },
    { name: "Bajrangi Bhaijaan", clue: "A man helps a mute girl reunite with her family" }
];

// Set initial variables
let currentMovieIndex = 0;
let score = 0;
let gameStopped = false;

// Initialize game by displaying the first movie clue
function startGame() {
    displayClue();
    document.getElementById('feedback').textContent = '';
    document.getElementById('user-input').value = '';
    gameStopped = false;
}

// Display the movie clue
function displayClue() {
    if (currentMovieIndex < movies.length) {
        const movie = movies[currentMovieIndex];
        document.getElementById('movie-clue').textContent = movie.clue;
        document.getElementById('feedback').textContent = '';
    } else {
        endGame();
    }
}
// Handle user input and check if the guess is correct
function handleGuess() {
    if (gameStopped) return;

    const userInput = document.getElementById('user-input').value.trim();
    const movie = movies[currentMovieIndex];

    if (userInput.toLowerCase() === movie.name.toLowerCase()) {
        score++;
        document.getElementById('feedback').textContent = "Correct! Well done!";
        document.getElementById('feedback').classList.add('correct');
        document.getElementById('score').textContent = score;
    } else {
        document.getElementById('feedback').textContent = `Incorrect! The correct answer was "${movie.name}".`;
        document.getElementById('feedback').classList.add('incorrect');
    }
    // Move to next movie or end the game
    currentMovieIndex++;
    if (currentMovieIndex < movies.length) {
        setTimeout(() => {
            displayClue();
            document.getElementById('user-input').value = '';
        }, 3000); // Show feedback for 2 seconds and then move to next round
    } else {
        setTimeout(() => {
            endGame();
        }, 3000);
    }
}
// Stop the game
function stopGame() {
    gameStopped = true;
    document.getElementById('feedback').textContent = 'Game Stopped!';
    document.getElementById('feedback').classList.add('stopped');
    document.getElementById('user-input').disabled = true;
    document.getElementById('guess-button').disabled = true;
}
// End the game
function endGame() {
    document.getElementById('feedback').textContent = 'Game Over!';
    document.getElementById('user-input').disabled = true;
    document.getElementById('guess-button').disabled = true;
}
// Event listeners for user interactions
document.getElementById('guess-button').addEventListener('click', handleGuess);
document.getElementById('stop-button').addEventListener('click', stopGame);
// Start the game when the page loads
startGame();
