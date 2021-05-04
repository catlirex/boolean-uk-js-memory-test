// - Show the user 4 random numbers between 1 and 100
// - After 15 seconds, ask them to enter each number in order
// - Let them know how many they got right!

function createRandomNumber (numberOfNumber){
    const randomNumber = []
    for (let i = 0; i < numberOfNumber ; i++){
        randomNumber.push(Math.floor(Math.random() * 100) +1)
    }

    return randomNumber
}

function getAnswer(){
    userAnswer = prompt(`Enter the numbers in order now:`).split(",");
    userAnswer = userAnswer.map(Number)
    for(i = 0; i <= randomNumberArray.length; i++ ){
        if (i === randomNumberArray.length) alert (`Brilliant!! You got it!!`)
        if (userAnswer[i] != randomNumberArray[i]) {
            alert(`Oops, you failed.`)
            break;
         }

    }
}

// RUN THE GAME 
let randomNumberArray = createRandomNumber(4)
let userAnswer = []

alert(`Remember the following numbers in order:
${randomNumberArray}`)
    
setTimeout(getAnswer(), 15000);
