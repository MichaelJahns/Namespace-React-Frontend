import React from "react";

export default function FetchSRD() {
    const [isLoading, setLoading] = React.useState(true);
    const [classes, setClasses] = React.useState(null);

    React.useEffect(() => {
        if (isLoading) {
            const classes = fetchSRDClasses();
            setClasses(classes);
            setLoading(false);
        }
    }, [isLoading, classes]);

    async function fetchSRDClasses() {
        const url = 'http://www.dnd5eapi.co/api/classes';
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }
    return {
        isLoading,
        classes
    }
}

