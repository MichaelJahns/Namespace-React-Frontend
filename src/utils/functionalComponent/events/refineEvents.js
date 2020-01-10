import { useState, useEffect } from "react";

export default function useTracery(story) {
    const [expanded, setExpanded] = useState({});
    const [locations, setLocations] = useState([]);


    function handleExpansion(category) {
        setExpanded({
            ...expanded,
            [category]: true
        })
    }
    function handleLocationChange(event) {
        setLocations({
            ...locations,
            [event.target.name]: event.target.checked
        });
    }

    useEffect(() => {
        // console.log(locations);
        console.log(expanded);
    }, [locations, expanded]);

    return {
        expanded,
        locations,
        handleExpansion,
        handleLocationChange
    }
}