

var wins = 0;
var losses = 0;





$(document).ready(function() {



// generate random number between 30 and 100 for the target score

    var targetNumber = " " ;
   
    var targetNumber =[Math.floor(Math.random() * 69 + 30)];
    console.log(targetNumber);
    // pushes random number to target score heading 
    $("#target-score").text(targetNumber);


// pushes the wins and losses to the page
    $("#wins").text(wins);
    $("#losses").text(losses);




});

// assign random number to guess 
// start with a zero wins and losses that increment after each game
// assign random variable to each of the 4 skeletons
// set the total score to zero 
// add to the score each time a skeleton is clicked
