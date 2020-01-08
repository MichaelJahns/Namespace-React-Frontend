import React from "react";
import '../resources/css/Components.css';

export default function ComponentButton(props) {
    return (
        <div onClick={() => props.onClick()} className="ComponentButton">
            <div></div>
            <p> {props.name} </p>
        </div>
    );
}