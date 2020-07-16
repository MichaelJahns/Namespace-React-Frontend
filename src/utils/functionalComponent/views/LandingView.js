import React from "react";
import Navigation from '../landing/Navigation';
import Footer from "../landing/Footer";

//MUI
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

//Import View Pages
import About from '../landing/About';
import Home from '../landing/Home';
import Signup from '../landing/Signup';

export default function LandingView() {
    const theme = useTheme();
    const useStyles = makeStyles({
        view: {
            display: 'flex',
            justifyContent: 'center',
            minHeight: '95vh',
            backgroundColor: theme.palette.main.main
        }
    });
    const classes = useStyles();
    return (
        <React.Fragment>
            <Navigation />
            <div className={classes.view}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/signup" component={Signup} />
                    <Redirect to="/signup" />
                </Switch>
            </div>

            <Footer />
        </React.Fragment>
    );
}




