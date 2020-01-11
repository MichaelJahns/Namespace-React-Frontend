import React from "react";
import '../../resources/css/signin.css'
import { useView } from './../useView';

export default function DashboardNavigation() {
    const { show } = useView();

    return (
        <div className='Navigation'>
            <ul>
                <li title="Characters"
                    className="charactersIcon dashboardNavigationButton"
                    onClick={() => show(0)}>
                    Character Viewer </li>

                <li title="Events"
                    className="eventIcon dashboardNavigationButton"
                    onClick={() => show(1)}>
                    Event Viewer</li>

                <li title="Campaigns"
                    className="campaignIcon dashboardNavigationButton"
                    onClick={() => show(2)}>
                    Campaign Viewer </li>

                <li title="Account"
                    className="userIcon dashboardNavigationButton"
                    onClick={() => show(3)}>
                    User Account Viewer
                </li>
            </ul>
        </div>
    );
}




