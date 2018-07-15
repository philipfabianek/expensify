// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Settings from '@material-ui/icons/Settings';

import { NavLink } from "react-router-dom";

export const MailFolderListItems = (props) => {
    const url = props.url;

    return (
        <div>
            <ListItem
                button
                component={NavLink}
                to="/dashboard"
                style={url === "/dashboard" ?
                    {
                        backgroundColor: "rgba(0, 0, 0, .16)"
                    } : {}
                }
            >
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary="Dashboard"
                />
            </ListItem>

            <ListItem
                button
                component={NavLink}
                to="/create"
                style={url === "/create" ?
                    {
                        backgroundColor: "rgba(0, 0, 0, .16)"
                    } : {}
                }
            >
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Add expense" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Important" />
            </ListItem>
        </div>
    )
};

export const OtherMailFolderListItems = (props) => (
    <div>
        {/* <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="All mail" />
        </ListItem> */}

        <ListItem button>
            <ListItemIcon>
                <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Account" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>

        <ListItem
            button
            onClick={props.startLogout}
        >
            <ListItemIcon>
                <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
);
