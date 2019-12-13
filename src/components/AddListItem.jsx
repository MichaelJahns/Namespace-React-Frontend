import React from "react";

export default function AddListItem(props) {
    return (
        <li onClick={() => props.onClick(props.name)} className="newCharacter">
            <div>+</div>
            <p> {props.name} </p>
        </li>
    );
}