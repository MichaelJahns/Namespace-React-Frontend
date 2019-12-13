import React, { Component } from "react";
import '../resources/css/footer.css';
import DashboardHeader from './DashboardHeader';
import DashboardNavigation from '../utils/functionalComponent/DashboardNavigation';
import DashboardView from '../utils/functionalComponent/DashboardView';
import DashboardFooter from './DashboardFooter';


export default class Footer extends Component {

    render() {
        return (
            <div className="dashboard">
                <DashboardHeader />
                <DashboardNavigation />
                <DashboardView />
                <DashboardFooter />
            </div>
        );
    }
}
