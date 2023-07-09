// <!-- DOM Manipulation
// - If we want our websites to be interactive, we want it to change on the fly
//  - So when the user clicks a button we need to respond to it by changing the content
// - DOM catalogs our web page into individual objects which we can select and manipulate
// -->
 
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highScore = 0
console.log(secretNumber)
 
 
// Selecting the check button
const c = document.querySelector(".check")
// Add event listener to the check button
c.addEventListener("click",()=>{
 
    // fetch the user input from the DOM
    let guess = Number(document.querySelector(".guess").value)
    // console.log(guess)
    // handling the cases
    // 1. invalid/no input

    if(!guess){
        alert("Enter a valid value!")
    }
 
    // correct guess
    else if(secretNumber === guess){
        //change background color to #60b347
        document.querySelector("body").style.backgroundColor = "#60b347"
       
        // Display the message -> You guessed it right!
        document.querySelector(".message").textContent = "You guessed it right!"
 
        // Display the secret number
        document.querySelector(".number").innerHTML = secretNumber
 
        // Check for new high score and display it
        if(highScore<score){
            document.querySelector(".highscore").innerHTML = score
        }
       
    }
 
    // guess is less than random number
 
    else if(secretNumber > guess){
        if(score>1){
        // Display You lost if score goes below 0
       score = score - 1
       document.querySelector(".score").innerHTML = score

       
        // Otherwise Diplay the message Too Low, Display the score and decrement the score  
        document.querySelector(".message").innerHTML = "Too low!"
        
        }
 
        else{
            document.querySelector(".message").innerHTML = "You Lost!"
            document.querySelector("body").style.backgroundColor = "rgb(221, 174, 174)" 
            document.querySelector("h1").textContent = "Correct Answer:"
            document.querySelector(".number").innerHTML = secretNumber
        }      
    }
 
    // guess greater than random number
    else if(secretNumber < guess){
 
        if(score>1){
       // Display You lost if score goes below 0
       score = score -1
       document.querySelector(".score").textContent = score
 
        // Otherwise Diplay the message Too High, Display the score and decrement the score
        document.querySelector(".message").textContent = "Too High!"  
        
        }
        else{
            document.querySelector(".score").innerHTML = 0
            document.querySelector(".message").innerHTML = "You Lost!"
            document.querySelector("body").style.backgroundColor = "rgb(221, 174, 174)" 
            document.querySelector("h1").textContent = "Correct Answer:"
            document.querySelector(".number").innerHTML = secretNumber
        }      
    }
})

// Selecting the again button
const a = document.querySelector(".again")
// Add event listener to the again button
a.addEventListener("click",()=>{
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 10;
  
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".number").innerHTML = "?"
    document.querySelector(".score").innerHTML = "10"
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.backgroundColor = "rgb(34, 34, 34)" 
    
})