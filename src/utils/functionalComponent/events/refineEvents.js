import { useState, useEffect } from "react";

export default function useTracery(story) {
    const [locations, setLocations] = useState([]);


    function handleLocationChange(event) {
        setLocations({
            ...locations,
            [event.target.name]: event.target.checked
        });
    }

    useEffect(() => {
        console.log(locations)
    }, [locations]);

    return {
        locations,
        handleLocationChange
    }
}