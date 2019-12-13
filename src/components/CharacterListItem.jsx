import React from "react";
import CharacterAvatar from './CharacterAvatar'

export default function CharacterListItem(props) {
    return (
        <li onClick={() => props.onClick(props.name)} className={props.name}>
            <div ></div>
            <p> {props.name} </p>
        </li>
    );
}