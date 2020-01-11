import React, { useEffect, useState, useCallback } from 'react';
import FancyCheckbox from './FancyCheckbox';

export default function CheckboxForm(props) {
    const [fields] = useState(props.fields);
    const [checkboxes, setCheckboxes] = useState([]);

    const createCheckboxes = useCallback(
        (fields) => {
            let checkboxes = [];
            for (let key in fields) {
                checkboxes.push(
                    <FancyCheckbox
                        key={key}
                        name={key}

                    />
                )
            }
            return checkboxes;
        }, [])
    useEffect(() => {
        const checkboxes = createCheckboxes(fields);
        setCheckboxes(checkboxes);
    }, [fields, createCheckboxes])
    return (
        <li>
            <h4
                className={"optionsBanner expandable"}
            >
                {props.category}
            </h4>
            <form className="checkboxForm">
                {checkboxes}
            </form>
        </ li>
    )
}