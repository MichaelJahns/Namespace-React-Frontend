import React, { useEffect, Suspense } from "react";
import CharacterListItem from "../../../components/CharacterListItem";
import { useSelectiveFocus } from "../../useSelectiveFocus";
import { useFirestore } from "../../useFirestore";
import AddListItem from "../../../components/AddListItem";
import StreamHeader from '../../../components/StreamHeader';


export default function CharacterStream(props) {
    const [rows, setRows] = React.useState([]);
    const { characters } = useFirestore();
    const { characterView, toggleCharacterView, toggleNewCharacterBuilder, toggleCharacterBuilderVisible } = useSelectiveFocus();


    const _adjustClassNames = () => {
        //TODO:  I want to have the focused character a class so i can control when to highlight it
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
                        className={_adjustClassNames}
                    />
                );
            }

            setRows(rows)
        }
    }, [characters])

    return (
        <aside>
            <ul>
                <Suspense fallback={<h1>Loading characters...</h1>}>
                    <StreamHeader />
                    {rows}
                </Suspense>
            </ul>
        </aside>
    )
}