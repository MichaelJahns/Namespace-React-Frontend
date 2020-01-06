import React from "react";
import useDeleteValidation from "../useDeleteValidation";
import validateDelete from "../validateDelete";
import { useFirestore } from '../useFirestore';
import { useSelectiveFocus } from '../useSelectiveFocus';
import FormButton from "../../components/FormButton";
import ComponentButton from "../../components/ComponentButton";

const INITIAL_STATE = {
    deleteValidation: ""
};

export default function DeleteCharacter(props) {
    const firestore = useFirestore();
    const { characterView, toggleCharacterDeleteVisible } = useSelectiveFocus();
    const {
        handleChange,
        handleBlur,
        value,
        errors,
    } = useDeleteValidation(INITIAL_STATE, validateDelete, characterView.name);

    return (
        <div className="deleteModule">
            <form>
                <div className="deleteModuleTitle">
                    <h3> DELETE </h3>
                    <ComponentButton
                        name="X"
                        onClick={() => toggleCharacterDeleteVisible()}
                    />
                </div>
                <p> This action cannot be done, to delete this character type <span className="focus">{props.name} </span> exactly in the input box.  </p>
                <input
                    name='deleteValidation'
                    type="text"
                    placeholder="This action cannot be undone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value.deleteValidation}
                    className={errors.confirmDeletion && "error-input"}
                />
                {errors.confirmDeletion && <p className="error-text"> {errors.confirmDeletion} </p>}


                {value.deleteValidation === props.name &&
                    <FormButton
                        name="Delete"
                        onClick={() => firestore.deleteCharacter(props.name)}
                    />
                }
            </form>
        </div>

    );
}

