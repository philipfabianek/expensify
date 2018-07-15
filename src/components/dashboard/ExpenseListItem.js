import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";

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
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        const {
            amount,
            description,
            createdAt,
            note
        } = this.props;

        return (
            <ExpansionPanel className="expense-list__panel" expanded={expanded === this.props.key} onChange={this.handleChange(this.props.key)}>
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
