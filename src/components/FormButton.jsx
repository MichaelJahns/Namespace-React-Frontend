import React from "react";
import '../resources/css/Components.css';


export default function FormButton(props) {
    return (
        <div onClick={() => props.onClick()} className="FormButton">
            <div></div>
            <p> {props.name} </p>
        </div>
    );
}