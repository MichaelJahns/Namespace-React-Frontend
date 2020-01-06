import React from 'react';
import FormButton from '../../components/FormButton';
import { useFirestore } from '../useFirestore';

export default function CharacterViewOptions(props) {

    const firestore = useFirestore();

    return (
        <div className="characterViewOptions">
            <FormButton name='edit' />
            <FormButton
                name="delete"
                onClick={() => firestore.deleteCharacter(
                    props.name
                )}
            />
        </div>
    );
}

