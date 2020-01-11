import React, { useState, useCallback, useEffect } from 'react';
import StreamHeader from '../../../components/StreamHeader';
import CheckBoxForm from '../../../components/Forms/CheckboxForm';
import refineEvents from '../events/refineEvents';
import useJSONBuilder from './useJSONBuilder';

export default function EventStream(props) {
    const [forms, setForms] = useState([]);
    const { expanded, handleNearbyChange, handleLocationChange } = refineEvents();
    const { parameters } = useJSONBuilder();
    const _handleClassNames = (event) => {
        console.log(event.target.className)
        let className = "selectable"
        return className;
    }
    const createForms = useCallback(
        (parameters) => {
            let forms = []
            console.log('Start here')
            for (let categories in parameters) {
                console.log(categories)
                console.log(parameters[categories])
                forms.push(
                    <CheckBoxForm
                        category={categories}
                        fields={parameters[categories]}
                    />
                )
            }
            setForms(forms);
        })

    useEffect(() => {
        createForms(parameters)
    }, [parameters]);
    return (
        <aside className="eventStream">
            <ul>
                <StreamHeader header="Events" />
                {forms}
            </ul>
        </aside>
    )
}