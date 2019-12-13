import React, { useEffect, Suspense } from "react";
import CharacterListItem from "../../components/CharacterListItem";
import { useSelectiveFocus } from "../useSelectiveFocus";
import { useFirestore } from "../useFirestore";

export default function CharacterStream(props) {
    const [rows, setRows] = React.useState([]);
    const { characters } = useFirestore();
    const { toggleCharacterView } = useSelectiveFocus();

    useEffect(() => {
        if (characters) {
            var rows = [];
            for (var i = 0; i < characters.length; i++) {
                rows.push(
                    <CharacterListItem
                        key={i}
                        name={characters[i].name}
                        onClick={toggleCharacterView}
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
                    {rows}
                </Suspense>
            </ul>
        </aside>
    )
}