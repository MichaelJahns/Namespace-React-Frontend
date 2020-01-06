import React from 'react';
import FormButton from '../../components/FormButton';
import { useFirestore } from '../useFirestore';
import { useSelectiveFocus } from '../useSelectiveFocus';

export default function CharacterViewOptions(props) {

    const firestore = useFirestore();
    const { toggleCharacterBuilderVisible } = useSelectiveFocus();


    return (
        <div className="characterViewOptions">
            <FormButton
                name='edit'
                onClick={toggleCharacterBuilderVisible} />
            <FormButton
                name="delete"
                onClick={() => firestore.deleteCharacter(
                    props.name
                )}
            />
        </div>
    );
}

