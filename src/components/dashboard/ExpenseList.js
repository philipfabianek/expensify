import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import selectExpenses from "./../../selectors/expenses";
import { startEditExpense, startRemoveExpense } from "./../../actions/expenses";

import ExpenseListItem from "./ExpenseListItem";

const styles = theme => ({
    root: {
        width: '100%',
    },
});

class ExpenseList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            // <div className={classes.root + " dashboard__content"}>
            <div className={classes.root}>
                {
                    this.props.expenses.length === 0 ? (
                        <p>No expenses.</p>
                    ) : (
                        this.props.expenses.map((expense, index) => {
                            const max = this.props.expenses.length - 1;

                            if (index === 0) {
                                return (
                                    <ExpenseListItem
                                        {...expense}
                                        key={expense.id}
                                        // position="top"
                                        startEditExpense={this.props.startEditExpense}
                                        startRemoveExpense={this.props.startRemoveExpense}
                                    />
                                )
                            }

                            if (max === index) {
                                return (
                                    <ExpenseListItem
                                        {...expense}
                                        key={expense.id}
                                        position="bottom"
                                        startEditExpense={this.props.startEditExpense}
                                        startRemoveExpense={this.props.startRemoveExpense}
                                    />
                                )
                            }

                            return (
                                <ExpenseListItem
                                    {...expense}
                                    key={expense.id}
                                    position="middle"
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
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExpenseList));
