import React, { Component } from "react";
import Navbar from "./Navbar";
import Dashboard from "../utils/functionalComponent/Dashboard";

export default class Body extends Component {
    render() {
        return (
            <main>
                <Navbar
                    handleFocus={this.handleFocus}
                />
                <Dashboard />
            </main>
        )
    }
}