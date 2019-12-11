import React, { useContext } from "react";
import useAuth from '../useAuth'
import FirebaseContext from '../firebase'

function AccountNavigation() {
    const firebase = useContext(FirebaseContext);
    const {
        user,
        authenticated,
    } = useAuth(firebase);

    return (
        <React.Fragment>
            {user && <h2> Farts </h2>}
            {authenticated && <h2> Queefs </h2>}
        </React.Fragment>

    );
}

export default AccountNavigation;
