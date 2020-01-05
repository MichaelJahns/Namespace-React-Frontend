import React from "react";
import useFifthEdition from "../useFifthEdition";
import validateFifthEdition from "../validateFifthEdition";
import { useFirestore } from "../useFirestore";
import FormButton from "../../components/FormButton";

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
                <div className="characterCardUpper">
                    <div className="characterPortrait">
                        <img
                            src="https://img.fireden.net/tg/image/1448/74/1448748623668.png"
                            alt="characterPortrait"
                        />
                    </div>
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
                </div>
                {errors.title && <p className="error-text"> {errors.title} </p>}
                <div className='characterCardLower'>
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
                </div>
                <FormButton
                    name="Create"
                    onClick={() => firestore.Test(
                        values.name,
                        values.title,
                        values.notes,
                        values.relationships
                    )}
                />
            </form >
        </section >
    );
}


