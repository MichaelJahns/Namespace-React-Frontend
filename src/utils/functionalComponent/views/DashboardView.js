import React from "react";
import CharacterView from './CharacterView';
import EventView from './EventView';
import CampaignView from './CampaignView';
import Register from '../Register';
import { useView } from '../../useView';

export default function DashboardView() {

    const {
        showingCharacter,
        showingEvent,
        showingCampaign,
        showingUserAccount } = useView();
    return (
        <div className='dashboardView'>
            {showingCharacter &&
                <CharacterView />}
            {showingEvent &&
                <EventView />}
            {showingCampaign &&
                <CampaignView />}
            {showingUserAccount &&
                <Register />}
        </div>
    );
}




