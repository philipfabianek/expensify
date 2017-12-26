import React from "react";
import { shallow } from "enzyme";

import expenses from "./../fixtures/expenses";
import { ExpensesSummary } from "./../../components/ExpensesSummary";

test("should render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={60000.30} expensesCount={1}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expensesSummary={2} expensesCount={60000.30}/>);
    expect(wrapper).toMatchSnapshot();
});
