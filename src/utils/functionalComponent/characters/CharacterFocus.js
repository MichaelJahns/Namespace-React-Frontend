import React from "react";
import CharacterCardUpper from '../../../components/CharacterCardUpper'
import CharacterCardLower from '../../../components/CharacterCardLower'
import CharacterOptions from "./CharacterOptions";
export default function CharacterFocus(props) {
    const characterView = {
        name : "chad",
        title: "friend",
        notes: "friendly",
        relationships: "seeking"
    }

    return (
        <section className="scrollable">
            <CharacterCardUpper
                name={characterView.name}
                title={characterView.title} />
            <CharacterCardLower
                notes={characterView.notes}
                relationships={characterView.relationships} />
            <CharacterOptions
                name={characterView.name} />
        </section>
    )
}