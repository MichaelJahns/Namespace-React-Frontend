import React from "react";

export default function FormButton(props) {
    return (
        <div onClick={() => props.onClick()} className="FormButton">
            <div></div>
            <p> {props.name} </p>
        </div>
    );
}