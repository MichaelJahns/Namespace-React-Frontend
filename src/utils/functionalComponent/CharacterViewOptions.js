import React from 'react';
import FormButton from '../../components/FormButton';
import DeleteCharacter from './DeleteCharacter';
import { useFirestore } from '../useFirestore';
import { useSelectiveFocus } from '../useSelectiveFocus';
import useFifthEdition from '../useFifthEdition';
import validateDelete from "../validateDelete";

export default function CharacterViewOptions(props) {

    const firestore = useFirestore();
    const {
        isCharacterDeleteVisible,
        toggleCharacterBuilderVisible,
        toggleCharacterDeleteVisible } = useSelectiveFocus();

    return (
        <div className="characterViewOptions">
            <FormButton
                name='edit'
                onClick={toggleCharacterBuilderVisible} />
            {/* <FormButton
                name="delete"
                onClick={() => firestore.deleteCharacter(
                    props.name
                )}
            /> */}
            <FormButton
                name="tester"
                onClick={() => toggleCharacterDeleteVisible()} />

            {isCharacterDeleteVisible ?
                <DeleteCharacter />
                :
                <p> hi </p>}
        </div>
    );
}

