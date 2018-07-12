import expensesReducer from "./../../reducers/expenses";

import expenses from "./../fixtures/expenses";

test("should setup default expenses array", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test("should not remove expense with unknown id provided", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "not-existing-id"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const expense = { id: "added-expense", description: "test", note: "test", amount: 1000, createdAt: 10000 };
    const action = { type: "ADD_EXPENSE", expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
    const updates = { description: "edited-expense" };
    const action = { type: "EDIT_EXPENSE", id: expenses[0].id, updates };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe("edited-expense");
});

test("should not edit an expense with unknown id provided", () => {
    const updates = { description: "edited-expense" };
    const action = { type: "EDIT_EXPENSE", id: "not-existing-id", updates };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should set expenses", () => {
    const action = { type: "SET_EXPENSES", expenses: [expenses[1]] };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(action.expenses);
});
