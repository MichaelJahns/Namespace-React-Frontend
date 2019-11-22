import React from "react";

import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";

const INITIAL_STATE = {
    email: "",
    password: ""
};

function Register() {
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateAuth);
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");

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
