import React from "react";
import LandingView from './views/LandingView';

import Dashboard from '../../components/Dashboard';
import { useAuth } from '../useAuth';

function View() {
    const { user } = useAuth();

    return (
        <main className="content">
            {user ?
                <Dashboard />
                :
                <LandingView />
            }
        </main>
    );
}

export default View;


