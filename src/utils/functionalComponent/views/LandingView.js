import React from "react";
import LandingNavigation from '../../../components/LandingNavigation';
import Footer from "../../../components/Footer";

//MUI
import Container from '@material-ui/core/Container'

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
    return (
        <React.Fragment>
            <LandingNavigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/signup" component={Signup} />
                <Redirect to="/signup" />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}




