import React from "react";

export default function EventParameterForm(props) {
    return (
        <li onClick={() => props.onClick(props.name, props.id)} className="characterAvatar">
            <div></div>
            <p> {props.name} </p>
        </li>
    );
}