const selectImportantExpenses = (expenses) => {
    if (expenses) {
        return expenses.filter((expense) => {
            return !!expense.isImportant;
        });
    } else {
        return 0;
    }
};

export default selectImportantExpenses;
