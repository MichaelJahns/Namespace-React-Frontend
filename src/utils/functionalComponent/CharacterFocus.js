import React, { useEffect } from "react";
import CharacterCardUpper from '../../components/CharacterCardUpper'
import CharacterCardLower from '../../components/CharacterCardLower'
import { useSelectiveFocus } from "../useSelectiveFocus";
export default function CharacterFocus(props) {
    const { printView } = useSelectiveFocus();
    useEffect(() => {
    }, [])

    return (
        <section className="scrollable">
            <button onClick={printView} />

            <CharacterCardUpper />
            <CharacterCardLower />
        </section>
    )
}