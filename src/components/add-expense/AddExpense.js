import React from "react";
import { connect } from "react-redux";

import { startAddExpense } from "./../../actions/expenses";

import ExpenseForm from "./ExpenseForm";

import Typography from '@material-ui/core/Typography';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="add-expense">
                {/* <h1>Add Expense</h1> */}
                <Typography variant="headline" color="inherit">
                    Add Expense
                </Typography>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
