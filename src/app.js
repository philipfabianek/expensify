import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "./actions/filters";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 68000, createdAt: 1150, note: "ayy" }));
store.dispatch(addExpense({ description: "Gas bill", amount: 300000, createdAt: 950 }));
store.dispatch(addExpense({ description: "Rent", amount: 198750, createdAt: 850 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(
    jsx,
    document.getElementById("app")
);
