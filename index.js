// - Show the user 4 random numbers between 1 and 100
// - After 15 seconds, ask them to enter each number in order
// - Let them know how many they got right!

function playMemoryTest(numbersToDisplay) {

function createRandomNumber (numberOfNumber){
    const randomNumber = []
    for (let i = 0; i < numberOfNumber ; i++){
        randomNumber.push(Math.floor(Math.random() * 100) +1)
    }

    return randomNumber
}


function getAnswer(){

    for(i = 1; i <= randomNumberArray.length; i++){
    userAnswer.push(prompt(`Enter the ${ordinal(i)} number:`));
    }
    userAnswer = userAnswer.map(Number)
    for(i = 0; i <= randomNumberArray.length; i++ ){
        if (i === randomNumberArray.length) alert (`Brilliant!! You got it!!`)
        if (userAnswer[i] != randomNumberArray[i]) {
            alert(`Oops, you failed.`)
            break;
         }

    }
}

function ordinal(number) {
    const ordinalRules = new Intl.PluralRules("en-US", {type: "ordinal"});
    const suffixes = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
    };

    const suffix = suffixes[ordinalRules.select(number)];
    return (number + suffix);
}

// RUN THE GAME 
    
let randomNumberArray = createRandomNumber(numbersToDisplay)
let userAnswer = []

alert(`Remember the following numbers in order:
${randomNumberArray}`)
    
setTimeout(getAnswer, 15000);

}


playMemoryTest(5)

