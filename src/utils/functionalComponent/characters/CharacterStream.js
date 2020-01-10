import React, { useEffect, Suspense } from "react";
import CharacterListItem from "./CharacterSelectable";
import { useSelectiveFocus } from "../../useSelectiveFocus";
import { useFirestore } from "../../useFirestore";
import AddListItem from "../../../components/AddListItem";
import StreamHeader from '../../../components/StreamHeader';


export default function CharacterStream(props) {
    const [rows, setRows] = React.useState([]);
    const { characters } = useFirestore();
    const {
        characterView,
        toggleCharacterView,
        toggleNewCharacterBuilder } = useSelectiveFocus();


    const _handleClassNames = (name) => {
        let className = ""
        if (characterView.name === name) {
            return className += "focus ";
        } else {
            return className += "selectable ";
        }
    }

    useEffect(() => {
        if (characters) {
            var rows = [];
            rows.push(
                <AddListItem
                    key={-1}
                    name="new character"
                    onClick={toggleNewCharacterBuilder}
                />
            );
            for (var i = 0; i < characters.length; i++) {
                rows.push(
                    <CharacterListItem
                        key={i}
                        name={characters[i].name}
                        onClick={toggleCharacterView}
                        className={_handleClassNames(characters[i].name)}
                    />
                );
            }
            setRows(rows)
        }
    }, [characterView, characters])

    return (
        <aside className='characterStream'>
            <ul>
                <Suspense fallback={<h1>Loading characters...</h1>}>
                    <StreamHeader header="Characters" />
                    {rows}
                </Suspense>
            </ul>
        </aside>
    )
}