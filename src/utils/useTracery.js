import { useState } from "react";

const tracery = require('../vendor/tracery');

export default function useTracery(story) {
    const grammar = tracery.createGrammar(story);
    const [one, setOne] = useState([grammar.flatten('#story#')]);
    const [two, setTwo] = useState([grammar.flatten('#story#')]);
    const [three, setThree] = useState([grammar.flatten('#story#')]);

    const resetGrammars = (() => {
        setOne(grammar.flatten('#story#'));
        setTwo(grammar.flatten('#story#'));
        setThree(grammar.flatten('#story#'));
    })

    return {
        one,
        two,
        three,
        resetGrammars
    }
}