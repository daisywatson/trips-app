# trips-app
Planning a trip often requires using multiple apps with no easy way to coordinate between them. The purpose of this trip planning app is to provide a centralized location for travelers to store all the information they need to plan and go on a trip. They can customize what information they want to save and see on a map. They can also save and create as many trips they want in their own personalized account. 

## Live Demo
https://trip-planner-map-react.herokuapp.com/

## Technologies Used
Front-end: React
Back-end: Flask
Database: SQLite (local), Postgres (Heroku)
API: Bing Maps

## User Stories 
1. The user can log in or register when opening the app's home page
2. The user clicks 'Sign up here' if registering
3. The user enters a username and password and then presses the log in/sign up button
4. If the user entered an incorrect pasword logging in or attempts to create an account with an existing username, an error will appear at the bottom of the page
5. The user can continue entering usernames and passwords until the user successfully logs in 

### User's Personal Page
1. After the user successfully logs in, the user has the option to log out by pressing the log out button in the top right
2. The user can press the Make a New Trip button to create a new trip
3. A form appears and the user must enter all required information
4. After the user enters all information in the form, the user presses the create trip button at the bottom of the form
5. The form will close and the trip will appear the bottom of the page as a card

### Trip Cards
1. The user can press three buttons on a trip card: the title, the delete button, and the edit button
2. The delete button will the delete card and make it disappear from the page if the user presses it
3. The trip title will launch a modal when pressed which will show the user input points on the map
4. The edit button will launch a form modal where the user can change information and then press the update trip button at the bottom of the form to update

## Wireframes

## Entity Relationship Diagram
![ER Diagram](https://github.com/daisywatson/trips-app/blob/master/Images/Database-ER%20diagram.jpeg)

## Unsolved Problems
- exception handling for inputting form data has not been added yet
- the date does not display when editing a trip

## Future Features
- user reviews 
- 5 star rating
- multiple push pins can be added 
- how many miles travelled total 
- add checkbox boolean if user has traveled someplace 
- display different color on user page if travelled already/not traveled yet i.e. green vs red 
