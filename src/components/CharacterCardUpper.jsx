import React from "react";

export default function CharacterListItem(props) {
    return (
        <article className="characterCardUpper">
            <div className="characterPortrait">
                <img
                    src="https://img.fireden.net/tg/image/1448/74/1448748623668.png"
                    alt="characterPortrait"
                />
            </div>
            <div className="characterDemographics">
                <h3> Remaford Juliar Berbeaxeon </h3>
            </div>
        </article>
    );
}