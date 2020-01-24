import React from "react";
import Navigation from '../landing/Navigation';
import Footer from "../landing/Footer";

//MUI

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
            <Navigation />
            <div>
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




