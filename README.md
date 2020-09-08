# Meal Prep App (Preppy)

### About

This application allows users to create a weeklong meal plan that fits their schedule and includes recipes tailored to their dietary preferences. 

Users select a start date for their plan and input the timeslots they are available to cook on each day of the plan. Then, they select cuisine and dietary preferences, and choose recipes to add to their plan based on these parameters. After users select their recipes, they are taken to a final plan page that shows them which times to cook certain each recipe, and also provides them with a shopping list and recipe cards for reference.

This is a fullstack redesign of my previous meal prep application, and is built in React.js, with a Node.js backend and PostgreSQL database. The Spoonacular Recipe API is used for dynamic recipe searching.

[Link to deployed app](https://polar-basin-68400.herokuapp.com/)

### Technology Used

* JavaScript
  * React.js
  * Node.js
  * Express.js
  * Axios (API config)
  * Passport.js (authentication)
  * Moment.js (date parsing)
  * FullCalendar.io
* HTML
* CSS
 * React Bootstrap
 * Flexbox
* PostgreSQL
 * Sequelize ORM
* Heroku

### Walkthrough

<br>

When opening the app, the user will be able to login or create an account (email/password authentication).

#### Login Page
![Login Page](./meal-prep-react/src/assets/images/readme/login.png)

#### Signup Page

![Signup Page](./meal-prep-react/src/assets/images/readme/signup.png)

#### Account Menu
![Account Menu](./meal-prep-react/src/assets/images/readme/authmenu.png)

<br>

Once the user is authenticated, they will be taken to the main page for the app.

When the user clicks the 'Create Plan' button, they will be taken into a multistep form for creating their meal plan. 

#### Main Page
![Main Page](./meal-prep-react/src/assets/images/readme/main.png)

<br>

The user first selects their plan start date

#### Plan Start Date

![Start Date](./meal-prep-react/src/assets/images/readme/planstart.png)

<br>

Then the user selects the times they are available to cook each day

#### Plan Times

![Plan Times](./meal-prep-react/src/assets/images/readme/plantimes_1.png)

<br>

The user then selects the cuisine preferences for their plan

#### Plan Cuisines

![Plan Cuisines1](./meal-prep-react/src/assets/images/readme/cuisinesclosed.png)
![Plan Cuisines2](./meal-prep-react/src/assets/images/readme/cuisinesopen.png)
![Plan Cuisines3](./meal-prep-react/src/assets/images/readme/cuisinesselected.png)

<br>

The user then selects their dietary preferences and restrictions

#### Plan Restrictions

![Plan Restrictions1](./meal-prep-react/src/assets/images/readme/dietsclosed.png)
![Plan Restrictions2](./meal-prep-react/src/assets/images/readme/dietsopen.png)
![Plan Restrictions3](./meal-prep-react/src/assets/images/readme/dietsopen_2.png)
![Plan Restrictions4](./meal-prep-react/src/assets/images/readme/dietsselected.png)

<br>

Once all details are input, the user will be taken to the page for their final meal plan


<final plan page (show each section)>


The user can visit the 'View Plans' page to see a list of all their created plans so far, and can view each plan 'view plan'

<view plans page>

