import React from "react";
import '../../resources/css/signin.css'
import { useView } from './../useView';

export default function DashboardNavigation() {
    const { showCharacter, showEvent, showCampaign, showUserAccount } = useView();

    return (
        <div className='Navigation'>
            <ul>
                <li title="Characters"
                    className="charactersIcon dashboardNavigationButton"
                    onClick={showCharacter}>
                    Character Viewer </li>

                <li title="Events"
                    className="eventIcon dashboardNavigationButton"
                    onClick={showEvent}>
                    Event Viewer</li>

                <li title="Campaigns"
                    className="campaignIcon dashboardNavigationButton"
                    onClick={showCampaign}>
                    Campaign Viewer </li>

                <li title="Account"
                    className="userIcon dashboardNavigationButton"
                    onClick={showUserAccount}>
                    User Account Viewer
                </li>
            </ul>
        </div>
    );
}




