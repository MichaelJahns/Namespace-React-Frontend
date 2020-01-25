import React, { useState } from "react";

// MUI
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import useFormValidation from "../../useFormValidation";
import validateAuth from "../../validators/validateAuth";

import { useAuth } from '../../useAuth'

const INITIAL_STATE = {
    email: "tester@test.com",
    username: "Locke",
    password: "qwerqwer",
    confirmPassword: "qwerqwer"
};

function Signup() {
    const theme = useTheme();

    const useStyles = makeStyles({
        form: {
            backgroundColor: theme.palette.component.contrastText,
            boxShadow: `-5px 10px ${theme.palette.component.light}`,
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
            marginTop: '10vh',
            marginBottom: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: 'cursive'
        },
        submitField: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        signature: {
            fontFamily: theme.typography.handFont,
            color: theme.palette.main.contrastText,
            lineHeight: 2,
            fontSize: '1.5em',

        },
        tack: {
            backgroundColor: theme.palette.component.light,
            boxShadow: `-2.5px 5.5px 5.5px -2px ${theme.palette.component.dark}, inset -1px 2px 1px ${theme.palette.component.lighter}`,
            alignSelf: 'center',
            position: 'absolute',
            borderRadius: 100,
            width: 20,
            height: 20
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
                <p className={classes.tack}> </p>
                <Typography variant="h2">
                    Signup
                </Typography>
                <Divider />
                <TextField
                    name='email'
                    label='E-mail'
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={errors.email}
                    error={!!errors.email}
                />
                <TextField
                    name='username'
                    label='Username'
                    value={values.username}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={errors.username}
                    error={!!errors.username}
                />
                <TextField
                    name='password'
                    type="password"
                    label='Password'
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={errors.password}
                    error={!!errors.password}
                />
                <TextField
                    name='confirmPassword'
                    type="password"
                    label='Confirm Password'
                    value={values.confirmPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // This works fine it seems and eslint complains about the commas
                    // eslint-disable-next-line no-sequences
                    helperText={errors.cpassword, errors.matchingPassword}
                    // eslint-disable-next-line no-sequences
                    error={!!errors.cpassword, !!errors.matchingPassword} />

                <br />
                <div className={classes.submitField}>
                    <Typography className={classes.signature}>
                        {values.username}
                    </Typography>
                    <Button type='submit'> Join Namespace </Button>
                </div>
            </form>
        </div >
    );
}

export default Signup;


