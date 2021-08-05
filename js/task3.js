// Guessing game
// Your task is to write a simple simulator of casino roulette.
//     Requirements:
// Step 1:
// -     Create a prompt window(use confirm()).Show the message inside the window 'Do you want to play a game?'.
// - In case the user clicks the 'Cancel' button, the message 'You did not become a billionaire, but can.' should be shown(use alert).
//     Step 2:
// -     If user clicked 'Ok' – start a game: randomly(use Math.random()) choose an integer number in range[0; 5](including 0 and 5) and ask user to enter a number of pocket on which the ball could land(use prompt()).
// - User has 3 attempts to guess a number.
// - If user guessed the number on which ball landed, on 1 - st attempt prize is 100$(maximum prize for current numbers range), 2 - nd attempt – 50$, 3 - rd attempt – 25$.
// - If user did not guess a number show the message 'Thank you for your participation. Your prize is: … $'(Use alert) and ask if he wants to play again(use confirm).
//     Step 3:
// -     If user did guess - Show the message 'Congratulation, you won!  Your prize is: … $. Do you want to continue?'.
// - If user does not want to continue – show the message 'Thank you for your participation. Your prize is: … $'(Use alert) and ask if he wants to play again(use confirm).
// - If user does want to continue, make number range bigger at 5 as the previous one(for example[0; 5]-> [0; 10]), and two times bigger maximum prize(for example on 1 - st attempt prize will be 200$, 2 - nd attempt – 100$, 3 - rd attempt – 50$).Prize must be added to the previous one and number of attempts should be set to 3(user should have 3 attempts to guess a number for each numbers range)
//     -     Each time you ask user to enter a number you should show him a range of cells, how much attempts he has left, his total prize and possible prize on current attempt.See: https://prnt.sc/16hlsk1
// -     All these stuffs should be repeated until user lose or decide to quit

const prompt1 = confirm('Do you want to play a game?')
let message
let number
const random = Math.floor(Math.random() * 10) + 1;

if (prompt1 !== true) {
    alert('You did not become a billionaire, but can.');
} else
    // guessNumber = prompt('Enter a number between 0 and 5');
    number = parseInt(prompt('Guess a number from 1 to 5: '));

if (number === random) {
    alert = prompt(Math.round(Math.random() * (5 - 0 + 1) + 0))
    message = ('You guessed the correct number.');
}
// if (message === '1') {
//     alert('you wont')
// }

function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    // take the input until the guess is correct
    while (number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    // check if the guess is correct
    if (number == random) {
        console.log('You guessed the correct number.');
    }
}

let min = [1]
let max = [3]
function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    for (const number of numbers)
        number.push(min, max)
    // Change code above this line
    return numbers;
}
console.log(number);

// if (prompt1 === true) {
//     message = prompt('Enter a number between 0 and 5')
// }
// else if (prompt1 === true) {
//     alert = prompt(Math.round(Math.random() * (5 - 0 + 1) + 0))
// }

// alert(message);