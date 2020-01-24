import React, { useState } from "react";

// MUI
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

function Signup() {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const classes = useStyles();
    return (
        <div className="dashboardView">
            <form className={classes.form}>
                <Typography>
                    Signup
                </Typography>
                <TextField
                    label='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <TextField
                    label='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <TextField
                    label='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <TextField
                    label='Confirm your Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
            </form>
        </div>
    );
}

export default Signup;


