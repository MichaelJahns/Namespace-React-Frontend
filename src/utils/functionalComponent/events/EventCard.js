import React from "react";

export default function EventCard(props) {
    return (
        <div className={`eventCard `} id={`card` + props.iteration}>
            <div className='image' id={`image` + props.iteration} >
                <div>
                    <p> {props.iteration} </p>
                </div>
            </div>
            <div className={`story `} id={`story` + props.iteration}>
                <div>
                    <h3> {props.eventType} </h3>
                    <p> {props.story} </p>
                </div>
            </div>
        </div >
    );
}
