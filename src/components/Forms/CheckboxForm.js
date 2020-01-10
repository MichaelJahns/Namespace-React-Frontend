import React, { useEffect } from 'react';
import FancyCheckbox from './FancyCheckbox';
import refineEvents from '../../utils/functionalComponent/events/refineEvents';
import locationsJSON from '../../resources/events/parameters/locations'
import nearbyJSON from '../../resources/events/parameters/nearby'

export default function EventStream(props) {
    const { expanded, handleExpansion } = refineEvents();
    const parameters = {};
    parameters.locations = locationsJSON;
    parameters.nearby = nearbyJSON;

    const forms = []

    const createForm = (parameters) => {
        for (let categories in parameters) {
            console.log(parameters[categories]);
            let category = parameters[categories];
            for (let constraint in category) {
                console.log(constraint);
                forms.push(<FancyCheckbox
                    name={constraint}
                    type='checkbox'
                    prompt={constraint}
                    classes='checkbox'
                    onChange={props.onChange}
                    value={constraint}
                />
                )
            }
        }
    }
    React.useEffect(() => {
        createForm();
    }, [forms, parameters]);
    return (
        <li>
            <h4
                className={"optionsBanner expandable"}
                onClick={() => handleExpansion(props.category)}>
                {props.category}
            </h4>
            <p onClick={() => createForm(parameters)}> CLick HErE</p>
            <form className="checkboxForm">
                {createForm}
                <FancyCheckbox
                    name='city'
                    type='checkbox'
                    prompt='City'
                    classes='checkbox'
                    onChange={props.onChange}
                    value="city"
                />
                <FancyCheckbox
                    name='village'
                    type='checkbox'
                    prompt='village'
                    classes='checkbox'
                    onChange={props.onChange}
                    value="village"
                />
            </form>
        </ li>
    )
}