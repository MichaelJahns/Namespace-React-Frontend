import React from 'react';

export default function FancyCheckbox(props) {

    return (
        <React.Fragment>
            <input
                type={props.type}
                name={props.name}
                class={props.classes}
                id={props.name}
                required
                onChange={props.onChange}
                select={true} />

            <label for={props.name}>
                <span>{props.prompt}</span>
            </label>
        </React.Fragment>
    );
}

