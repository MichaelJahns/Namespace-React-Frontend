import React from "react";
import Dashboard from "../../components/Dashboard";
import Landing from "../../components/Landing"
import { useAuth } from '../useAuth';
import FancyInput from './FancyInput';


function Main() {
    const firebase = useAuth();

    return (
        <main className="content">
            {firebase.user ?
                <Dashboard />
                :
                <Landing />
            }
            <FancyInput
                name="CharacterName"
                type="text"
                prompt="What is your characters name"
                classes="question"
            />
            <FancyInput
                name="CharacterTitle"
                type="text"
                prompt="How is your character known?"
                classes="question"
            />
        </main>
    );
}

export default Main;


