import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

import { ExpenseListFilters } from "./../../components/ExpenseListFilters";
import { defaultFilters, specificFilters } from "./../fixtures/filters";

let wrapper;
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={defaultFilters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with specific data correctly", () => {
    wrapper.setProps({ filters: specificFilters });
    expect(wrapper).toMatchSnapshot();
});

test("should handle setTextFilter", () => {
    const text = "newText";
    wrapper.find("input").at(0).simulate("change", {
        target: { value: text }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test("should handle sortByDate", () => {
    wrapper.setProps({ filters: specificFilters });
    wrapper.find("select").simulate("change", {
        target: { value: "date" }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test("should handle sortByAmount", () => {
    wrapper.find("select").simulate("change", {
        target: { value: "amount" }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test("should handle dates change", () => {
    const startDate = moment(2000);
    const endDate = moment(4000);
    wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle dateFocusChanges", () => {
    const calendarFocused = "endDate";
    wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
