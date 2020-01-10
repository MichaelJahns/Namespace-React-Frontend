import React, { useEffect } from "react";
import CharacterCardUpper from '../../../components/CharacterCardUpper'
import CharacterCardLower from '../../../components/CharacterCardLower'
import { useSelectiveFocus } from "../../useSelectiveFocus";
import CharacterViewOptions from "./Options";
export default function CharacterFocus(props) {
    const { characterView } = useSelectiveFocus();
    useEffect(() => {
    }, [])

    return (
        <section className="scrollable">
            <CharacterCardUpper
                name={characterView.name}
                title={characterView.title} />
            <CharacterCardLower
                notes={characterView.notes}
                relationships={characterView.relationships} />
            <CharacterViewOptions
                name={characterView.name} />
        </section>
    )
}