import React from "react";
//Import View Pages
import About from '../landing/About';
import Home from '../landing/Home';
import Signup from '../landing/Signup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {
    Route,
    Switch,
} from 'react-router-dom'


export default function LandingView() {
    return (
        <div className='dashboardView'>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={'holer'}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={'holer'}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}




