import React from "react";
import useDeleteValidation from "../useDeleteValidation";
import validateDelete from "../validateDelete";
import { useFirestore } from '../useFirestore';
import { useSelectiveFocus } from '../useSelectiveFocus';
import FormButton from "../../components/FormButton";

const INITIAL_STATE = {
    deleteValidation: ""
};

export default function DeleteCharacter() {
    const firestore = useFirestore();
    const { characterView } = useSelectiveFocus();
    const {
        handleChange,
        handleBlur,
        value,
        errors,
    } = useDeleteValidation(INITIAL_STATE, validateDelete);

    return (
        <div className="deleteModule">
            <form>
                <h3> ABOUT TO DELETE {characterView.name} </h3>
                <input
                    name='deleteValidation'
                    type="text"
                    placeholder="This action cannot be undone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value.deleteValidation}
                // className={errors.confirmDeletion && "error-input"}
                />
                <FormButton
                    name="Delete Permenantly"
                    onClick={() => firestore.deleteCharacter()}
                    disabled={errors}
                />
            </form>
        </div>

    );
}

