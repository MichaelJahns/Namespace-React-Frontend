import React from "react";
import useFifthEdition from "../useFifthEdition";
import validateFifthEdition from "../validateFifthEdition";
import { useFirestore } from "../useFirestore";

const INITIAL_STATE = {
    name: "",
    title: "",
    notes: "",
    relationships: ""
};

export default function CharacterView() {
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFifthEdition(INITIAL_STATE, validateFifthEdition);
    const firestore = useFirestore();


    return (
        <section>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Character Name.. "
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={errors.name && "error-input"}
                />
                {errors.name && <p className="error-text"> {errors.name} </p>}
                <input
                    type="text"
                    name="title"
                    placeholder="Character's Title or Role.. "
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    className={errors.title && "error-input"}
                />
                {errors.title && <p className="error-text"> {errors.title} </p>}
                <input
                    type="text"
                    name="notes"
                    placeholder="Character Notes.."
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.notes}
                    className={errors.notes && "error-input"}
                />
                {errors.notes && <p className="error-text"> {errors.notes} </p>}
                <input
                    type="text"
                    name="relationships"
                    placeholder="Character Relationships.. "
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.relationships}
                    className={errors.relationships && "error-input"}
                />
                {errors.relationships && <p className="error-text"> {errors.relationships} </p>}

                <p onClick={() => firestore.Test(
                    values.name,
                    values.title,
                    values.notes,
                    values.relationships
                )}> TEST ME </p>


            </form>
        </section>
    );
}


