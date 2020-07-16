import React, { useState, useCallback, useContext, createContext } from "react";

const ViewContext = createContext()

export function ProvideView({ children }) {
    const view = useProvideView();
    return <ViewContext.Provider value={view}>  {children}  </ViewContext.Provider>
};

export const useView = () => {
    return useContext(ViewContext);
};

export default function useProvideView() {
    const [showingCharacter, setShowingCharacter] = useState(false);
    const [showingEvent, setShowingEvent] = useState(true);
    const [showingCampaign, setShowingCampaign] = useState(false);
    const [showingUserAccount, setShowingUserAccount] = useState(false);

    const show = useCallback(
        (key) => {
            switch (key) {
                case 0:
                    setShowingCharacter(true);
                    setShowingEvent(false);
                    setShowingCampaign(false);
                    setShowingUserAccount(false);
                    break;
                case 1:
                    setShowingCharacter(false);
                    setShowingEvent(true);
                    setShowingCampaign(false);
                    setShowingUserAccount(false);
                    break;
                case 2:
                    setShowingCharacter(false);
                    setShowingEvent(false);
                    setShowingCampaign(true);
                    setShowingUserAccount(false);
                    break;
                case 3:
                    setShowingCharacter(false);
                    setShowingEvent(false);
                    setShowingCampaign(false);
                    setShowingUserAccount(true);
                    break;
                default:
                    console.log("Shits busted")
                    break;
            }
        }, []);

    return {
        show,
        showingCharacter,
        showingEvent,
        showingCampaign,
        showingUserAccount
    }
}