


    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    var boneOptions = [];
    

$(document).ready(function() {

    

    
    var targetNumber = 0;
  
    resetGame();

    function resetGame() {

    targetNumber = 0;
    playerScore = 0;
    
    
   
    targetNumber =[Math.floor(Math.random() * 102 + 19)];
    console.log("second number" + targetNumber);
    // pushes random number to target score heading 
    $("#target-score").text(targetNumber);


   
    // assigning array value to each of the skeleton images and appending them to the screen
    for (var j = 0; j < 4; j++){
        
            boneOptions[j] = Math.floor(Math.random() * 12) + 1;

    };

    for (var j = 0;j < 4;j++){

        $("#bone-image-"+(j+1)).attr("val", boneOptions[j]);
        
    };
};



    $(".bone-image").on("click", function() {

        var boneValue = ($(this).attr("val"));
        boneValue = parseInt(boneValue);
   

        playerScore += boneValue;
        console.log(playerScore);
    
       
        if (playerScore == targetNumber) {
            alert("You Win!!!!");
            wins ++;
            
           resetGame();
           
        }
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


