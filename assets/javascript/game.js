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

// Apend wins and losses to game
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#user-score").html(totalScore);

// Reset function
function reset() {
    targetNumber = Math.floor(Math.random()*102+19);
    $("#target-number").html(targetNumber);
    console.log(targetNumber);
    userNumber1 = Math.floor(Math.random()*12+1);
    userNumber2 = Math.floor(Math.random()*12+1);
    userNumber3 = Math.floor(Math.random()*12+1);
    userNumber4 = Math.floor(Math.random()*12+1);
    console.log(userNumber1,userNumber2,userNumber3,userNumber4);
    totalScore = 0;
    $("#user-score").html(totalScore);
    console.log(totalScore);
}

// Win total function
    function victory() {
        alert("Winner winner chicken dinner!");
        wins++;
        $("#wins").html(wins);
        reset();
        console.log(reset);
    }

// Loss total function
    function defeat() {
        alert("You lost...");
        losses++;
        $("#losses").html(losses);
        reset();
        console.log(reset);
    }

// On click for crystals
    $("#crystal1").on("click", function() {
        var newTotal = totalScore += userNumber1;
        $("#user-score").html(newTotal)
// Win condition
        if (totalScore === targetNumber) {
            victory();
        }
        else if (totalScore > targetNumber) {
            defeat();
        }
    })

    $("#crystal2").on("click", function() {
        var newTotal = totalScore += userNumber2;
        $("#user-score").html(newTotal)

        if (totalScore === targetNumber) {
            victory();
        }
        else if (totalScore > targetNumber) {
            defeat();
        }
    })

    $("#crystal3").on("click", function() {
        var newTotal = totalScore += userNumber3;
        $("#user-score").html(newTotal)

        if (totalScore === targetNumber) {
            victory();
        }
        else if (totalScore > targetNumber) {
            defeat();
        }
    })

    $("#crystal4").on("click", function() {
        var newTotal = totalScore += userNumber4;
        $("#user-score").html(newTotal)

        if (totalScore === targetNumber) {
            victory();
        }
        else if (totalScore > targetNumber) {
            defeat();
        }
    })

})