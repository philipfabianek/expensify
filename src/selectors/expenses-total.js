// With Loop

// const selectExpensesTotal = (expenses) => {
//     if (expenses) {
//         let index = 0;
//         let amount = 0;
//         for (index; index < expenses.length; index++) {
//             amount += expenses[index].amount;
//         }
//         return amount;
//     } else {
//         return 0;
//     }
// };

// With .reduce

const selectExpensesTotal = (expenses) => {
    if (expenses) {
        return expenses.reduce((amount, expense) => {
            return amount + expense.amount;
        }, 0);
    } else {
        return 0;
    }
};

export default selectExpensesTotal;
