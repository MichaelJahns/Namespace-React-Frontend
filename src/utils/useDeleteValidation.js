import React from "react";

function useFormValidation(INITIAL_VALUES, validate) {
    const [value, setValue] = React.useState(INITIAL_VALUES);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);

    React.useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                setSubmitting(false)
            } else {
                setSubmitting(false);
            }
        }
    }, [value, errors, isSubmitting]);

    function handleSubmit(event) {
        const validationErrors = validate(value);
        setErrors(validationErrors);
        setSubmitting(true);

        console.log("Attempting Delete")

    }

    function handleChange(event) {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    }

    function handleBlur(event) {
        const validationErrors = validate(value);
        setErrors(validationErrors);
    }

    return {
        handleSubmit,
        handleChange,
        handleBlur,
        value,
        errors,
        isSubmitting
    }
}

export default useFormValidation;