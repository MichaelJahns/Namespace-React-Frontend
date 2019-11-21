import React, { Component } from "react";
import '../resources/css/signin.css';


export default class signIn extends Component {
    _getClassNames = () => {
        let signShown = this.props.signShown;
        return "signIn " + signShown;
    };

    render() {
        return (
            <div className={this._getClassNames()}>
                <div>
                    <h2> Sign In </h2>
                    {/* TODO: add the ability to minimize the sign in component on the component */}
                </div>

                <form>
                    <p>
                        <input placeholder="Username or e-mail.." type="text" />
                        {/* TODO: how to do two in one? */}
                        {/* <label>Username or Email Address</label> */}
                        <label> Username </label>
                    </p>
                    <p>
                        <input placeholder="Password.." type="password" />
                        <label> Password</label>
                    </p>
                    <p className="tester">
                        <label htmlFor="remember-me">
                            Remember me?
                        </label>
                        <input id="remember-me" type="checkbox" name="remember-me" />

                    </p>
                    <button>
                        Sign in
                    </button>
                </form>
            </div >

        )
    }
}