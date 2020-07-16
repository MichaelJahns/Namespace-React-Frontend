import React from "react";
import { useAuth } from '../useAuth';
import useSelectiveFocus from "../useSelectiveFocus";
import Register from "./Register";
import '../../resources/css/signin.css'

function AccountNavigation() {
    const { isPortalVisible, togglePortal } = useSelectiveFocus();
    return (
        <React.Fragment>
            <h4
                onClick={togglePortal}
            > Login </h4>
            {isPortalVisible &&
                <Register />
            }
        </React.Fragment>

    );
}

export default AccountNavigation;
