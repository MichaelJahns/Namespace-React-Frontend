import React, { Component } from "react";

export default class StreamFooter extends Component {
    render() {
        return (
            <div className='streamFooter'>
                <h2> {this.props.footer} </h2>
            </div>
        );
    }
}
