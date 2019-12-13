import React from "react";
import Navbar from '../../components/Navbar';
import Main from './Main';
import Footer from '../../components/Footer';

function View() {
    return (
        <React.Fragment>
            <Navbar />
            <Main />
            {/* <Footer /> */}
        </React.Fragment>
    );
}

export default View;


