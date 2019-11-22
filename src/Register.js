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
        <div className="container">
            <form onSubmit={handleSubmit}>
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
    );
}

export default Register;