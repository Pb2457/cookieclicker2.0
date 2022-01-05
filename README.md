<h1>Cookie Clicker by Pb files</h1>
Battle.JPG:
This is an image that is mentioned and used in Line 77, in the second part of the setAttribute statement that is used in the function called nextLevel() because when the next level is set, it sets the background to be the image.

mainpage.html:
This file is the HTML file that is referenced at first and is considered the home screen of the application, containing the <div> elements and all front-end components and aspects which are used to interact with the application. The cookie is listed as an input due to the fact that it is being pressed, inputted into the application, processed, and then outputted in the cookieClick() function where the score variable is added to by 1 using score = score+1. All other comments are added in the file, specifying what each important aspect is in the application.

music.mp3:
The file listed is a Jazz soundtrack which is played as soon as the cookie is clicked. The way that I made it not be looped and play from the beginning every time the cookie was clicked, was that in the cookieClick() function, I said that when the cookie is clicked, the musicCount variable would add 1. Then above that in Lines 37-41, the nextLevel() function is slightly defined because the variable nextLevel1, says that in nextLevel() if the button is clicked to advance to that level, it would add 1 to nextLevel1.
-Extra:
          In cookieClick, like before, the if and else statement says if nextLevel1 is == 0 then it would add by 1 and else, it would add by 2. Therefore it certifies that if the user moves to level 2, it would add by 2 and add by 1 in level 1.

popsound.mp3:
On the event that the cookie was clicked, in cookieClick() I defined a variable to contain the mp3 file of the sound called music(Extra: it is music in the sense that it plays the pop sound), which then plays a pop sound.

shopscreen.html:
For the shop screen, I wanted to make it a simple idea that you can change the background color of the mainpage.html screen. Using a SessionStorage command, I was able to store the information from the button to move back to the main page and display the color information on the screen.
-Extra:
I added in a feature that makes it so that to confirm a purchase, you need to double click and therefore prevents a massive loss of points.

style.css:
Using css I was able to make many "class" references and then pre-define the modules that were mentioned throughout to make styling easier.

wineffect.wav:
When the user reached 100 total clicks, they would technically win and beat the game and then play a sound. The user is allowed to click beyond that though and continue with the multiplier of 2.

winner.png:
To be able to fulfill the requirement of having a win and loss screen, when the user reached 100 total clicks, they would have a win background/screen and a loss screen is just implemented when the user gets timed out for inactivity after a certain amount of time. Or in the sense kicked out.

cookie.png:
This is the cookie picture that was used as the input(mentioned in Line 120) and increased the score.



  <h1>How I fulfilled the requirements:</h1>

Add sounds to clicking - When cookie is clicked, pop.mp3 is triggered and played.

Add environment changes over time - User has the ability to change the level and background in unique and different ways.

Add another level - Level 2 button takes you to the next level and adds a multiplier

Add shaking targets - When the cookie is clicked, the cookie moves using the Math.random() function which is defined from Javascript.

Add misclicks - The code is specifically made to not recognize anything other than the cookie and points aren't taken away if misclicked, but bonuses aren't added such as multipliers.

Add win and loss screens-If the score == 100, then the background is set to a win screen and if the user times out, then it removes the user from the browser or goes inactive and unresponsive.

Add moving targets - On the event the cookie is clicked, it moves to a random position

A personal addition - I added the safeguard mechanism that you can only purchase something by double-clicking the object
