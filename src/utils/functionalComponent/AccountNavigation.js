import React from "react";
import useSelectiveFocus from "../useSelectiveFocus";
import Register from "./Register";
import '../../resources/css/signin.css'

function AccountNavigation() {

    function togglePortal(){
        console.log("toggle")
    }
    return (
        <React.Fragment>
         
                <h4
                    onClick={togglePortal}
                > User Email </h4>
                
                <h4
                    onClick={togglePortal}
                > Account </h4>
            
         
                <Register />
        </React.Fragment>

    );
}

export default AccountNavigation;
