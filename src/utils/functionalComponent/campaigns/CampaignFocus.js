import React, { useState } from "react";
import { CharacterActions } from "../../stores/CharacterActions";

// MUI
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    fancy: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    fresh: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }
})

export default function CampaignFocus(props) {
    const [progress, setProgress] = useState(0);
    const classes = useStyles();

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

            <Button className={classes.fancy}> Fancy </Button>
            <Button className={classes.fresh}> Fresh </Button>
        </section>
    );
}
