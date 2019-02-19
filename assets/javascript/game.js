
    

$(document).ready(function() {


    // global variables
    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    var boneOptions = [];
    
    // defining as global variable to prevent scope issue
    var targetNumber = 0;
//   function to start and restart game 
    resetGame();

    function resetGame() {
// resets scores back to 0 after game restarts
    targetNumber = 0;
    playerScore = 0;
    
    
// generates random target number between 1-120 for user to get
    targetNumber =[Math.floor(Math.random() * 101 + 19)];
    console.log("second number" + targetNumber);
    // pushes random number to target score heading 
    $("#target-score").text(targetNumber);


   
    // assigning 4 random numbers to use for skeleton images 
    for (var j = 0; j < 4; j++){
        
            boneOptions[j] = Math.floor(Math.random() * 12) + 1;

    };
// assigning attribute value to each of the skeleton images and putting them in html
    for (var j = 0;j < 4;j++){

        $("#bone-image-"+(j+1)).attr("val", boneOptions[j]);
        
    };
};


// click function on each of the skeleton images 
    $(".bone-image").on("click", function() {
// grabs the number in the attribute value after clicking the skeleton 
        var boneValue = ($(this).attr("val"));
        boneValue = parseInt(boneValue);
   
// adds each of the numbers clicked from the skeleton to the player score 
        playerScore += boneValue;
        
    
    //sets the win condition if you get the target number and alerts user they won before resetting the game
        if (playerScore == targetNumber) {
            alert("You Win!!!!");
            wins ++;
            
           resetGame();
           
        }
    // sets the losing condition and alerts the user they lost before resetting the game 
        else if (playerScore > targetNumber) {
            alert ("You Lose!!!!!");
            losses ++;
            
            resetGame();
           
        }
    // pushes player score to the page
    $("#player-score").text(playerScore);

    // pushes the wins and losses to the page
    $("#wins").text( wins);
    $("#losses").text( losses);

    });


});


