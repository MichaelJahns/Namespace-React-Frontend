import React, { Component } from "react";
import '../resources/css/signin.css';

import Register from '../utils/Register';


export default class signIn extends Component {
    _getClassNames = () => {
        let signShown = this.props.signShown;
        return "signIn " + signShown;
    };

    render() {
        return (
            <div className={this._getClassNames()}>
                <Register />
            </div >

        )

    }
}