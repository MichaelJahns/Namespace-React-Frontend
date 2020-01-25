import React from "react";
import { useAuth } from '../../useAuth';

export default function AccountFocus(props) {
    const { user } = useAuth();
    console.log(user);
    return (
        <section className="scrollable">
            <p> Future Feature Account Controls </p>
            {/* <p> {user} </p> */}
        </section>
    )
}