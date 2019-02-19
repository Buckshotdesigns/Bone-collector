


    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    
    
    var image = [
    
    "assets/images/bones1.png",
    "assets/images/bones2.png",
    "assets/images/bones3.png",
    "assets/images/bones4.png",
    
    ]

$(document).ready(function() {

    

// generate random number between 30 and 100 for the target score

var targetNumber =[Math.floor(Math.random() * 69 + 30)];
    console.log(targetNumber);
    // pushes random number to target score heading 
    $("#target-score").text(targetNumber);


   
    // assigning array value to each of the skeleton images and appending them to the screen
    for (var j = 0; j < image.length; j++){

        var boneImage = $("<img>");

        boneImage.addClass("bone-image");

        boneImage.attr("src",  image[j]);

            // getting the random value associated to the four skeletons
        
            var boneOptions = Math.floor(Math.random() * 14 + 1);
            
           

        boneImage.attr("data-bone-value", boneOptions);
   
        $("#bone-img").append(boneImage);

    };

    $(".bone-image").on("click", function() {

        var boneValue = ($(this).attr("data-bone-value"));
        boneValue = parseInt(boneValue);
   

        playerScore += boneValue;
        console.log(playerScore);
    
       
        if (playerScore == targetNumber) {
            alert("You Win!!!!");
            wins ++;
           resetGame();
        }
        else if (playerScore >= targetNumber) {
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

    function resetGame() {
        
    playerScore = 0;

    targetNumber =[Math.floor(Math.random() * 69 + 30)];
    console.log(targetNumber);
    // pushes random number to target score heading 
    $("#target-score").text(targetNumber);

    for (var j = 0; j < 4; j++){

       

        var boneOptions = Math.floor(Math.random() * 14 + 1);

        boneImage.attr("data-bone-value", boneOptions);


    };

    };


});


