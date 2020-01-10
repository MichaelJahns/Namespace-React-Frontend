import React from 'react';
import StreamHeader from '../../../components/StreamHeader';
import CheckBoxForm from '../../../components/Forms/CheckboxForm';


export default function EventStream(props) {
    const _handleClassNames = (event) => {
        console.log(event.target.className)
        let className = "selectable"
        return className;
    }
    return (
        <aside>
            <ul>
                <StreamHeader header="Events" />
                <li> Chance Encounter </li>
                <CheckBoxForm
                    classes={_handleClassNames}
                    onClick={_handleClassNames}
                />

            </ul>
        </aside>
    )
}