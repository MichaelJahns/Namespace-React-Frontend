import React from 'react';

export default function FancyCheckbox(props) {

    return (
        <React.Fragment>
            <label htmlFor={props.name}>
                <span>{props.name}</span>

                <input
                    type='checkbox'
                    name={props.name}
                    className={props.classes}
                    id={props.name}
                    onChange={props.onChange} />
            </label>
        </React.Fragment>
    );
}

