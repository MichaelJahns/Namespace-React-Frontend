import React from "react";
import { Link } from 'react-router-dom';
import AccountNavigation from '../AccountNavigation'

// MUI
import Navbar from '@material-ui/core/AppBar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    nav: {
        background: '#282c34',
        display: 'flex',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: "10vh",
        position: 'static'
    },
    title: {
        color: '#ff9900ff'
    }
});
export default function Navigation() {
    const classes = useStyles();
    return (
        <Navbar className={classes.nav}>
            <h1 className={classes.title}>
                <Link to="/">  Namespace </Link>
            </h1>
            <AccountNavigation />
        </Navbar>
    );
}

