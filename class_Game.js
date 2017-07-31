class Game {
  
  // each new game starts with these variables
  constructor(){
    
    // min/max values for binary search 
    this.min = 0
    this.max = 101 
    
    // keep track of attempts
    this.numTries = 0
    
    // initial guess is random
    this.guess = Math.floor(Math.random() * 100)
  }
  
  /**
   * 
   * Class Methods
   * 
   **/
   
  static play() {
    
    // instantiate a new game
    const game = new Game()
    
    // start game
    game.play()
  }
  
  /**
   * 
   * Instance Methods
   * 
   **/
   
  // gameplay flow
  play(){
    
    // welcome message
    alert("Welcome to 'Higher or Lower!'\nThink of a number between 1 and 100, but don't tell me what it is")
    
    // declare input outside of loop
    var input
    
    
    // AI guess logic loop 
    // Break out of loop when input is 'y'
    while (input !== "y") {
      /**
       * AI makes a number guess and prompts for input. 
       * If the number is higher, input should be 'h'
       * If the number is lower, input should be 'l'
       * If the number is the same as the guess, input should be 'y'
       **/
      input = prompt("Is your number " + this.guess + "?" + "\nIf it's higher, type 'h'\nIf it's lower, type 'l'\nIf it's correct, type 'y'").toLowerCase()
      
      //  update the guess based on input
      this.updateGuess(input)
    }
    
    // AT THE END OF THE GAME
    // Game over results
    alert("I knew it all along! It took me " + this.numTries + " tries to get it right.")
    
    // ask to play again
    var playAgain = prompt("Do you want to play again? y/n").toLowerCase()
    
    // if response is 'y', start a new game
    if(playAgain === 'y'){
      Game.play()
    }
  }
  
  
  updateGuess(input){
    // number of tries goes up by one
    this.numTries++
    
    // number is lower logic
    if(input == 'l') {
      this.max = this.guess
      this.guess = Math.floor((this.min + this.max) / 2)
      
      // number is higher logic
    } else if (input == 'h') {
      this.min = this.guess
      this.guess = Math.floor((this.min + this.max) / 2)
      
      // number is correct logic
    } else if (input !== 'y') {
      alert("Sorry, I didn't get that")
    }
  }

}

// start a new game
Game.play()