
// Monthly budget
const monthlyBudget = 50000;

// Array to store expense records
let expenses = [];

// Get HTML elements
const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalExpensesDisplay = document.getElementById("totalExpenses");
const balanceDisplay = document.getElementById("balance");
const budgetFeedback = document.getElementById("budgetFeedback");
const message = document.getElementById("message");

// Format amounts as Kenyan Shillings
function formatMoney(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Update dashboard
function updateDashboard() {

    let totalExpenses = 0;

    // Loop through expenses and calculate total
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    const remainingBalance = monthlyBudget - totalExpenses;

    // Update dashboard using DOM manipulation
    document.getElementById("budget").textContent =
        formatMoney(monthlyBudget);

    totalExpensesDisplay.textContent =
        formatMoney(totalExpenses);

    balanceDisplay.textContent =
        formatMoney(remainingBalance);

    // Conditional statements for budget feedback
    if (totalExpenses === 0) {
        budgetFeedback.textContent =
            "You have not recorded any expenses yet. Start tracking your spending!";
    } else if (remainingBalance < 0) {
        budgetFeedback.textContent =
            "Warning! You have exceeded your monthly budget by " +
            formatMoney(Math.abs(remainingBalance)) +
            ". Reduce unnecessary spending.";
    } else if (remainingBalance === 0) {
        budgetFeedback.textContent =
            "You have used your entire monthly budget. Avoid additional spending!";
    } else if (totalExpenses >= monthlyBudget * 0.8) {
        budgetFeedback.textContent =
            "Caution! You have used 80% or more of your budget. Spend carefully.";
    } else {
        budgetFeedback.textContent =
            "Great job! Your spending is within budget. Keep it up!";
    }

    // Display expense records
    displayExpenses();
}

// Display expenses on the webpage
function displayExpenses() {

    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML = "<li>No expenses recorded yet.</li>";
        return;
    }

    // Loop through the array
    expenses.forEach(function(expense) {

        const li = document.createElement("li");

        const details = document.createElement("span");
        details.textContent =
            expense.name + " (" + expense.category + ") - " +
            formatMoney(expense.amount);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        // Event listener for deleting expenses
        deleteButton.addEventListener("click", function() {
            deleteExpense(expense.id);
        });

        li.appendChild(details);
        li.appendChild(deleteButton);

        expenseList.appendChild(li);
    });
}

// Add expense through form submission
expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("expenseName").value.trim();
    const amount = Number(
        document.getElementById("expenseAmount").value
    );
    const category = document.getElementById("expenseCategory").value;

    // Validate user input
    if (!name || !Number.isFinite(amount) || amount <= 0 || !category) {
        message.textContent = "Please enter valid expense details.";
        message.style.color = "red";
        return;
    }

    // Store expense as an object inside the array
    const expense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    message.textContent = "Expense added successfully!";
    message.style.color = "green";

    // Clear form
    expenseForm.reset();

    // Refresh dashboard
    updateDashboard();
});

// Delete expense
function deleteExpense(id) {

    expenses = expenses.filter(function(expense) {
        return expense.id !== id;
    });

    message.textContent = "Expense deleted successfully!";
    message.style.color = "green";

    updateDashboard();
}

// Initial dashboard display
updateDashboard();
