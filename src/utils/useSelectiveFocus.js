import React, { useCallback } from "react";


function useSelectiveFocus() {
    const [isPortalVisible, setPortalVisible] = React.useState(false);

    const toggleFocus = useCallback(() => {
        isPortalVisible ? setPortalVisible(false) : setPortalVisible(true);
    }, [isPortalVisible])

    React.useEffect(() => {
    }, []);

    return {
        isPortalVisible,
        toggleFocus
    }
}

export default useSelectiveFocus;