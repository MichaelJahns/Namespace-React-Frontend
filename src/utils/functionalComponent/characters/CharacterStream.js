import React, { useCallback, useEffect, Suspense } from "react";
import CharacterListItem from "./CharacterSelectable";
import { useSelectiveFocus } from "../../useSelectiveFocus";
import { useFirestore } from "../../useFirestore";
import AddListItem from "../../../components/AddListItem";
import StreamHeader from '../../../components/StreamHeader';


export default function CharacterStream(props) {
    const [roster, setRoster] = React.useState([]);
    const { characters } = useFirestore();
    const {
        characterView,
        toggleCharacterView,
        toggleNewCharacterBuilder } = useSelectiveFocus();

    const _handleClassNames = useCallback(
        (name) => {
            let className = ""
            if (characterView.name === name) {
                return className += "focus ";
            } else {
                return className += "selectable ";
            }
        }, [characterView]);

    const createRoster = useCallback(
        (characters) => {
            let roster = [];
            roster.push(
                <AddListItem
                    key={-1}
                    name="new character"
                    onClick={toggleNewCharacterBuilder}
                />
            );
            for (let i = 0; i < characters.length; i++) {
                roster.push(
                    <CharacterListItem
                        key={i}
                        name={characters[i].name}
                        onClick={toggleCharacterView}
                        className={_handleClassNames(characters[i].name)}
                    />
                )
            }
            return roster;
        }, [_handleClassNames, toggleCharacterView, toggleNewCharacterBuilder])
    useEffect(() => {
        const roster = createRoster(characters);
        setRoster(roster);
    }, [characters, createRoster]);

    return (
        <aside className='characterStream'>
            <ul>
                <Suspense fallback={<h1>Loading characters...</h1>}>
                    <StreamHeader header="Characters" />
                    {roster}
                </Suspense>
            </ul>
        </aside>
    )
}