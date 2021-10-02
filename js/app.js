'use strict';

let namePrompt = () => {
    let name = prompt("Hi there 👋, what is your name?");
    if (name === undefined || name === null || name === '') {
        while (name === undefined || name === null || name === '') {
            alert("You must enter a valid name")
            name = prompt("What is your name?");
        }

    } else {
        return name;
    }
    return name;
}

let user = namePrompt()

let messageOne = alert(`Hello ${user}, before I let you in, we're gonna play three games.\r\nThe first game will test how well you know me.`);

let checkAnswer = (answer) => {
    if (answer === 'NO' || answer === 'N') {
        alert("I'm sorry, you didn't get it right 😔");
    } else if (answer === 'YES' || answer === 'Y') {
        alert("That's correct! 😀");
        counter++;
    } else {
        alert("Invalid response 😔");
    }
}

let counter = 0;
let questionNumber = () => {
    if (counter > 1) {
        return 's';
    } else {
        return '';
    }
}

do {
    let garden = prompt("Do I like gardening? (Yes/No)").toUpperCase();
    checkAnswer(garden);
    let song = prompt("Is 'Both Sides Now' one of my favorite songs? (Yes/No)").toUpperCase();
    checkAnswer(song);
    let paint = prompt("Do I like to paint? (Yes/No)").toUpperCase();
    checkAnswer(paint);
    let podcast = prompt("Do I like to listen to podcast on my way to work? (Yes/No)").toUpperCase();
    checkAnswer(podcast);
    let dog = prompt("Is my dog's name Kai? (Yes/No)").toUpperCase();
    checkAnswer(dog);

    questionNumber();

    if (counter === 0) {
        alert("You must answer at least one question about me correctly to proceed.");
    }
} while (counter <= 0)

let messageTwo = alert(`For the second game, the computer will generate a random number.\r\nYou will have four tries to guess that number.`);

let guesses = [];
let userNumber = prompt("Enter a number");
console.log(userNumber * 2)

guesses.push(userNumber);

let randomNumber = Math.floor(Math.random() * 9);

for (let i = 0; i < 3; i++) {
    if (parseInt(userNumber) > randomNumber) {
        alert("Too High");
        userNumber = prompt(`Enter a number again`);
        guesses.push(userNumber);
    } else if (parseInt(userNumber) < randomNumber) {
        alert("Too Low");
        userNumber = prompt(`Enter a number again`);
        guesses.push(userNumber);
    } else if (parseInt(userNumber) === randomNumber) {
        alert(`Computer Generated Number:  ${randomNumber}\r\nYour guess: ${userNumber} \r\nYou got it right 😀`);
        counter++;
        break;
    }
}

if (parseInt(userNumber) !== randomNumber) {
    alert(`Computer Generated Number: ${randomNumber}\r\nYour guesses: ${guesses}\r\nYou did not get it right 😔`);
}

let messageThree = alert(`For the third and last game, name at least one place (city) that is in the top ten of the favorite places that I have visited.`);

let arrayOfAnswers = ['MAUI', 'KYOTO', 'ALBAY', 'OSLO', 'DUBAI', 'SINGAPORE', 'SEVILLA', 'REYKJAVIK', 'CHANIA', 'PALERMO'];
let tries = 6;
let isCorrect = false;

while (tries && !isCorrect) {
    let guess = prompt("Enter your guess").toUpperCase();
    tries--;
    for (let correctAnswer of arrayOfAnswers) {
        if (guess === correctAnswer) {
            alert(`That is correct! 😀\r\nHere are all the possible answers:\r\n\r\n${arrayOfAnswers}`);
            isCorrect = true;
            counter++;
            break;
        }
    }
    if (!isCorrect) {
        alert('guess remaining: ' + tries)
    }
    if (tries === 0) {
        alert(`You didn't give a correct answer 😔\r\nHere are all the possible answers:\r\n\r\n${arrayOfAnswers}`);
    }
}


let messageFour = alert(`You answered ${counter} out of 7 questions correctly. Welcome to my page ${user}! 😀`);

