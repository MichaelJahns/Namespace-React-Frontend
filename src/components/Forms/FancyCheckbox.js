import React from 'react';

export default function FancyCheckbox(props) {

    return (
        <React.Fragment>
            <label htmlFor={props.name}>
                <span>{props.name}</span>

                <input
                    type='checkbox'
                    name={props.name}
                    class={props.classes}
                    id={props.name}
                    required
                    onChange={props.onChange}
                    select={true} />
            </label>
        </React.Fragment>
    );
}

