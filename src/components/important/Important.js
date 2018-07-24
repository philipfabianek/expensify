import React from "react";

import ImportantExpenseList from "./ImportantExpenseList";

import Typography from '@material-ui/core/Typography';

export default class Important extends React.Component {
    render() {
        return (
            <div className="important">
                <Typography variant="headline" color="inherit">
                    Important Expenses
                </Typography>

                <ImportantExpenseList />
            </div>
        );
    };
};
