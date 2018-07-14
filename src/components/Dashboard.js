import React from "react";

import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

import TopHeaderDrawer from "./new/TopHeaderDrawer";
import TopHeader from "./new/TopHeader";

const ExpenseDashboardPage = () => (
    <div className="dashboard">
        <TopHeaderDrawer />
        {/* <TopHeader /> */}
        {/* <ExpensesSummary /> */}
        {/* <ExpenseListFilters /> */}
        {/* <ExpenseList /> */}
    </div>
);

export default ExpenseDashboardPage;
