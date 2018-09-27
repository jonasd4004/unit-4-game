// Generate random number to appear on screen
$(document).ready(function () {
    var randNumb = Math.floor(Math.random() * 101) + 19
    $("#random-number").text(randNumb);

    
    
    // Create a variable for each crystal
    var cn1 = Math.floor(Math.random() * 12) + 1;
    var cn2 = Math.floor(Math.random() * 12) + 1;
    var cn3 = Math.floor(Math.random() * 12) + 1;
    var cn4 = Math.floor(Math.random() * 12) + 1;

    $("#crystal1").attr({"data-value": cn1});
    $("#crystal2").attr({"data-value": cn2});
    $("#crystal3").attr({"data-value": cn3});
    $("#crystal4").attr({"data-value": cn4});

    
    var currentScore = 0;

    // create an on click function that increments the data value to variable each time you click

    
    $(".button").on("click", function (){

        var clicked = parseInt($(this).attr("data-value"));
        console.log("clicked", randNumb);
        currentScore += clicked;
        $("#score-number").html(currentScore);
        var wins = 0;
        var losses = 0;
        
        // If player score matches random number, create a "you win" alert and update "wins" score and generate new number.
        if (currentScore === randNumb) {
            console.log("in if cS & RN", currentScore, randNumb);
            wins++;
            $("#wins-total").html(wins);
            alert("You win!");
            gameReset();
            // If player loses, alert with "try again" and update "losses" score and reset with new number. 
        } if (currentScore > randNumb) {
            console.log("in  cS > RN", currentScore, randNumb);
            losses++;
            $("#losses-total").html(losses);
            alert("You lose!");
            gameReset();
        }
    })
    
    function gameReset() {
        randNumb = Math.floor(Math.random() * 101) + 19
        $("#random-number").text(randNumb);
        console.log("inGR rN", randNumb);
    
        currentScore = 0;
        console.log("inGR cS", currentScore);

        $("#score-number").html(currentScore);
        var cn1 = Math.floor(Math.random() * 12) + 1;
        var cn2 = Math.floor(Math.random() * 12) + 1;
        var cn3 = Math.floor(Math.random() * 12) + 1;
        var cn4 = Math.floor(Math.random() * 12) + 1;

        $("#crystal1").attr({"data-value": cn1});
        $("#crystal2").attr({"data-value": cn2});
        $("#crystal3").attr({"data-value": cn3});
        $("#crystal4").attr({"data-value": cn4});

    }
    
})

