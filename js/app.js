"use strict";
let name = prompt("Hi there, what is your name?");
let welcomeMessageOne = alert(`Hello ${name}, before I let you in, we're gonna play a little game`);

let counter = 0;

let garden = prompt("Do I like gardening? (Yes/No)").toUpperCase();
let messageOne = () => {
    if (garden === 'NO' || garden === 'N') {
        alert("I'm sorry, you didn't get it right");

    } else {
        alert("That's correct!");
        counter++;
    }
}
messageOne();

let song = prompt("Is 'Both Sides Now' one of my favorite songs? (Yes/No)").toUpperCase();
let messageTwo = () => {
    if (song === 'NO' || song === 'N') {
        alert("I'm sorry, you didn't get it right");

    } else {
        alert("That's correct!");
        counter++;
    }
}
messageTwo();

let paint = prompt("Do I like to paint? (Yes/No)").toUpperCase();
let messageThree = () => {
    if (paint === 'NO' || paint === 'N') {
        alert("I'm sorry, you didn't get it right");

    } else {
        alert("That's correct!");
        counter++;
    }
}
messageThree();

let podcast = prompt("Do I like to listen to podcast on my way to work? (Yes/No)").toUpperCase();
let messageFour = () => {
    if (podcast === 'NO' || podcast === 'N') {
        alert("I'm sorry, you didn't get it right");
    } else {
        alert("That's correct!");
        counter++;
    }
}
messageFour();

let dog = prompt("Is my dog's name Kai? (Yes/No)").toUpperCase();
let messageFive = () => {
    if (dog === 'NO' || dog === 'N') {
        alert("I'm sorry, you didn't get it right");
    } else {
        alert("That's correct!");
        counter++;
    }
}
messageFive();

let questionNumber = () => {
    if (counter > 1) {
        return 's';
    } else {
        return '';
    }
}

let welcomeMessageTwo = alert(`You answered ${counter} question${questionNumber()} correctly. Welcome to my personal website ${name}!`);