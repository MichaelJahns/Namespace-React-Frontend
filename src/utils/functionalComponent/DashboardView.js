import React from "react";
import CharacterView from './CharacterView';
import CampaignView from './CampaignView';
import Register from './Register';
import { useView } from '../useView';

export default function DashboardView() {

    const { showingCharacter, showingCampaign, showingUserAccount } = useView();
    return (
        <div className='dashboardView'>
            {showingCharacter &&
                <CharacterView />}
            {showingCampaign &&
                <CampaignView />}
            {showingUserAccount &&
                <Register />}
        </div>
    );
}




