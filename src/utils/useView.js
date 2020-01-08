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
    const [showingCampaign, setShowingCampaign] = useState(false);
    const [showingUserAccount, setShowingUserAccount] = useState(true);

    const showCharacter = useCallback(() => {
        setShowingCharacter(true);
        setShowingCampaign(false);
        setShowingUserAccount(false);
    });

    const showCampaign = useCallback(() => {
        setShowingCharacter(false);
        setShowingCampaign(true);
        setShowingUserAccount(false);
    })

    const showUserAccount = useCallback(() => {
        setShowingCharacter(false);
        setShowingCampaign(false);
        setShowingUserAccount(true);
    })

    React.useEffect(() => {
    }, []);

    return {
        showCharacter,
        showCampaign,
        showUserAccount,
        showingCharacter,
        showingCampaign,
        showingUserAccount
    }
}