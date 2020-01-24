import React from "react";
import { useAuth } from '../useAuth';
import useSelectiveFocus from "../useSelectiveFocus";
import Register from "./Register";
import '../../resources/css/signin.css'

function AccountNavigation() {
    const firebase = useAuth();
    const { isPortalVisible, togglePortal } = useSelectiveFocus();
    return (
        <React.Fragment>
            {firebase.user ?
                <h4
                    onClick={togglePortal}
                > {firebase.user.email} </h4>
                :
                <h4
                    onClick={togglePortal}
                > Login </h4>
            }
            {isPortalVisible &&
                <Register />
            }
        </React.Fragment>

    );
}

export default AccountNavigation;
