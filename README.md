# unit-4-game

# Game Description

A Fun jQuery Guessing Game

This is a front-end application the uses HTML5, CSS, JavaScript and jQuery. This particular project highlights using jQuery to dynamically update the HTML of the application.

# How To Play

You will be given a random number at the start of the game. Use the crystals to match your points to the random number. The value of the crystals changes for every game and you must figure out their values on your own.

Match your points to the random number to win. If you go over, you lose!

# Game Setup

1. I started by setting up my HTML and JS.

2. The HTML outlines where on the page you will be seeing the output of my functions and variables.

3. The first step with my JavaScript page was to make a function that allows the code to run after the html is loaded by executing the "document ready" function"

4. The first part of the game is seeing the random number generate on the html page. In order to do that we create a random number variable to generate a random number between 19-120 to show up on the display.

5. Next we need to assign a random number generator to each of our 4 crystals to generate a number between 1 and 12. We perform this function by creating a variable for each crystal and then assigning it to the random number generator equation.

6. After creating the variables, we assign them to each button using the attribute tag to get the random value to show on the document. 

7. There needs to be a variable to set the score count to zero at the start of the game so we set a current variable score. 

8. Now getting into the juice of the game we need to create an on-click function that allows increments to the data value to variable each time you click on the button.

9. If player score matches random number, create a "you win" alert and update "wins" score and generate new number.

10. If player loses, alert with "try again" and update "losses" score and reset with new number.

11. Lastly, we need to reset the game so we create a resetGame function to start the game over but retain the wins/losses score. 