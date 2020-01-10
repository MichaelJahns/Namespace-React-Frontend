import React from "react";
import '../../resources/css/signin.css'
import { useView } from './../useView';

export default function DashboardNavigation() {
    const { showCharacter, showEvent, showCampaign, showUserAccount } = useView();

    return (
        <div className='dashboardNavigation'>
            <ul>
                <li title="Characters"
                    className="charactersIcon"
                    onClick={showCharacter}>
                    Character Viewer </li>

                <li title="Events"
                    className="eventIcon"
                    onClick={showEvent}>
                    Event Viewer</li>

                <li title="Campaigns"
                    className="campaignIcon"
                    onClick={showCampaign}>
                    Campaign Viewer </li>

                <li title="Account"
                    className="userIcon"
                    onClick={showUserAccount}>
                    User Account Viewer
                </li>
            </ul>
        </div>
    );
}




