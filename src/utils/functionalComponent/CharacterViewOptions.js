import React from 'react';
import FormButton from '../../components/FormButton';
import { useFirestore } from '../useFirestore';

export default function CharacterViewOptions(props) {

    const firestore = useFirestore();

    return (
        <React.Fragment>
            <FormButton name='edit' />
            <FormButton name={props.name} />
            <FormButton
                name="delete"
                onClick={() => firestore.deleteCharacter(
                    props.name
                )}
            />
        </React.Fragment>
    );
}

