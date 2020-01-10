import React, { Component } from "react";
import '../resources/css/footer.css';


export default class Footer extends Component {

    render() {
        return (
            <div className='streamHeader'>
                <h2> {this.props.header} </h2>
            </div>
        );
    }
}
