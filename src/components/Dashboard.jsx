import React, { Component } from "react";
import DashboardNavigation from '../utils/functionalComponent/DashboardNavigation';
import DashboardView from '../utils/functionalComponent/views/DashboardView';
import DashboardFooter from './DashboardFooter';
import '../resources/css/dashboard.css';


export default class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">
                <DashboardNavigation />
                <div className="dashboardDynamic">
                    <DashboardView />
                    <DashboardFooter />
                </div>
            </div>
        );
    }
}
