import { useState, useEffect } from "react";

export default function useTracery(story) {
    const [locations, setLocations] = useState([]);


    function handleLocationChange(event) {
        setLocations({
            ...locations,
            [event.target.name]: event.target.value
        });
    }

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