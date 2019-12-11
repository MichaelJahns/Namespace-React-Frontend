import React from "react";
import { useAuth } from '../firebase';
import CharacterBuilder from './CharacterBuilder';
import '../../resources/css/dashboard.css'

function Dashboard() {
    const firebase = useAuth();

    return (
        <React.Fragment>
            {firebase.user ?
                < div className="content" >
                    <CharacterBuilder />
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


