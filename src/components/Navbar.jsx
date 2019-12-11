import React, { Component } from "react";
import '../resources/css/navbar.css';
import AccountNavigation from '../utils/functionalComponent/AccountNavigation'



export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signShown: "hidden"
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateFocus = this.updateFocus.bind(this);
    }
    handleChange() {
        let signShown = this.state.signShown;
        signShown === "hidden" ? (signShown = "visible") : (signShown = "hidden");

        this.setState({ signShown: signShown }, this.updateFocus);
    };

    updateFocus() {
        this.props.handleFocus(this.state);
    }
    render() {
        return (
            <nav className="navbar">

                <div id="navBarItems">
                    <h1 id="titleCard"> Namespace </h1>
                    <p> Placeholder </p>
                    <p> Placeholder </p>
                </div>

                <div id="spacer">
                </div>

                <div id="accountControls">
                    <p onClick={this.handleChange}> Account </p>
                    {/* I want to display a unique message here when no user is logged in */}
                </div>
                <AccountNavigation />
            </nav>

        );
    }
}
