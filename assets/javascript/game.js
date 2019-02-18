



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

    var targetNumber = " " ;
   
    var targetNumber =[Math.floor(Math.random() * 69 + 30)];
    console.log(targetNumber);
    // pushes random number to target score heading 
    $("#target-score").text(targetNumber);

    // getting the random value associated to the four skeletons

   
    for (var i = 0; i < 4; i++){
    
    var boneOptions = Math.floor(Math.random() * 13 + 1 );
     console.log(boneOptions);
    
    };
    
    // assigning array value to each of the skeleton images and appending them to the screen
    for (var j = 0; j < image.length; j++){

        var boneImage = $("<img>");

        boneImage.addClass("bone-image");

        boneImage.attr("src",  image[j]);

        boneImage.attr("data-bone-value", boneOptions);

        $("#bone-img").append(boneImage);

    };

    // pushes the wins and losses to the page
    $("#wins").text(wins);
    $("#losses").text(losses);

    // pushes player score to the page
    $("#player-score").text(playerScore);




});

// assign random number to guess 
// start with a zero wins and losses that increment after each game
// assign random variable to each of the 4 skeletons
// set the total score to zero 
// add to the score each time a skeleton is clicked
