import React from "react";

import Landing from './Landing';
import Dashboard from '../../components/Dashboard';
import { useAuth } from '../useAuth';

function View() {
    const { user } = useAuth();

    return (
        <main className="content">
            {user ?
                <Dashboard />
                :
                <Landing />
            }
        </main>
    );
}

export default View;


