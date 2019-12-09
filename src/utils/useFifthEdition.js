import React, { useContext } from "react";
import FirebaseContext from './firebase';


function useFifthEdition(initialState, validate) {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);
    const [firebaseError, setFirebaseError] = React.useState(null);

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
    }, [values, errors, isSubmitting]);

    async function handleSubmit(event) {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
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

    }
}

export default useFormValidation;