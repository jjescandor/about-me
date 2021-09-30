'use strict';

let namePrompt = () => {
    let name = prompt("Hi there, what is your name?");
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

let welcomeMessageOne = alert(`Hello ${user}, before I let you in, we're gonna play a little game`);



let checkAnswer = (answer) => {
    if (answer === 'NO' || answer === 'N') {
        alert("I'm sorry, you didn't get it right");
    } else if (answer === 'YES' || answer === 'Y') {
        alert("That's correct!");
        counter++;
    } else {
        alert("Invalid response");
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
        alert("You must answer at least one question correctly to proceed");
    }
} while (counter <= 0)

let welcomeMessageTwo = () => {
    alert(`You answered ${counter} question${questionNumber()} correctly. Welcome to my personal website ${user}!`);
}

welcomeMessageTwo();