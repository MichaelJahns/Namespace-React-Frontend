import React from "react";
import { Link } from 'react-router-dom'

import { makeStyles, useTheme } from '@material-ui/core/styles'


export default function DashboardNavigation() {
    const theme = useTheme();
    const useStyles = makeStyles({
        bar: {
            backgroundColor: theme.palette.component.main,
            // color: theme.palette.component.,
            minWidth: '6vw',
            maxWidth: '10vw',
            order: 0,
            minHeight: '100vh',
            maxHeight: '100vh',
            marginRight: '0'
        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            overflowX: 'hidden',
            /* align-content: center; */

            height: '100%'
        },
        listItem: {
            padding: 17,
            margin: 'auto',
            color: theme.palette.component.mainText,
            borderRadius: 20,
            boxShadow:
                '-3px -3px 3px 0 #414754, 3px 3px 3px 0px #14161A'
        }
    })
    const classes = useStyles();
    return (
        <div className={classes.bar}>
            <ul className={classes.list}>
                <Link to="/characters">
                    <li title="Characters"
                        className={"charactersIcon " + classes.listItem}>
                        Character Viewer </li>
                </Link>

                <Link to="/events">
                    <li title="Events"
                        className={"eventIcon " + classes.listItem}>
                        Event Viewer</li>
                </Link>
                <Link to="/campaigns">
                    <li title="Campaigns"
                        className={"campaignIcon " + classes.listItem}>
                        Campaign Viewer </li>
                </Link>
                <Link to="/account">
                    <li title="Account"
                        className={"userIcon " + classes.listItem}>
                        User Account Viewer </li>
                </Link>
            </ul>
        </div >
    );
}




