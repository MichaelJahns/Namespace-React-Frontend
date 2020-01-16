import React from "react";
//Import Dashboard-Level Views
import CharacterView from './CharacterView';
import EventView from './EventView';
import CampaignView from './CampaignView';
import AccountView from './AccountView';

import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

export default function DashboardView() {
    return (
        <div className='dashboardView'>
            <Switch>
                <Route path="/characters" component={CharacterView} />
                <Route path="/events" component={EventView} />
                <Route path="/campaigns" component={CampaignView} />
                <Route path="/account" component={AccountView} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}




