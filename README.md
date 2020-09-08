# Meal Prep App (Preppy)

### About

This application allows users to create a weeklong meal plan that fits their schedule and includes recipes tailored to their dietary preferences. 

Users select a start date for their plan and input the timeslots they are available to cook on each day of the plan. Then, they select cuisine and dietary preferences, and choose recipes to add to their plan based on these parameters. After users select their recipes, they are taken to a final plan page that shows them which times to cook certain each recipe, and also provides them with a shopping list and recipe cards for reference.

This is a fullstack redesign of my previous meal prep application, and is built in React.js, with a Node.js backend and PostgreSQL database. The Spoonacular Recipe API is used for dynamic recipe searching.

### Walkthrough

When opening the app, the user will be able to login or create an account (email/password authentication).

<login signup screens>



Once the user is authenticated, they will be taken to the main page for the app.

<main page>



When the user clicks the 'Create Plan' button, they will be taken into a multistep form for creating their meal plan. 

The user first selects their plan start date

<start date page>



Then the user selects the times they are available to cook each day

<time select page>



The user then selects the cuisine preferences for their plan

<cuisines page>



The user then selects their dietary preferences and restrictions

<preferences page>



Once all details are input, the user will be taken to the page for their final meal plan


<final plan page (show each section)>



The user can visit the 'View Plans' page to see a list of all their created plans so far, and can view each plan 'view plan'

<view plans page>




<br>
<img src="/public/assets/images/signup.PNG" width="250" height="250"/>


This is a gif highlighting the plan creation and display process:
<br>
<img src="/public/assets/images/walkthrough_1.gif" width="600" height="250"/>


### Technology Used

* JavaScript
  * React.js
  * Node.js
  * Express.js
  * Passport.js (authentication)
  * Moment.js (date parsing)
  * FullCalendar.io
* HTML
* CSS/React Bootstrap
* PostgreSQL
 * Sequelize ORM

