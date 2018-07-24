import React from "react";
import { connect } from "react-redux";

import { startRemoveExpense, startEditExpense } from "./../../actions/expenses";

import ExpenseForm from "./../add-expense/ExpenseForm";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };

    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="add-expense">
                {/* <h1>Add Expense</h1> */}
                <Typography variant="headline" color="inherit">
                    Edit Expense
                </Typography>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    buttonText="Edit Expense"
                />
                <Button
                    color="primary"
                    onClick={this.onRemove}
                    style={{
                        padding: "14px 40px",
                    }}
                    variant="contained"
                >
                    Remove Expense
                </Button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => {
        if (expense.id === props.match.params.id) {
            return true
        }
    })
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
