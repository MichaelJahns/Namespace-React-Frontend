import React, { Component } from "react";
import '../resources/css/navbar.css';
import AccountNavigation from '../utils/functionalComponent/AccountNavigation'



export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <h1> Namespace </h1>
                <AccountNavigation />
            </nav>
        );
    }
}
