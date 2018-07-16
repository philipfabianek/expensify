import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import selectExpenses from "./../../selectors/expenses";
import { startRemoveExpense } from "./../../actions/expenses";

import ExpenseListItem from "./ExpenseListItem";

const styles = theme => ({
    root: {
        width: '100%',
    },
});

import selectImportantExpenses from "./../../selectors/important";

class ExpenseList extends React.Component {
    render() {
        // console.log(this.props.expenses);
        const { classes } = this.props;
        // console.log(selectImportantExpenses(this.props.expenses));

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
}

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExpenseList));
