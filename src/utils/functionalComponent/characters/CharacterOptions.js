import React from 'react';
import FormButton from '../../../components/FormButton';
import DeleteCharacter from './DeleteCharacter';
import { useFirestore } from '../../useFirestore';
import { useSelectiveFocus } from '../../useSelectiveFocus';

export default function CharacterOptions(props) {

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
            <FormButton
                name="delete"
                onClick={() => toggleCharacterDeleteVisible()} />

            {isCharacterDeleteVisible &&
                <DeleteCharacter
                    name={props.name} />
            }

        </div>
    );
}

