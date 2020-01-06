import React, { useState, useCallback, useContext, createContext } from "react";
import { useFirestore } from "./useFirestore";

const SelectiveContext = createContext()

export function ProvideSelectiveContext({ children }) {
    const selectiveContext = useProvideSelectiveFocus();
    return <SelectiveContext.Provider value={selectiveContext}>  {children}  </SelectiveContext.Provider>
};

export const useSelectiveFocus = () => {
    return useContext(SelectiveContext);
};

const INITIAL_STATE = {
    name: "",
    title: "",
    notes: "",
    relationships: ""
};

export default function useProvideSelectiveFocus() {
    const { characters } = useFirestore();
    const [isPortalVisible, setPortalVisible] = useState(false);
    const [isCharacterBuilderVisible, setCharacterBuilderVisible] = useState(false);
    const [characterView, setCharacterView] = useState({});

    const togglePortal = useCallback(() => {
        isPortalVisible ? setPortalVisible(false) : setPortalVisible(true);
    }, [isPortalVisible]);

    const toggleCharacterView = useCallback((desiredCharacter, id) => {
        setCharacterBuilderVisible(false);
        characters.forEach(character => {
            if (desiredCharacter === character.name) {
                setCharacterView(character);
            }
        });
    }, [characters]);

    const toggleCharacterBuilderVisible = useCallback(() => {
        setCharacterBuilderVisible(true);
    })
    const toggleCharacterBuilderHidden = useCallback(() => {
        setCharacterBuilderVisible(false);
    })

    const toggleNewCharacterBuilder = useCallback(() => {
        setCharacterView(INITIAL_STATE);
        setCharacterBuilderVisible(true);
    })

    React.useEffect(() => {
        if (characters.length > 0) {
            setCharacterView(characters[0])
        }
    }, [characters]);

    return {
        characterView,
        isPortalVisible,
        isCharacterBuilderVisible,
        togglePortal,
        toggleCharacterView,
        toggleCharacterBuilderVisible,
        toggleCharacterBuilderHidden,
        toggleNewCharacterBuilder
    }
}