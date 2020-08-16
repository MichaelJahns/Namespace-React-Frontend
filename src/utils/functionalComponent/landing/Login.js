import React from "react";

// MUI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import useFormValidation from "../../useFormValidation";

const INITIAL_STATE = {
    email: "tester@test.com",
    password: "qwerqwer"
};

function Login() {
    const theme = useTheme();

    const useStyles = makeStyles({
        root: {

        },
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
            maxWidth: '40vw'
        },
        title: {
            letterSpacing: 15,
            color: theme.palette.component.mainText,
            [theme.breakpoints.down('sm')]: {
                letterSpacing: 10,
                fontSize: '6.5vw',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '7.65vw',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '8vw',
            },
        },
        signature: {
            fontFamily: theme.typography.handFont,
            textShadow: 'none',
            color: theme.palette.main.contrastText,
            lineHeight: 2,
            fontSize: '1.5em',
            width: '30vw',
        },
        signatureLine: {
            color: theme.palette.component.main,
            fontSize: '2.0em'
        },
        tack: {
            [theme.breakpoints.up('md')]: {
                backgroundColor: theme.palette.component.light,
                boxShadow:
                    `-2.5px 4.5px 10px -2px ${theme.palette.component.dark},
                    inset -1px 2px 1px ${theme.palette.component.lighter}`,
                alignSelf: 'center',
                position: 'absolute',
                borderRadius: 9,
                width: 20,
                height: 20
            },
        },
        submit: {
            display: 'inline-block'
        }

    })

    const {
        handleLogin,
        handleChange,
        handleBlur,
        values,
        errors,
        serverError
        } = useFormValidation(INITIAL_STATE);

    const classes = useStyles();
    return (
        <div>
            <form className={classes.form}>
                <p className={classes.tack}> </p>
                <Typography variant="h2" className={classes.title}>
                    Login
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
                    name='password'
                    type="password"
                    label='Password'
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={errors.password}
                    error={!!errors.password}
                />
                <br />

                <p> Would be here. {serverError} </p>

                <Button
                    onClick={handleLogin}
                    className={classes.submit}>
                    Join Namespace
                </Button>

            <Link to="/signup" > 
                <span> 
                    Need an Account? Signup!
                </span>
            </Link>

            </form>
        </div >
    );
}   

export default Login;


