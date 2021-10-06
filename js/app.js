'use strict';
//Welcome Message
const namePrompt = () => {
    let name = prompt(`Hi there 👋, what is your name?`);
    if (name === undefined || name === null || name === '') {
        while (name === undefined || name === null || name === '') {
            alert(`You must enter a valid name`)
            name = prompt(`What is your name?`);
        }

    } else {
        return name;
    }
    return name;
}
const user = namePrompt()

//First game
const messageOne = alert(`Hello ${user}, before I let you in, you're gonna play three games. 🎲 🎮\r\nThe first game will test how well you know me.`);
let validAnswer = false;
//Checks if answer is correct
const checkAnswer = (answer) => {
    //Checks if the user response is valid
    do {
        if (answer === 'NO' || answer === 'N' || answer === 'YES' || answer === 'Y') {
            validAnswer = true;
            break;
        } else {
            validAnswer = false;
            answer = prompt(`Invalid response 😔 Enter a valid answer (Yes/No):`).toUpperCase();
        }
    } while (!validAnswer)
    //Checks if the user response is correct
    if (answer === 'NO' || answer === 'N') {
        alert(`I'm sorry, you didn't get it right 😔`);
    } else if (answer === 'YES' || answer === 'Y') {
        alert(`That's correct! 😀`);
        score++;
    }
}


let score = 0;
const questionNumber = () => {
    if (score > 1) {
        return 's';
    } else {
        return '';
    }
}
//Loop will run until user inputs at least one answer correctly
do {
    function questionOne() {
        let garden = prompt(`Do I like gardening? (Yes/No) 🪴`).toUpperCase();
        checkAnswer(garden);
    };

    questionOne();

    function questionTwo() {
    let song = prompt(`Is 'Both Sides Now' one of my favorite songs? (Yes/No) 🎶`).toUpperCase();
    checkAnswer(song);
    }
    
    questionTwo();

    function questionThree() {
    let paint = prompt(`Do I like to paint? (Yes/No) 🎨`).toUpperCase();
    checkAnswer(paint);
    }

    questionThree();

    let podcast = prompt(`Do I like to listen to podcast on my way to work? (Yes/No) 🎧`).toUpperCase();
    checkAnswer(podcast);

    let dog = prompt(`Is my dog's name Kai? (Yes/No) 🐕`).toUpperCase();
    checkAnswer(dog);

    questionNumber();
    if (score === 0) {
        alert(`You must answer at least one question about me correctly to proceed.`);
    }
} while (score <= 0)

//Second Game
const messageTwo = alert(`For the second game, the computer will generate a random number from 0 - 9.\r\nYou will have four tries to guess the correct answer.`);
//Initializes tries to 4 and isCorrect to false
let tries = 4;
let isCorrect = false;
//Array container for user guesses
const guessesOne = [];
//Generates the random number
const randomNumber = Math.floor(Math.random() * 9);
//Loop will run until tries is a falsy or answer is correct
while (tries && !isCorrect) {
    let userNumber = prompt(`Enter a number:`);
    //Checks if input is a valid number
    while (isNaN(parseInt(userNumber))) {
        userNumber = prompt(`Enter a valid number:`);
    }
    tries--;
    //Pushes valid user input into guessesOne Array
    guessesOne.push(userNumber);
    //Checks valid user input against randomly generated number
    if (parseInt(userNumber) > randomNumber) {
        alert(`Too High 😔\r\n\Guess reamining: ${tries}`);
    } else if (parseInt(userNumber) < randomNumber) {
        alert(`Too Low 😔\r\n\Guess reamining: ${tries}`);
    } else if (parseInt(userNumber) === randomNumber) {
        alert(`Random Computer Generated Number:  ${randomNumber}\r\nYour guess: ${userNumber} \r\nYou guessed the number correctly 😀`);
        isCorrect = true;
        score++;
    }
}

//Displays a message after the user used up all 4 tries without guessing the correct answer
if (!isCorrect) {
    alert(`Computer Generated Number: ${randomNumber}\r\nYour guesses: ${guessesOne}\r\nYou did not guess the number correctly 😔`);
}

//Third game;
const messageThree = alert(`For the third and last game, name at least one place (city) that is in the top ten of my favorite places.\r\nYou will have 6 tries to guess the correct answer`);
const arrayOfAnswers = ['Maui', 'Kyoto', 'Albay', 'Oslo', 'Dubai', 'Singapore', 'Sevilla', 'Reykjavik', 'Chania', 'Palermo'];
//Array container for user guesses
const guessesTwo = []
//resets tries to 6 and isCorrect to false
tries = 6;
isCorrect = false;
//Loop will run until tries is a falsy or answer is correct
while (tries && !isCorrect) {
    let userGuess = prompt("Enter your guess:").toUpperCase();
    //Pushes user input into guessesTwo Array
    guessesTwo.push(userGuess);
    tries--;
    //Checks the user response against the list of correct answers in the array
    for (let correctAnswer of arrayOfAnswers) {
        if (userGuess === correctAnswer.toUpperCase()) {
            alert(`${userGuess} is correct! 😀\r\nHere are all the possible answers:\r\n\r\n${arrayOfAnswers}`);
            isCorrect = true;
            score++;
        }
    }
    if (tries > 0 && !isCorrect) {
        alert(`Try again 😔\r\nGuess remaining: ${tries}`)
    }
}
//Displays a message after the user used up all 6 tries without guessing the correct answer
if (!isCorrect) {
    alert(`You didn't give a correct answer 😔\r\nYour guesses: ${guessesTwo}\r\n\r\nHere are all the possible answers:\r\n\r\n${arrayOfAnswers}`);
}
const messageFour = alert(`You answered ${score} out of 7 questions correctly. Welcome to my page ${user}! 😀`);



