import React from "react";
import LandingNavigation from '../landing/LandingNavigation';
import Footer from "../../../components/Footer";

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
            <LandingNavigation />
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




