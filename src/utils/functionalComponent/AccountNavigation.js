import React from "react";
import { useAuth } from '../firebase';

function AccountNavigation() {
    const firebase = useAuth();
    return (
        <React.Fragment>
            {firebase.user ? <h4> {firebase.user.email} </h4> : <h4> Welcome Traveler </h4>}
        </React.Fragment>

    );
}

export default AccountNavigation;
