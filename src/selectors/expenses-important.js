// Get important expenses
const getImportantExpenses = (expenses) => {
    return expenses.filter((expense => expense.isImportant));
};

export default getImportantExpenses;
