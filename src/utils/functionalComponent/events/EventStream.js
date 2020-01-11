import React, { useState, useCallback, useEffect } from 'react';
import StreamHeader from '../../../components/StreamHeader';
import CheckBoxForm from '../../../components/Forms/CheckboxForm';
import useJSONBuilder from './useJSONBuilder';

export default function EventStream(props) {
    const [forms, setForms] = useState([]);
    const { jsonObject } = useJSONBuilder();

    const createForms = useCallback(
        (jsonObject) => {
            let forms = []
            for (let categories in jsonObject) {
                forms.push(
                    <CheckBoxForm
                        key={categories}
                        category={categories}
                        fields={jsonObject[categories]}
                    />
                )
            }
            setForms(forms);
        }, [])

    useEffect(() => {
        createForms(jsonObject)
    }, [jsonObject, createForms]);
    return (
        <aside className="eventStream">
            <ul>
                <StreamHeader header="Events" />
                {forms}
            </ul>
        </aside>
    )
}