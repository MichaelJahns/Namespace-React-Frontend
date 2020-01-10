import { useState, useEffect } from "react";

export default function useTracery(story) {
    const [expanded, setExpanded] = useState([]);
    const [locations, setLocations] = useState([]);
    const [nearby, setNearby] = useState({});


    function handleExpansion(category, event) {
        let temp = { ...expanded, [category]: true };
        console.log(temp);
        setExpanded({
            temp
        })
    }
    function handleLocationChange(event) {
        setLocations({
            ...locations,
            [event.target.name]: event.target.checked
        });
    }
    function handleNearbyChange(event) {
        setNearby({
            ...nearby,
            [event.target.name]: event.target.checked
        })
    }

    useEffect(() => {
        console.log(locations);
        // console.log(expanded);
    }, [locations, expanded]);

    return {
        expanded,
        locations,
        handleExpansion,
        handleLocationChange,
        handleNearbyChange
    }
}