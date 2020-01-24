import React, { Component } from "react";
// import '../resources/css/footer.css';
import { Divider } from "@material-ui/core";
import { Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

export default function Footer() {
    const theme = useTheme();

    const useStyles = makeStyles({
        footer: {
            backgroundColor: theme.palette.component.main,
            color: theme.palette.component.contrastText,
            position: 'absolute',
            marginTop: 220,
            paddingLeft: 64,
            paddingTop: 30,
            paddingRight: 64,
            paddingBottom: 30
        },
        section: {
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            paddingBottom: 30,
            borderBottom: 'solid 1px ' + theme.palette.component.light,
            marginBottom: 30
        },
        subSection: {
            width: '20%',
            minWidth: 120
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'flex-end'
        }
    });
    const classes = useStyles();


    return (
        // TODO: transfer footer css rules into the makeStyles format
        <footer className={classes.footer}>
            {/* <footer className='footer'> */}
            <main>
                <section className={classes.section}>
                    <div className={classes.subSection}>
                        <Link to="/">
                            <h4> Discover Namespace </h4>
                        </Link>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac quam lacus. Donec consequat, orci quis tempor tincidunt, felis lacus interdum magna, sit amet bibendum metus lacus et arcu. </p>
                    </div>
                    <Divider orientation="vertical" />
                    <div className={classes.subSection}>
                        <Link to="/about">
                            <h4> Make Namespace Yours </h4>
                        </Link>
                        <p>Nulla tortor ex, sagittis ut mi ac, sollicitudin placerat velit. Mauris justo orci, sodales eu libero ut, porttitor rutrum sem.</p>
                    </div>
                    <Divider orientation="vertical" />
                    <div className={classes.subSection}>
                        <Link to="/signup">
                            <h4> Become a Member </h4>
                        </Link>
                        <p> Aenean posuere, neque quis imperdiet facilisis, est metus lobortis justo, id tempus nunc ex sit amet mi. Nam sagittis commodo blandit. Nulla iaculis sit amet orci.</p>
                    </div>
                </section>
                <nav className={classes.nav}>
                    <h3> Namespace </h3>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

                    <div>
                        <p> By Michael Jahns </p>
                        <a href="https://github.com/MichaelJahns"> Github </a>
                    </div>
                </nav>
            </main >
        </footer >

    );
}

