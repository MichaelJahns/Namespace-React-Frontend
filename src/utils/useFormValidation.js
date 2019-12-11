import React from "react";


function useFormValidation(initialState, validate, firebase) {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [firebaseError, setFirebaseError] = React.useState(null);
    const [isSubmitting, setSubmitting] = React.useState(false);

    React.useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                handleSubmit();
                setSubmitting(false)
            } else {
                setSubmitting(false);
            }
        }
    }, [values, errors, firebaseError, isSubmitting]);


    // i do not need to to update my dom after the button is clicked, validation errors are 
    // being rendered in real time so theres no need. All i need done when the button is hit, 
    // credentials sent  to firebase, and an auth state returned. 
    async function handleSubmit(event) {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
        const { email, password } = values;

        const xxx = await firebase
            .signin(email, password)
            .catch(function (error) {
                console.log(error);
                setFirebaseError(error);
            });
        console.log("xxx", xxx);
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
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        firebaseError,
        isSubmitting
    }
}

export default useFormValidation;