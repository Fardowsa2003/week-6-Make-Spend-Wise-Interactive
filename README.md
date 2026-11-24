
# SpendWise - Interactive Budgeting Application

## Project Description

SpendWise is an interactive budgeting application that helps
users record expenses, monitor their spending, and manage
their monthly budget.

The application uses HTML, CSS, and JavaScript to provide
a simple and user-friendly budgeting experience.

## Improvements Made to SpendWise This Week

The following improvements were implemented:

1. Added an interactive expense form.
2. Added a monthly budget dashboard.
3. Added automatic expense calculations.
4. Added a remaining balance display.
5. Added budget warnings and spending feedback.
6. Added expense history.
7. Added the ability to delete expenses.
8. Improved the application's appearance and responsiveness.

## How Conditionals Are Used

Conditional statements are used to make budgeting decisions.

The application checks whether:

- No expenses have been recorded.
- The monthly budget has been exceeded.
- The entire budget has been used.
- 80% or more of the budget has been spent.
- Spending is still within the budget.

The if, else if, and else statements provide appropriate
feedback based on the user's spending.

## How Arrays Are Used to Store Data

The project uses an array called `expenses` to store multiple
expense records.

Each expense is stored as an object containing:

- id
- name
- amount
- category

The push() method adds new expenses to the array.

The filter() method removes deleted expenses.

This allows the application to manage multiple records
instead of using individual variables.

## How Loops Are Used

The for loop processes all stored expenses and calculates
the total amount spent.

The forEach() method displays each expense on the webpage.

Loops make it easier to process multiple expense records
efficiently.

## How the DOM Is Updated

The Document Object Model (DOM) allows JavaScript to
interact with HTML elements.

The project uses:

- getElementById() to access HTML elements.
- textContent to update dashboard information.
- createElement() to create expense records.
- appendChild() to display expenses.
- innerHTML to clear the previous expense list.

Whenever an expense is added or deleted, the dashboard
updates automatically.

## How User Interactions Are Handled Through Events

The application uses event listeners to respond to user actions.

The submit event listens for expense form submissions.

The preventDefault() method prevents the page from
reloading when the form is submitted.

The click event listens for clicks on delete buttons.

These events allow users to add and remove expenses
interactively.

## Challenges Encountered and Solutions

### 1. Calculating Total Expenses

Challenge: Keeping track of multiple expenses.

Solution: Used an array and loops to calculate the total
amount spent.

### 2. Updating Dashboard Information

Challenge: Displaying updated information after user actions.

Solution: Created an updateDashboard() function that
recalculates and updates the dashboard.

### 3. Preventing Invalid Entries

Challenge: Users could enter empty or invalid expense details.

Solution: Added input validation using conditional statements.

### 4. Removing Expenses

Challenge: Removing a specific expense without affecting
other records.

Solution: Used the filter() array method to remove expenses
based on their unique IDs.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Event Listeners
- Arrays and Objects
- Conditional Statements
- Loops

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open index.html in a web browser.
4. Enter an expense name, amount, and category.
5. Click Add Expense.
6. View your updated dashboard.
7. Delete expenses using the Delete button.

## Author

SpendWise Project - JavaScript Interactive Budgeting Assignment

## Conclusion

SpendWise demonstrates how JavaScript can make a webpage
interactive through decision-making, arrays, loops, DOM
manipulation, and event handling.

The application helps users understand their spending
and make better budgeting decisions.
