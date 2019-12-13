import React, { Component } from "react";
import DashboardHeader from './DashboardHeader';
import DashboardNavigation from '../utils/functionalComponent/DashboardNavigation';
import DashboardView from '../utils/functionalComponent/DashboardView';
import DashboardFooter from './DashboardFooter';
import '../resources/css/dashboard.css';


export default class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">
                <DashboardNavigation />
                <div className="dashboardDynamic">
                    <DashboardHeader />
                    <DashboardView />
                    <DashboardFooter />
                </div>
            </div>
        );
    }
}
