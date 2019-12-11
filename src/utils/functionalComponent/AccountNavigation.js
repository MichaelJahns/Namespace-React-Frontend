import React from "react";
import { useAuth } from '../firebase';

function AccountNavigation() {
    const firebase = useAuth();
    const { signin, signout } = firebase;
    return (
        <React.Fragment>
            {firebase.user ? <button onClick={signout}> click </button> : <h4> Welcome </h4>}
            {firebase.user ? <h4> {firebase.user.email} </h4> : <h4> Traveler </h4>}
        </React.Fragment>

    );
}

export default AccountNavigation;
