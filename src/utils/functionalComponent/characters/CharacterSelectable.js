import React from "react";

export default function CharacterSelectable(props) {
    return (
        <li onClick={() => props.onClick(props.name, props.id)} className={props.className}>
            < div ></div >
            <p> {props.name} </p>
        </li >
    );
}