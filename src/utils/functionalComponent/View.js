import React from "react";

import Landing from './Landing';
import Dashboard from '../../components/Dashboard';

function View() {

    return (
        <main className="content">
            {/* {firebase.user ?
                <Dashboard />
                :
                <Landing />
            } */}
            <Landing />
        </main>
    );
}

export default View;


