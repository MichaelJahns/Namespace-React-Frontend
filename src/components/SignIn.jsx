import React, { Component } from "react";
import '../resources/css/signin.css';


export default class signIn extends Component {
    render() {
        // TODO: State that tells this component to display as either a sign in or a sign up form
        return (
            <div class="signIn">

                <div>
                    <h2> Sign In </h2>
                </div>

                <form>
                    <p>
                        <input type="text" />
                        {/* TODO: how to do two in one? */}
                        {/* <label>Username or Email Address</label> */}
                        <label> Username </label>
                    </p>
                    <p>
                        <input type="text" />
                        <label> Password</label>
                    </p>
                    <button>
                        Sign in
                    </button>
                </form>
            </div>

        )
    }
}