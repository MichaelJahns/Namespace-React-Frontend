import React from "react";

export default function CharacterListItem(props) {
    return (
        <li onClick={() => props.onClick(props.name)} className="characterAvatar">
            <div></div>
            <p> {props.name} </p>
        </li>
    );
}