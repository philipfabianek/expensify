import React from "react";

import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

import Typography from '@material-ui/core/Typography';

const ExpenseDashboardPage = (props) => (
    <div className="dashboard">
        <Typography variant="headline" color="inherit">
            Dashboard
        </Typography>

        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
