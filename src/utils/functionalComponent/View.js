import React from "react";

import Landing from './Landing';
import Dashboard from '../../components/Dashboard';
import { useAuth } from '../useAuth';

function View() {
    const firebase = useAuth();

    return (
        <main className="content">
            {firebase.user ?
                <Dashboard />
                :
                <Landing />
            }
        </main>
    );
}

export default View;


