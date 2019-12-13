import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useFirestore } from "../useFirestore";
import CharacterListItem from "../../components/CharacterListItem";

export default function CharacterStream(props) {
    const [rows, setRows] = React.useState([]);
    const { characters } = useFirestore();

    useEffect(() => {
        if (characters) {
            console.log(characters)
            var rows = [];
            for (var i = 0; i < characters.length; i++) {
                rows.push(<CharacterListItem
                    key={i}
                    name={characters[i].name} />);
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