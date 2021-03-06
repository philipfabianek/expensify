import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { MailFolderListItems, OtherMailFolderListItems } from './tileData';

import { connect } from "react-redux";
import { startLogout } from "./../../actions/auth";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        // position: 'fixed',
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            // position: 'fixed',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    topList: {
        [theme.breakpoints.up('md')]: {
            marginTop: "20px"
        },
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;
        const path = this.props.location.pathname;

        const drawer = (
            <div>
                <div className={classes.toolbar}>
                    <Typography
                        className="interface__menu"
                        variant="title"
                    >
                        Menu
                    </Typography>
                </div>
                <Divider />
                    <List
                        className={classes.topList}
                    >
                        <MailFolderListItems
                            path={path}
                        />
                    </List>
                <Divider />
                <List>
                    <OtherMailFolderListItems
                        startLogout={this.props.startLogout}
                        path={path}
                    />
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton + " " + classes.navIconHide}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Expensify
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={this.props.startLogout}
                        >
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content + " interface__content-container"}>
                    <div className={classes.toolbar} />
                    {/* <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography> */}
                    <div className="interface__content">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(withStyles(styles, { withTheme: true })(ResponsiveDrawer));
