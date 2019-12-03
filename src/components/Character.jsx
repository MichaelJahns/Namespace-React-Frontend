import React, { Component } from "react";
import '../resources/css/character.css';


export default class Character extends Component {

    render() {
        return (
            <div className='characterReference'>
                <h2> Character Quick Reference </h2>

                <div className='characterContainer'>
                    <form>
                        Add Player
                        <button type="submit"> </button>
                    </form>
                </div>
            </div>

        );
    }
}
