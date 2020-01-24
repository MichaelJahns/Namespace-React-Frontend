import React from "react";
import { Link } from 'react-router-dom'

export default function DashboardNavigation() {
    return (
        <div className='Navigation'>
            <ul>
                <Link to="/characters">
                    <li title="Characters"
                        className="charactersIcon dashboardNavigationButton">
                        Character Viewer </li>
                </Link>

                <Link to="/events">
                    <li title="Events"
                        className="eventIcon dashboardNavigationButton">
                        Event Viewer</li>
                </Link>
                <Link to="/campaigns">
                    <li title="Campaigns"
                        className="campaignIcon dashboardNavigationButton">
                        Campaign Viewer </li>
                </Link>
                <Link to="/account">
                    <li title="Account"
                        className="userIcon dashboardNavigationButton">
                        User Account Viewer </li>
                </Link>
            </ul>
        </div>
    );
}




