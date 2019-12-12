import React, { useCallback } from "react";
import { useAuth } from "./useAuth";


export default function useSelectiveFocus() {
    const [isPortalVisible, setPortalVisible] = React.useState(false);
    const firebase = useAuth();

    const toggleFocus = useCallback(() => {
        isPortalVisible ? setPortalVisible(false) : setPortalVisible(true);
    }, [isPortalVisible])

    React.useEffect(() => {
        toggleFocus();
    }, [firebase.user]);

    return {
        isPortalVisible,
        toggleFocus
    }
}