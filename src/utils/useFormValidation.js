import React, {useState} from "react";
import validateAuth from "../utils/validators/validateAuth"


import axios from 'axios';



function useFormValidation(initialState) {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);


    const [user, setUser] = useState(null)
    const [serverError, setServerError] = useState(null);


    const setAuthorizationHeader = (token) => {
        console.log(token);
        // const FBIdToken = `Bearer ${token}`;
        // axios.defaults.headers.common['Authorization'] = FBIdToken;
    };

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
        const validationErrors = validateAuth(values);
        setErrors(validationErrors);
        setSubmitting(true);
        // login(values);
    }

    function handleSignUp(event) {
        console.log("one")
        const validationErrors = validateAuth(values);
        setErrors(validationErrors);
        setSubmitting(true);
        signup(values);
    }

    const signup = (data) => {
        console.log("two")
            console.log(data);
            axios.defaults.baseURL = "https://us-central1-namespace-fa5e1.cloudfunctions.net/api"
            axios
                .post('/createUser', data)
                .then(response => {
                    console.log(response);
                    setAuthorizationHeader(response.data);
                    setUser(response.data);
                })
                .catch(error => {
                    console.log(error)
                    console.log(error.message)
                    setServerError(error.message)
                });
        }
        

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    function handleBlur(event) {
        const validationErrors = validateAuth(values);
        setErrors(validationErrors);
    }

    return {
        handleSignIn: handleLogin,
        handleSignUp,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting,
        serverError
    }
}

export default useFormValidation;