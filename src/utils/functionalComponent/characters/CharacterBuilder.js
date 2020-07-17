import React from "react";
// import useFifthEdition from "../../useFifthEdition";
// import validateFifthEdition from "../../validators/validateFifthEdition";
// import FormButton from "../../../components/FormButton";
// import FancyInput from '../FancyInput';
import "../../../resources/css/input.css"

export default function CharacterView() {
    // const {
    //     handleChange,
    //     handleBlur,
    //     values,
    //     errors,
    // } = useFifthEdition(characterView, validateFifthEdition);
    return (
        <section>
            <form>
                {/* <FancyInput
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
                /> */}
            </form>

        </section >
    );
}


