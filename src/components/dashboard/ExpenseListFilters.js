import React from "react";
import { connect } from "react-redux";
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from "./../../actions/filters";

import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (event) => {
        this.props.setTextFilter(event.target.value);
    };

    onSortChange = (event) => {
        if (event.target.value === "date") {
            this.props.sortByDate();
        } else if (event.target.value === "amount") {
            this.props.sortByAmount();
        }
    };

    render() {
        console.log(this.props.filters);

        return (
            // <div>
            //     <input
            //         type="text"
            //         value={this.props.filters.text}
            //         onChange={this.onTextChange}
            //     />
            //     <select
            //         value={this.props.filters.sortBy}
            //         onChange={this.onSortChange}
            //     >
            //         <option value="date">Date</option>
            //         <option value="amount">Amount</option>
            //     </select>
            //     <DateRangePicker
            //         startDate={this.props.filters.startDate}
            //         endDate={this.props.filters.endDate}
            //         onDatesChange={this.onDatesChange}
            //         focusedInput={this.state.calendarFocused}
            //         onFocusChange={this.onFocusChange}
            //         showClearDates={true}
            //         numberOfMonths={1}
            //         isOutsideRange={(expense) => false}
            //     />
            // </div>
            <div className="filters">
                <div className="filters__panel">
                    <p
                        className={`filters__panel__date ${this.props.filters.sortBy === "date" ? "filters__panel__date--selected" : ""}`}
                        onClick={this.props.sortByDate}
                    >
                        Date{this.props.filters.sortBy === "date" ? " ↑" : ""}
                    </p>
                    <p
                        className={`filters__panel__amount ${this.props.filters.sortBy === "amount" ? "filters__panel__amount--selected" : ""}`}
                        onClick={this.props.sortByAmount}
                    >
                        Amount{this.props.filters.sortBy === "amount" ? " ↑" : ""}
                    </p>
                    <p className="filters__panel__description">
                        Description
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
