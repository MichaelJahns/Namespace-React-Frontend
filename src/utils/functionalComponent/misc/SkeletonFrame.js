import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
    },
    media: {
        height: 190,
    },
}))

export default function SkeletonFrame() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton height={10} width="80%" style={{ marginBottom: 6 }} />
            <Skeleton height={10} width="40%" />
            <Skeleton variant="rect" className={classes.media} />
            <Skeleton height={10} style={{ marginBottom: 6 }} />
            <Skeleton height={10} width="80%" />
        </Card>
    )
}