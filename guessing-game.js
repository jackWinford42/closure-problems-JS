function guessingGame() {
    let target =  Math.floor(Math.random() * (101));
    let guesses = 0;
    let gameover = false;
    return function game(guess) {
        guesses++;
        if (gameover) return "The game is over, you already won!";
        else if (guess > target) return `${guess} is too high!`;
        else if (guess < target) return `${guess} is too low!`;
        else {
            gameover = true;
            return `You win! You found ${target} in ${guesses} guesses.`
        }
    }
}

module.exports = { guessingGame };