import React from "react";
import { useAuth } from '../firebase';
import useSelectiveFocus from "../useSelectiveFocus";
import Register from "./Register";
import '../../resources/css/signin.css'

function AccountNavigation() {
    const firebase = useAuth();
    const { isPortalVisible, toggleFocus } = useSelectiveFocus();
    return (
        <React.Fragment>
            {firebase.user ?
                <h4
                    onClick={toggleFocus}
                > {firebase.user.email} </h4>
                :
                <h4
                    onClick={toggleFocus}
                > Account </h4>
            }
            {isPortalVisible &&
                <Register />
            }
        </React.Fragment>

    );
}

export default AccountNavigation;
