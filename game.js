//Save the buttons as constants
const guessButton = document.querySelector("#guess")
const resetButton = document.querySelector("#reset")

// save the text fields as constants
const message = document.querySelector("#message")
const highScoreText = document.querySelector("#highscore")


//Make a random number between 1-5
let randomNumber = generateNumber();
// console.log(randomNumber);

// bool to check if first try
let firstTry = true;
let highScore = 0;
let streak = 0;

// variable to save user input value
let userGuess

//Add an eventListener that takes input from the input field
guessButton.addEventListener("click",()=>{
    userGuess = document.querySelector("#userGuess").value
    console.log(userGuess)

    if (userGuess>randomNumber){
        message.textContent = "Too high!"
    }
    if (userGuess<randomNumber){
        message.textContent = "Not high enough!"
    }

    if (userGuess==randomNumber){
        message.textContent = "You guessed right!!!"
        console.log("You guessed right!!!")
        randomNumber = generateNumber()
        console.log(randomNumber)

        if (firstTry){
            streak++
            console.log(`Streak is: ${streak}`)
        }
        firstTry = true;
        if (streak>highScore){
            highScore=streak;
            highScoreText.textContent = highScore;
        }
    }
    else {
        //message.textContent = "You were totally wrong"
        console.log("You were totally wrong")
        streak=0;
        firstTry= false;
    }


    console.log("Congrats")
})

resetButton.addEventListener("click", () =>{
    randomNumber = generateNumber()
    console.log(randomNumber);
    message.textContent = ""
    document.querySelector("#userGuess").value = ""
    highScore = 0;
    highScoreText.textContent = "0"
    streak=0;
})



//Returns a random number between 1-5
function generateNumber(){
    return Math.floor(Math.random() * 5) + 1;
}