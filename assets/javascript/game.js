// Target number (random number between 19-120)
$(document).ready(function() {
    var targetNumber = Math.floor(Math.random()*102+19);
    console.log(targetNumber);

// Apend target number to game
    $("#target-number").html(targetNumber);

// Crystals x 4 (random number from 1-12)
    var userNumber1 = Math.floor(Math.random()*12+1);
    var userNumber2 = Math.floor(Math.random()*12+1);
    var userNumber3 = Math.floor(Math.random()*12+1);
    var userNumber4 = Math.floor(Math.random()*12+1);
    console.log(userNumber1,userNumber2,userNumber3,userNumber4);

// W/L and Count
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    console.log(wins,losses,totalScore);

    // On click for crystals
    $("#crystal1").on("click", function() {
        var newTotal = totalScore += userNumber1;
        $("#user-score").html(newTotal)
    })

    $("#crystal2").on("click", function() {
        var newTotal = totalScore += userNumber2;
        $("#user-score").html(newTotal)
    })

    $("#crystal3").on("click", function() {
        var newTotal = totalScore += userNumber3;
        $("#user-score").html(newTotal)
    })

    $("#crystal4").on("click", function() {
        var newTotal = totalScore += userNumber4;
        $("#user-score").html(newTotal)
    })

// Apend wins and losses to game
    $("#wins").html(wins);
    $("#losses").html(losses);
})
// Updating win total
    function victory() {
        alert("Winner winner chicken dinner!");
        wins++;
        $("#wins").html(wins);
    }

// Updating loss total
    function defeat() {
        alert("You lost...");
        losses++;
        $("#losses").html(losses);
    }