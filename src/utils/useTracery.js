import { useState, useEffect } from "react";

const tracery = require('../vendor/tracery');

export default function useTracery(story) {
    const grammar = tracery.createGrammar(story);
    const [one, setOne] = useState([grammar.flatten('#story#')]);
    const [two, setTwo] = useState([grammar.flatten('#story#')]);
    const [three, setThree] = useState([grammar.flatten('#story#')]);
    const [stories, setStories] = useState([])

    const resetGrammars = (() => {
        console.log(grammar);
        setOne(grammar.flatten('#story#'));
        setTwo(grammar.flatten('#story#'));
        setThree(grammar.flatten('#story#'));
    })

    useEffect(() => {
        let stories = [];
        stories.push(one, two, three);
        setStories(stories)
    }, [one, two, three]);



    return {
        stories,
        resetGrammars
    }
}