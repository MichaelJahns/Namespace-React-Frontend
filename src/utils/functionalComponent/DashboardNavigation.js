import React from "react";
import '../../resources/css/signin.css'
import { useView } from './../useView';

export default function DashboardNavigation() {
    const { showCharacter, showCampaign, showUserAccount } = useView();

    return (
        <div className='dashboardNavigation'>
            <ul>
                <li title="Character Viewer"
                    className="charactersIcon"
                    onClick={showCharacter}>
                    Character Viewer </li>

                <li title="Campaign Viewer"
                    className="campaignIcon"
                    onClick={showCampaign}>
                    Campaign Viewer </li>

                <li title="User Account Viewer"
                    className="userIcon"
                    onClick={showUserAccount}>
                    User Account Viewer
                </li>
            </ul>
        </div>
    );
}




