import React from "react";

export default function CharacterListItem(props) {
    return (
        <article className="characterCardLower">
            <div>
                <h4> Notes </h4>
                <ul>
                    <li> {props.notes} </li>
                </ul>
            </div>
            <div>
                <h4>Relationships</h4>
                <ul>
                    <li> {props.relationships} </li>
                </ul>
            </div>
        </article>
    );
}