import React from "react";
import { useFirestore } from './useFirestore';
import { useSelectiveFocus } from './useSelectiveFocus';



function useDeleteValidation(INITIAL_VALUES, validate, reference) {
    const [value, setValue] = React.useState(INITIAL_VALUES);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);

    const firestore = useFirestore();
    const { hideCharacterDelete } = useSelectiveFocus();

    const handleDelete = (name) => {
        const validationErrors = validate(value, reference);
        setErrors(validationErrors);
        setSubmitting(true);

        console.log("Attempting Delete")
        console.log("entered")
        hideCharacterDelete();
        firestore.deleteCharacter(name);
    }

    function handleChange(event) {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    }

    function handleBlur(event) {
        const validationErrors = validate(value, reference);
        setErrors(validationErrors);
    }

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

    return {
        handleDelete,
        handleChange,
        handleBlur,
        value,
        errors,
        isSubmitting
    }
}

export default useDeleteValidation;