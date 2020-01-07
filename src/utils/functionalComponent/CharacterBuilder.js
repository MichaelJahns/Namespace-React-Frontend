import React from "react";
import useFifthEdition from "../useFifthEdition";
import validateFifthEdition from "../validateFifthEdition";
import { useFirestore } from "../useFirestore";
import { useSelectiveFocus } from "../useSelectiveFocus";
import FormButton from "../../components/FormButton";
import FancyInput from '../functionalComponent/FancyInput';
import "../../resources/css/input.css"

export default function CharacterView() {
    const { characterView, toggleCharacterBuilderHidden } = useSelectiveFocus();
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFifthEdition(characterView, validateFifthEdition);
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
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={["question", errors.name && "error-input"]}
                    />
                    <label htmlFor="name"><span>Character Name</span> </label>
                    {errors.name && <p className="error-text"> {errors.name} </p>}

                    <input
                        type="text"
                        name="title"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        className={["question", errors.title && "error-input"]}
                    />
                    <label htmlFor="title"><span>Character Title</span> </label>

                    <FancyInput
                        name="CharacterName"
                        type="text"
                        prompt="What is your characters name"
                        classes="question"
                    />
                    <FancyInput
                        name="CharacterTitle"
                        type="text"
                        prompt="How is your character known?"
                        classes="question"
                    />

                </div>
                {errors.title && <p className="error-text"> {errors.title} </p>}
                <div className='characterCardLower'>
                    <input
                        type="text"
                        name="notes"
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
                    onClick={() => {
                        toggleCharacterBuilderHidden();
                        firestore.createNewCharacter(
                            values.name,
                            values.title,
                            values.notes,
                            values.relationships
                        )
                    }}
                    disabled={errors}
                />
            </form >
        </section >
    );
}


