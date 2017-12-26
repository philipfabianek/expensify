import selectExpensesTotal from "./../../selectors/expenses-total.js";

import expenses from "./../fixtures/expenses";

it("should return 0 if no expenses", () => {
    const amount = selectExpensesTotal();
    expect(amount).toBe(0);
});

it("should correctly add up a single expense", () => {
    const amount = selectExpensesTotal([expenses[2]]);
    expect(amount).toBe(1000);
});

it("should correctly add up multiple expenses", () => {
    const amount = selectExpensesTotal(expenses);
    expect(amount).toBe(6000);
});
