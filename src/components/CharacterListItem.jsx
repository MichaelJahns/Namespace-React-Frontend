import React from "react";
import CharacterAvatar from './CharacterAvatar'

export default function CharacterListItem(props) {
    return (
        <li>
            <div></div>
            <p> {props.name} </p>
        </li>
    );
}