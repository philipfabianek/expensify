// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import AccountBox from '@material-ui/icons/AccountBox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Settings from '@material-ui/icons/Settings';

import { NavLink } from "react-router-dom";

export const mailFolderListItems = (
    <div>
        <ListItem
            button
            component={NavLink}
            to="/dashboard"
        >
            <ListItemIcon>
                <Home />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
            button
            component={NavLink}
            to="/create"
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
);

export const otherMailFolderListItems = (
    <div>
        {/* <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="All mail" />
        </ListItem> */}

        {/* <ListItem button>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
        </ListItem> */}
        <ListItem button>
            <ListItemIcon>
                <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Account" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
);
