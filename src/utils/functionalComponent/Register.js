import React from "react";

import useFormValidation from "../useFormValidation";
import validateAuth from "../validators/validateAuth";

import { Link } from 'react-router-dom'



const INITIAL_STATE = {
    email: "admin@admin.com",
    password: "troubleshoot"
};

function Register() {
    const firebase = useAuth();
    const {
        handleSignIn,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateAuth, firebase);

    return (
        <div className="signIn">
            <form>
                <div>
                    <h2> Sign In </h2>
                </div>
                <label htmlFor='email'>
                    <input
                        type="text"
                        name='email'
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

                <label htmlFor='password'>

                    <input
                        name='password'
                        type="password"
                        placeholder="Password.."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={errors.password && "error-input"}
                    />
                    Password
                    {errors.password && <p className="error-text"> {errors.password} </p>}
                    {firebase.firebaseError && <p className="error-text"> {firebase.firebaseError.message} </p>}
                </label>
                <button disabled={isSubmitting} onClick={handleSignIn}>
                    Sign in
                </button>
            </form>
            <p>
                Don't have an account? <Link to="/signup"> Sign up! </Link>
            </p>

        </div>

    );
}

export default Register;
