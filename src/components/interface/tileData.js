// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';

import AccountIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitIcon from '@material-ui/icons/ExitToApp';

import { NavLink } from "react-router-dom";

export const MailFolderListItems = (props) => {
    const path = props.path;
    // console.log(path.split("/")[1]);

    return (
        <div>
            <ListItem
                button
                component={NavLink}
                to="/dashboard"
                style={path === "/dashboard" ?
                    {
                        backgroundColor: "rgba(0, 0, 0, .16)"
                    } : {}
                }
            >
                <ListItemIcon>
                    <HomeIcon />
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
                style={path === "/create" ?
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

            <ListItem
                button
                component={NavLink}
                to="/edit"
                style={path.split("/")[1] === "edit" ?
                    {
                        backgroundColor: "rgba(0, 0, 0, .16)"
                    } : {}
                }
            >
                <ListItemIcon>
                    <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit expense" />
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
        <ListItem button>
            <ListItemIcon>
                <AccountIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>

        <ListItem
            button
            onClick={props.startLogout}
        >
            <ListItemIcon>
                <ExitIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
);
