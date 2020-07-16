import React, { useState, useEffect } from "react";
import LinearProgress from '@material-ui/core/LinearProgress'
function About() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function tick() {
            const tickWeight = Math.random() * Math.floor(5);
            setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + tickWeight))
        }

        const timer = setInterval(tick, 200);
        return () => {
            clearInterval(timer)
        }

    }, [])

    React.useEffect(() => {
        function tick() {
            // reset when reaching 100%
            const tickWeight = Math.random() * Math.floor(20);
            setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + tickWeight));
        }

        const timer = setInterval(tick, 200);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <LinearProgress value={progress} color="secondary" />

            About
            <LinearProgress value={progress} color="secondary" />

        </div>
    );
}

export default About;


