import React, { Component } from "react";
import Navbar from "./Navbar";
import Dashboard from "../utils/functionalComponent/Dashboard";
import "../resources/css/Components.css"

export default class Body extends Component {
    render() {
        return (
            <main>
                <Navbar />
                <Dashboard />
            </main>
        )
    }
}