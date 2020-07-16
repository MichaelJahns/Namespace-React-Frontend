import React, { Component } from "react";

export default class StreamHeader extends Component {

    render() {
        return (
            <div className='streamHeader'>
                <h2> {this.props.header} </h2>
            </div>
        );
    }
}
