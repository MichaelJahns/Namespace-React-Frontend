import React, { Component } from "react";
import '../resources/css/navbar.css';
import SignIn from '../components/SignIn'


export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = { isAccountFocused: false };
    }

    handleFocus() {
        this.setState(state => ({
            isAccountFocusedOn: !state.isAccountFocused
        }));
    }

    render() {
        const isAccountFocused = this.state.isAccountFocused;

        return (
            <nav class="navbar">

                <div id="navBarItems">
                    <h1 id="titleCard"> Namespace </h1>
                    <a href="/"> Placeholder </a>
                    <a href="/"> Placeholder </a>
                </div>

                <div id="spacer">

                </div>

                <div id="accountControls">
                    <a href="/account"> Account </a>
                    <p onClick={this.handleFocus}> Login </p>
                </div>
                <SignIn></SignIn>


            </nav>

        );
    }
}
