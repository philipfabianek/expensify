import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: "",
        };
    }

    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (event) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => ({ note }));
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (event) => {
        event.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: "Please, provide both description and amount."
            }));
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                description: this.state.description.trim(),
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note.trim()
            });
        }
    };

    render() {
        if (typeof window !== "undefined") {
            document.onkeydown = (event) => {
                if (event.keyCode == 13) {
                    this.onSubmit();
                }
            };
        };

        return (
            <div className="expense__form">
                {
                    this.state.error &&
                    <Typography variant="subheading" color="error">
                        {this.state.error}
                    </Typography>
                }
                <form onSubmit={this.onSubmit}>
                    <div className="expense__form__input">
                        <TextField
                            autoFocus
                            label="Description"
                            type="text"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div className="expense__form__input">
                        <TextField
                            label="Amount ($)"
                            type="text"
                            type="text"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </div>
                    <div className="expense__form__textarea">
                        <TextField
                            className="AAAAAAAAA"
                            label="Note"
                            multiline
                            rowsMax="6"
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        />
                    </div>
                    <div className="expense__form__date">
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                    <div className="expense__form__button">
                        <Button
                            color="primary"
                            type="submit"
                            variant="contained"
                        >
                            Add Expense
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
};
