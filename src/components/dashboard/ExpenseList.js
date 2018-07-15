import React from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import selectExpenses from "./../../selectors/expenses";

import ExpenseListItem from "./ExpenseListItem";

const styles = theme => ({
    root: {
        width: '100%',
    },
});

class ExpenseList extends React.Component {
    render() {
        console.log(this.props.expenses);
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {
                    this.props.expenses.length === 0 ? (
                        <p>No expenses.</p>
                    ) : (
                        this.props.expenses.map((expense) => {
                            return (
                                <ExpenseListItem
                                    {...expense}
                                    key={expense.id}
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

export default connect(mapStateToProps)(withStyles(styles)(ExpenseList));
