import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from "@material-ui/icons/Delete";

import moment from "moment";
import numeral from "numeral";

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '20.00%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '20.00%',
        flexShrink: 0,
    },
    thirdHeading: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(15),
    },
});

class ExpenseItem extends React.Component {
    state = {
        expanded: false,
    };

    handleChange(event) {
        // const string = event.target.getAttribute("d");

        if (event.target.tagName === "BUTTON") {
            return true;
        } else if (
            typeof event.target.getAttribute("d") !== "undefined" &&
            !!event.target.getAttribute("d")
        ) {
            if (event.target.getAttribute("d").length > 50) {
                return true;
            }
        } else if (
            event.target.tagName === "svg"
        ) {
            if (event.target.getAttribute("class").includes("SPECIAL-CLASS")) {
                return true;
            }
        }

        this.setState(() => ({
            expanded: !this.state.expanded
        }));
    };

    removeExpense() {
        this.props.startRemoveExpense(this.props.id);
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        const {
            // id,
            amount,
            description,
            createdAt,
            note
        } = this.props;

        return (
            <ExpansionPanel
                className="expense-list__panel"
                expanded={this.state.expanded}
                //     this.state.expanded ?
                //     this.state.expanded === this.props.key :
                //     false
                // }
                onChange={this.handleChange.bind(this)}
            >
                <ExpansionPanelSummary className="pointer" expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                        {moment(createdAt).format("MMMM Do, YYYY")}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        {numeral(amount / 100).format("$0,0.00")}
                    </Typography>
                    <Typography className={classes.thirdHeading}>
                        {description}
                    </Typography>
                    <IconButton
                        aria-label="Delete"
                        className={classes.button + " SPECIAL-CLASS"}
                        onClick={this.removeExpense.bind(this)}
                        style={{
                            position: "absolute",
                            right: "50px",
                            top: "50%",
                            transform: "translateY(-50%)"
                        }}
                    >
                        <DeleteIcon
                            className="SPECIAL-CLASS"
                            style={{
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)"
                            }}
                        />
                    </IconButton>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {
                            note.length > 0 ?
                            note :
                            "Apparently, you have no note."
                        }
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    };
};

export default withStyles(styles)(ExpenseItem);
