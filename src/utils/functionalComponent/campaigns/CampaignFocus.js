import React, { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { CharacterActions } from "../../stores/CharacterActions";

export default function CampaignFocus(props) {
    const [progress, setProgress] = useState(0);

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
        <section>
            <p> Jacobs Awesome Campaign </p>
            <CircularProgress variant="static" value={progress} />
            <CharacterActions></CharacterActions>
        </section>
    );
}
