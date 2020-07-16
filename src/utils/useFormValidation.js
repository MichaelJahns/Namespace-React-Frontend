import React from "react";
import { useAuth } from './useAuth';

function useFormValidation(initialState, validate, firebase) {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);

    const { signup, signout, login } = useAuth();

    React.useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                setSubmitting(false)
            } else {
                setSubmitting(false);
            }
        }
    }, [values, errors, isSubmitting]);

    function handleLogin(event) {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
        login(values);
    }

    function handleSignUp(event) {
        console.log("one")
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
        signup(values);
    }

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    function handleBlur(event) {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    return {
        handleSignIn: handleLogin,
        handleSignUp,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    }
}

export default useFormValidation;