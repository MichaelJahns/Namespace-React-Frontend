import React from 'react';
const tracery = require('../../../vendor/tracery');

export default function EventView() {
    const data = {
        'story': 'There was once a calm and indirect dragon'
    }
    const grammar = tracery.createGrammar(data);
    const result = grammar.flatten('#story#');

    return (
        <div>
            <p> There was once a calm and indirect dragon </p>
            <p> {result} </p>
        </div>
    );
}

