import React, { useContext } from "react";

import useFormValidation from "../useFormValidation";
import validateAuth from "../validateAuth";
import { FirebaseContext } from "../firebase";


const INITIAL_STATE = {
    email: "McKenster@proguides.gg",
    password: "BigDickEnergy"
};

function Register() {
    const firebase = useContext(FirebaseContext);
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        firebaseError,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateAuth, firebase);

    return (
        <React.Fragment>
            <div>
                <h2> Sign In </h2>
            </div>
            <form onSubmit={handleSubmit}>
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
                    {firebaseError && <p className="error-text"> {firebaseError} </p>}
                </label>
                <label className="tester" htmlFor="remember-me">
                    Remember me?
                        <input id="remember-me" type="checkbox" name="remember-me" />

                </label>

                <button disabled={isSubmitting} type='submit'>
                    Sign in
                    </button>
            </form>
        </React.Fragment>

    );
}

export default Register;
