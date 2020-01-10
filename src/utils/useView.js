import React, { useState, useCallback, useContext, createContext } from "react";

const View = createContext()

export function ProvideView({ children }) {
    const view = useProvideView();
    return <View.Provider value={view}>  {children}  </View.Provider>
};

export const useView = () => {
    return useContext(View);
};

export default function useProvideView() {
    const [showingCharacter, setShowingCharacter] = useState(false);
    const [showingEvent, setShowingEvent] = useState(false);
    const [showingCampaign, setShowingCampaign] = useState(false);
    const [showingUserAccount, setShowingUserAccount] = useState(true);

    const showCharacter = useCallback(() => {
        setShowingCharacter(true);
        setShowingEvent(false);
        setShowingCampaign(false);
        setShowingUserAccount(false);
    });

    const showEvent = useCallback(() => {
        setShowingCharacter(false);
        setShowingEvent(true);
        setShowingCampaign(false);
        setShowingUserAccount(false);
    })

    const showCampaign = useCallback(() => {
        setShowingCharacter(false);
        setShowingEvent(false);
        setShowingCampaign(true);
        setShowingUserAccount(false);
    })

    const showUserAccount = useCallback(() => {
        setShowingCharacter(false);
        setShowingEvent(false);
        setShowingCampaign(false);
        setShowingUserAccount(true);
    })

    React.useEffect(() => {
    }, []);

    return {
        showCharacter,
        showEvent,
        showCampaign,
        showUserAccount,
        showingCharacter,
        showingCampaign,
        showingUserAccount
    }
}