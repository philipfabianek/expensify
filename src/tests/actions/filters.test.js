import moment from "moment";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "./../../actions/filters";

it("should setup setText filter action object with provided value", () => {
    const action = setTextFilter("test");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "test"
    });
});

it("should setup setText filter action object with default value", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

it("should setup sortByDate filter action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

it("should setup sortByAmount filter action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

it("should setup setStartDate filter action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

it("should setup setEndDate filter action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});
