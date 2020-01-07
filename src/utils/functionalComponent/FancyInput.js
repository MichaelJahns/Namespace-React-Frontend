import React from 'react';

export default function FancyInput(props) {

    return (
        <React.Fragment>
            <input type={props.type} name={props.name} class={props.classes} id={props.name} required autocomplete="off" />
            <label for={props.name}><span>{props.prompt}</span></label>
        </React.Fragment>
    );
}

