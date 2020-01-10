import React from 'react';
import FancyCheckbox from './FancyCheckbox';
import refineEvents from '../../utils/functionalComponent/events/refineEvents';

export default function EventStream(props) {
    const { locations, handleExpansion, handleLocationChange } = refineEvents();
    return (
        <li className={props.expanded ? "focus" : "selectable"} >
            <h4
                className="optionsBanner"
                onClick={() => handleExpansion(props.category)}>
                {props.category}
            </h4>
            {props.expanded}
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
        </ li>
    )
}