import React from 'react';
import FancyCheckbox from './FancyCheckbox';
import refineEvents from '../../utils/functionalComponent/events/refineEvents';

export default function EventStream(props) {
    const { locations, handleLocationChange } = refineEvents();
    return (
        <li className="selectable" onClick={props.onClick}>
            <h4> Locations </h4>
            <form className="checkboxForm">
                <FancyCheckbox
                    name='city'
                    type='checkbox'
                    prompt='City'
                    classes='checkbox'
                    onChange={handleLocationChange}
                    value="city"
                />
                <FancyCheckbox
                    name='village'
                    type='checkbox'
                    prompt='village'
                    classes='checkbox'
                    onChange={handleLocationChange}
                    value="village"
                />
            </form>
        </li>
    )
}