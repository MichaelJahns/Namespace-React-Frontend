import React, { useState } from "react";


// MUI
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import { makeStyles, useTheme } from '@material-ui/core/styles';

import useFormValidation from "../../useFormValidation";
import validateAuth from "../../validators/validateAuth";

import { useAuth } from '../../useAuth'

const INITIAL_STATE = {
    email: "admin@admin.com",
    username: "fatFred",
    password: "troubleshoot",
    confirmPassword: "troubleshoot"
};

function Signup() {
    const theme = useTheme();

    const useStyles = makeStyles({
        form: {
            backgroundColor: theme.palette.component.contrastText,
            boxShadow: `-5px 10px ${theme.palette.component.light}`,
            // #888888

            display: 'flex',
            flexDirection: 'column',
            padding: 20,
            marginTop: '10vh',
            marginBottom: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: 'cursive'
        },
        input: {
        }
    });

    const firebase = useAuth();

    const {
        handleSignIn,
        handleSignUp,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateAuth, firebase);

    const classes = useStyles();
    return (
        <div>
            <form className={classes.form}>
                <Typography variant="h2">
                    Signup
                </Typography>
                <TextField
                    label='E-mail'
                    value={values.email}
                    onChange={handleChange} />
                <TextField
                    label='Username'
                    value={values.username}
                    onChange={handleChange} />
                <TextField
                    type="password"
                    label='Password'
                    value={values.password}
                    onChange={handleChange} />
                <TextField
                    type="password"
                    label='Confirm your Password'
                    value={values.confirmPassword}
                    onChange={handleChange} />
            </form>
        </div>
    );
}

export default Signup;


