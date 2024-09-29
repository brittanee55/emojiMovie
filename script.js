const phrases = [
    { emoji: "🦁👑", answer: "The Lion King" },
    { emoji: "👨‍🚀🌌", answer: "Interstellar" },
    { emoji: "🧙‍♂️⚡📚", answer: "Harry Potter" },
    { emoji: "🦖🏝️", answer: "Jurassic Park" },
    { emoji: "👩‍❤️‍👨💔", answer: "The Notebook" },
    { emoji: "👻🏠", answer: "Ghostbusters" },
    { emoji: "🚀🛸", answer: "E.T. the Extra-Terrestrial" },
    { emoji: "🌪👠", answer: "The Wizard of Oz" },
    { emoji: "🤖👾", answer: "Transformers" },
    { emoji: "🍕👦", answer: "Spider-Man" },
    { emoji: "🧛‍♂️🦇", answer: "Dracula" },
    { emoji: "👑🤴", answer: "The Princess Bride" },
    { emoji: "🥷🏯", answer: "Ninja Turtles" },
    { emoji: "🔫👮‍♂️", answer: "Die Hard" },
    { emoji: "🐉🔥", answer: "How to Train Your Dragon" },
    { emoji: "🥇👩‍🚀", answer: "Hidden Figures" },
    { emoji: "🏰👸", answer: "Cinderella" },
    { emoji: "🦸‍♂️🦸‍♀️", answer: "The Avengers" },
    { emoji: "🥳🍾", answer: "La La Land" },
    { emoji: "🚗💨", answer: "Fast & Furious" },
    { emoji: "🏆🏀", answer: "Space Jam" },
    { emoji: "🌌🧑‍🚀", answer: "Gravity" },
    { emoji: "👨‍🎤🎤", answer: "Bohemian Rhapsody" },
    { emoji: "🎩🐇", answer: "Alice in Wonderland" },
    { emoji: "🧟‍♂️🔫", answer: "Zombieland" },
    { emoji: "🌊🐠", answer: "Finding Nemo" },
    { emoji: "🧙‍♂️⚔️", answer: "The Lord of the Rings" },
    { emoji: "🕵️‍♂️🔍", answer: "Sherlock Holmes" },
    { emoji: "🦸‍♂️⚡", answer: "Black Panther" },
    { emoji: "🚢💔", answer: "Titanic" },
    { emoji: "🏹👧", answer: "The Hunger Games" },
    { emoji: "🌼🦄", answer: "My Little Pony" },
    { emoji: "🧛‍♀️🏰", answer: "Twilight" },
    { emoji: "🤠🐎", answer: "The Good, the Bad and the Ugly" },
    { emoji: "👨‍🎤🎸", answer: "Rocketman" },
    { emoji: "🚨👮", answer: "Bad Boys" },
    { emoji: "👧🏻🐉", answer: "Mulan" },
    { emoji: "🐻🍯", answer: "Winnie the Pooh" },
    { emoji: "🧜‍♀️🌊", answer: "The Little Mermaid" },
    { emoji: "🧞‍♂️✨", answer: "Aladdin" },
    { emoji: "🏋️‍♂️🥇", answer: "Rocky" },
    { emoji: "🦩🌺", answer: "Moana" },
    { emoji: "🥨🐍", answer: "Snakes on a Plane" },
    { emoji: "🎢🎡", answer: "Adventureland" },
    { emoji: "🦅🏞️", answer: "The Secret Life of Walter Mitty" },
    { emoji: "👨‍👧🚲", answer: "Atonement" },
    { emoji: "🏖️🌴", answer: "The Beach" },
    { emoji: "🎃👻", answer: "Hocus Pocus" },
    { emoji: "🐾🕵️‍♀️", answer: "Paddington" },
    { emoji: "🎭🎬", answer: "Birdman" }
];

let currentPhrase;
let currentAnswer;
let guessCount;

const emojiContainer = document.getElementById("emoji-container");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const message = document.getElementById("message");
const nextButton = document.getElementById("next-button");

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    currentPhrase = phrases[randomIndex].emoji;
    currentAnswer = phrases[randomIndex].answer;
    guessCount = 0; // Reset guess count for the new phrase
}

function displayEmoji() {
    emojiContainer.textContent = currentPhrase;
}

function checkGuess() {
    const userGuess = guessInput.value.trim().toLowerCase();
    const normalizedAnswer = currentAnswer.toLowerCase();
    guessCount++;

    if (userGuess === normalizedAnswer || isSimilar(userGuess, normalizedAnswer)) {
        message.textContent = "Correct! 🎉";
        guessButton.style.display = "none";
        nextButton.style.display = "block";
    } else if (guessCount < 3) {
        message.textContent = "Try again! 🤔";
    } else {
        message.textContent = `Incorrect! The answer was "${currentAnswer}".`;
        guessButton.style.display = "none";
        nextButton.style.display = "block";
    }
    guessInput.value = "";
}

function isSimilar(userGuess, correctAnswer) {
    return correctAnswer.split(" ").some(word => userGuess.includes(word.toLowerCase()));
}

function nextEmoji() {
    getRandomPhrase();
    displayEmoji();
    message.textContent = "";
    guessButton.style.display = "block";
    nextButton.style.display = "none";
    guessInput.value = "";
}

// Event Listeners
guessButton.addEventListener("click", checkGuess);
nextButton.addEventListener("click", nextEmoji);

// Start the game
nextEmoji();
