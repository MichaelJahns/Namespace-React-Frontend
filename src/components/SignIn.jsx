import React, { Component } from "react";
import '../resources/css/signin.css';

import Register from '../Register';


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

                <Register />
            </div >

        )

    }
}