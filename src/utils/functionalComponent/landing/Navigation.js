import React from "react";
import { Link } from 'react-router-dom';
import AccountNavigation from '../AccountNavigation';

// MUI
import Navbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    nav: {
        background: '#282c34',
        display: 'flex',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: "12vh",
        position: 'static',
    },
    title: {
        color: '#ff9900ff',
        textDecoration: 'underline'
    }
});
export default function Navigation() {
    const classes = useStyles();
    return (
        <Navbar className={classes.nav}>
            <Typography variant="h1" className={classes.title}>
                <Link to="/">  Namespace </Link>
            </Typography>
            <AccountNavigation />
        </Navbar>
    );
}

