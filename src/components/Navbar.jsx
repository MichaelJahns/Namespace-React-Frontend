import React, { Component } from "react";
import '../resources/css/navbar.css';


export default class Navbar extends Component {
    render() {
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
                    <a href="/perform_logout"> Logout </a>

                </div>
            </nav>
        )
    }
}