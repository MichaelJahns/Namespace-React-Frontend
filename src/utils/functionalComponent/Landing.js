import React from "react";
import Navbar from '../../components/Navbar';
import Main from './Main';
import Footer from '../../components/Footer';
import '../../resources/css/Landing.css'

function View() {
    return (
        <div className='landing'>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default View;


