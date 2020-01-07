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
                <FancyInput
                    name="name"
                    type="text"
                    prompt="What is your characters name"
                    classes="question"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                <FancyInput
                    name="title"
                    type="text"
                    prompt="How is your character known"
                    classes="question"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                />

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
            </form>

        </section >
    );
}


