import React from "react";
import Navbar from '../../../components/Navbar';
import Footer from "../../../components/Footer";

//MUI
import Container from '@material-ui/core/Container'

import {
    Route,
    Switch,
} from 'react-router-dom'

//Import View Pages
import About from '../landing/About';
import Home from '../landing/Home';
import Signup from '../landing/Signup';


export default function LandingView() {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}




