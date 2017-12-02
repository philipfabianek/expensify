import React from "react";
import { connect } from "react-redux";

import selectExpenses from "./../selectors/expenses";

import ExpenseListItem from "./ExpenseListItem";

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses.</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem {...expense} key={expense.id} />;
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

// from connect() we get back the function
// we have to call it with the component
// to get back the connected component
export default connect(mapStateToProps)(ExpenseList);
