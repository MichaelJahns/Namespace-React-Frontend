import React from 'react';
import FormButton from '../../../components/FormButton';

export default function CharacterOptions(props) {
    return (
        <div className="characterViewOptions">
            <FormButton
                name='edit' />
            <FormButton
                name="delete" />
            

        </div>
    );
}

