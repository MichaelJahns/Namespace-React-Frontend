import React from 'react';
import FormButton from '../../../components/FormButton';
import DeleteCharacter from './DeleteCharacter';

export default function CharacterOptions(props) {
    return (
        <div className="characterViewOptions">
            <FormButton
                name='edit' />
            <FormButton
                name="delete" />

                <DeleteCharacter
                    name={props.name} />
            

        </div>
    );
}

