import React, { Component } from "react";
import '../resources/css/signin.css';

import useFormValidation from '../useFormValidation';
import validateAuth from './validateAuth'


export default class signIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signShown: "hidden"
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateFocus = this.updateFocus.bind(this);
    }

    _getClassNames = () => {
        let signShown = this.props.signShown;
        return "signIn " + signShown;
    };

    render() {
        const INITIAL_STATE = {
            email: "",
            password: ""
        }

        function Register() {
            const {
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                isSubmitting
            } = useFormValidation(INITIAL_STATE, validateAuth)
        }
        return (
            <div className={this._getClassNames()}>
                <div>
                    <h2> Sign In </h2>
                    {/* TODO: add the ability to minimize the sign in component on the component */}
                </div>

                <form>
                    <p>
                        <label htmlFor='emailInput'>
                            <input
                                type="text"
                                name='emailInput'
                                placeholder="E-mail.."
                                autoComplete='off'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={errors.email && "error-input"}
                            />
                            Email
                        {errors.email && <p className="error-text"> {errors.email} </p>}
                        </label>
                    </p>
                    <p>
                        <label htmlFor='passwordInput'>

                            <input
                                name='passwordInput'
                                type="password"
                                placeholder="Password.."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={errors.password && "error-input"}
                            />
                            Password
                        {errors.password && <p className="error-text"> {errors.password} </p>}
                        </label>
                    </p>
                    <p className="tester">
                        <label htmlFor="remember-me">
                            Remember me?
                        </label>
                        <input id="remember-me" type="checkbox" name="remember-me" />

                    </p>
                    <button disabled={isSubmitting} type='submit'>
                        Sign in
                    </button>
                </form>
            </div >

        )
    }
}