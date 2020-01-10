import { useState, useCallback, useEffect } from "react";

export default function useFifthEdition(initialState, validate) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    const handleSubmit = useCallback((event) => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    }, [values, validate])

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

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                handleSubmit();
                setSubmitting(false)
            } else {
                setSubmitting(false);
            }
        }
    }, [values, errors, isSubmitting, handleSubmit]);

    return {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    }
}
