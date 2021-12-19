# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Main Page Component`

This is the main page which run everything 
and containes the main state of the game 
and all the handlers.
playerController handler which give us the controll to player info and score and status 
newGame handler this handler restart The game
RollDice Handler is for rolling the dice each time randomly 
check winner this handler is for to chcke evrytime we roll the dice if anyone Won
other handlers are for input control



### `Player`

This Component is to show the player info and score  in the screen although the style changes according
to the game kind but it depends on the same player info . 

### `ButtonGame`

Component for main buttons on the game we use this component to display main buttons on the 
game such as new game ,the props of this component are :
Text:text of the button
callback:action to do on click
and logo for the button


### `AiOn`

This component is to turn on the Ai or computer game 
The props :
checked:is changable bolean value
Text : for button text
callback: action call back


