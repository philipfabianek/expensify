import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import selectImportantExpenses from "./../../selectors/expenses-important";
import { startEditExpense, startRemoveExpense } from "./../../actions/expenses";

import ExpenseListItem from "./../dashboard/ExpenseListItem";

const styles = theme => ({
    root: {
        width: '100%',
    },
});

class ExpenseList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root + " dashboard__content"}>
                {
                    this.props.expenses.length === 0 ? (
                        <p>No expenses.</p>
                    ) : (
                        this.props.expenses.map((expense) => {
                            return (
                                <ExpenseListItem
                                    {...expense}
                                    key={expense.id}
                                    startEditExpense={this.props.startEditExpense}
                                    startRemoveExpense={this.props.startRemoveExpense}
                                />
                            )
                        })
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: selectImportantExpenses(state.expenses)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExpenseList));
