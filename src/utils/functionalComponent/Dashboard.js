import React from "react";
import { useAuth } from '../useAuth';
import CharacterView from './CharacterView';
import '../../resources/css/dashboard.css'

function Dashboard() {
    const firebase = useAuth();

    return (
        <React.Fragment>
            {firebase.user ?
                < div className="content" >
                    <CharacterView />
                </div >
                :
                <div className="content">
                    <p> Please Login </p>
                </div>
            }

        </React.Fragment>
    );
}

export default Dashboard;


