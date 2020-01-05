import React from 'react';
import { useSelectiveFocus } from '../useSelectiveFocus';
import FormButton from '../../components/FormButton';

export default function CharacterViewOptions() {

    return (
        <React.Fragment>
            <FormButton name='edit' />
            <FormButton name='delete' />
        </React.Fragment>
    );
}

