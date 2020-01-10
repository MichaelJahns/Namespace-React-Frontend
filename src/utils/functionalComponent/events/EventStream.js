import React from 'react';
import StreamHeader from '../../../components/StreamHeader';
import CheckBoxForm from '../../../components/Forms/CheckboxForm';


export default function EventStream(props) {
    return (
        <aside>
            <ul>
                <StreamHeader header="Events" />
                <li> Chance Encounter </li>
                <CheckBoxForm />

            </ul>
        </aside>
    )
}