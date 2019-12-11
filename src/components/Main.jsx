import React, { Component } from "react";
import Navbar from "./Navbar";
import Test from "./Test";
import SignIn from "./SignIn";

export default class Body extends Component {
    state = { signShown: "hidden" };
    constructor(props) {
        super(props);
        this.state = {
            signShown: "hidden"
        }

        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFocus(_State) {
        let signShown = _State.signShown;
        this.setState({ signShown })
    }

    handleSignVisibility() {
        let signShown = this.state.signShown;
        signShown === "hidden" ? (signShown = "visible") : (signShown = "hidden");
        this.setState({ signShown });
    }

    render() {
        return (
            <main>
                <Navbar
                    handleFocus={this.handleFocus}
                />
                <SignIn
                    signShown={this.state.signShown}
                />
                <Test />
            </main>
        )
    }
}