import React from "react";
import '../../resources/css/signin.css'


export default function DashboardNavigation() {

    return (
        <div className='dashboardNavigation'>
            <ul>
                <li className="charactersIcon" alt='test'> Character Viewer </li>
                <li className="campaignIcon"> Campaign Viewer </li>
                <li className="userIcon"> User Account </li>
            </ul>
        </div>
    );
}




