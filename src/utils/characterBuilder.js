import React from "react";
import '../resources/css/character.css'
import useFifthEdition from './useFifthEdition'
import validateFifthEdition from "./validateFifthEdition";


const INITIAL_STATE = {
    name: '',
    // title: 'Spectral Thief',
    // description: 'Wind Worn Man of moderate height, Black hair and tired features.',
    // allegiance: null,
};

export default function CharacterBuilder() {
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFifthEdition(INITIAL_STATE, validateFifthEdition);


    return (
        <div className="characterBuilder">
            <h2> Character Builder </h2>
            <form>
                <input
                    type="text"
                    name='name'
                    placeholder="Character Name.. "
                    autoComplete='off'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={errors.name && "error-input"}
                />
                {errors.name && <p className="error-text"> {errors.name} </p>}
                <input
                    type="text"
                    name='title'
                    placeholder="Character's Title or Role.. "
                    autoComplete='off'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    className={errors.title && "error-input"}
                />
                {errors.title && <p className="error-text"> {errors.title} </p>}

            </form>
        </div>

    );
}