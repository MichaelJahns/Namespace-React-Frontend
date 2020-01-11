import React, { useState, useCallback, useEffect } from 'react';
import StreamHeader from '../../../components/StreamHeader';
import CheckBoxForm from '../../../components/Forms/CheckboxForm';
import useJSONBuilder from './useJSONBuilder';

export default function EventStream(props) {
    const [forms, setForms] = useState([]);
    const { param } = useJSONBuilder();
    const [parameters] = useState(param)

    const createForms = useCallback(
        (parameters) => {
            let forms = []
            console.log('Start here')
            for (let categories in parameters) {
                console.log(categories)
                console.log(parameters[categories])
                forms.push(
                    <CheckBoxForm
                        key={categories}
                        category={categories}
                        fields={parameters[categories]}
                    />
                )
            }
            setForms(forms);
        }, [])

    useEffect(() => {
        createForms(parameters)
    }, [parameters, createForms]);
    return (
        <aside className="eventStream">
            <ul>
                <StreamHeader header="Events" />
                {forms}
            </ul>
        </aside>
    )
}