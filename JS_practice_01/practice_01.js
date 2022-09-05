// - Implement the functioncanVotesuch that it returnstruewhenever the age 18 or above andfalsein all other scenarios.
// - Complete the functiongetNextAgesuch that it returns the age next year (by adding 1 to the current age).
// - Implement the functioncanVotesuch that it returnstruewhenever the age 18 or above andfalsein all other scenarios. You shouldnotuse anif condition(or ternary).
// - Complete the functionevenOrOddsuch that it returns the string"even"when the number parameter it receives is even and"odd"otherwise. Can you make it work with negative numbers too?
// - Write a function named greaterNum that: takes 2 arguments, both numbers. returns whichever number is the greater (higher) number. Call that function 2 times with different number pairs, and log the output to make sure it works(e.g. "The greater number of 5 and 10 is 10.”).
// - Write a function named assignGrade that: takes 1 argument, a number score. returns a grade for the score, either "A", "B", "C", "D", or “F". Call that function for a few different scores and log the result to make sure it works.
// - Write a function named pluralize that: takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog”. Call that function for a few different scores and log the result to make sure it works. Bonus: Make it handle a few collective nouns like "sheep" and “geese".

function canVote(age) {
    if(age >= 18) {
        return console.log(`Your age is ${age} and you can vote.`);
    } else {
        return false;
    }
}

function getNextAge(bornYear) {
    let currentYear = 2022;
    let currentAge = currentYear - bornYear;
    let nextAge = currentAge + 1;
    console.log(nextAge);
}

getNextAge(1990);



function evenOrOdd(myNumber) {
    if (myNumber % 2 === 0) {
        console.log("The number is even.")
    } else console.log("The number is odd.")
}

evenOrOdd(20);

function whichGreater(firstNumber, secondNumber) {
    if(firstNumber > secondNumber) {
        console.log(`On the number ${firstNumber} and ${secondNumber}, ${firstNumber} is bigger.`)
    } else if (firstNumber < secondNumber) {
        console.log(`On the number ${firstNumber} and ${secondNumber}, ${secondNumber} is bigger.`)
    } else if (firstNumber === secondNumber) {
        console.log(`On the number ${firstNumber} and ${firstNumber}, both are equal.`)
    } else return;
}

whichGreater(23, 45);
whichGreater(27, 11);
whichGreater(11,11);

function createGrade(obtainedMark) {
    if(obtainedMark < 40) {
        console.log("Your grade is 'F'.")
    } else if (obtainedMark >= 40 && obtainedMark < 50) {
        console.log("Your grade is 'E'.")
    } else if (obtainedMark >= 50 && obtainedMark < 60) {
        console.log("Your grade is 'D'.")
    } else if (obtainedMark >= 60 && obtainedMark < 70) {
        console.log("Your grade is 'C'.")
    } else if (obtainedMark >= 70 && obtainedMark < 80) {
        console.log("Your grade is 'B'.")
    } else if (obtainedMark >= 80) {
        console.log("Your grade is 'A'.")
    } else return;
}

createGrade(80);

function pluralize(itemNumber, itemName) {
    itemName = String(itemName+"s");
    if(itemNumber > 1) {
        console.log(`${itemNumber} ${itemName}.`)
    } else return;
}
pluralize(7, "cat");

