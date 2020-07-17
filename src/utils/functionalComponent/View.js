import React from "react";
import LandingView from './views/LandingView';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Dashboard from '../../components/Dashboard';

const theme = createMuiTheme({
    palette: {
        component: {
            lighter: '#B3B3B3',
            light: '#666666ff', //Formerly component-border
            main: '#282c34', //Formerly component-bg
            dark: '#575757',
            mainText: '#ff9900ff', //Formerly component-text
            contrastText: '#F2EFC4' //Formerly main-bg
        },
        main: {
            // light: '#0066ff',
            main: '#DBD2A7',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#551700',
        },
        secondary: {
            // light: '#0066ff',
            main: '#282c34',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 0,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    // TODO: Some forms need to be case sensitive and our fun fantasy font isnt, forms especially need to have a font
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            'Cinzel Decorative',
        ].join(','),

        fancyFont: 'Cinzel Decorative:700',
        handFont: 'Satisfy',
        h1: {
            fontFamily: 'Cinzel Decorative, cursive',
            fontWeight: 'bold',
            fontSize: '3em'
        },
        h2: {
            fontFamily: 'Cinzel Decorative, cursive',
            fontWeight: 'bold',
            fontSize: '4.75em'
        },
        h3: {
            fontSize: '4vw',
            backgroundColor: 'blue',
        },
        caption: {
            fontSize: "2.5em",
            fontFamily: 'Cinzel Decorative, cursive',
            fontWeight: 'normal',
        },
        input: {

        },
        button: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            // background: 'linear-gradient(45deg, #FE6B8B 30%, var(--component-text-color) 90%)',
            // background: 'linear-gradient(45deg, var(--component-text-color) 30%, #FF8E53 90%)',
        }
    }

});

function View() {

    return (
        <ThemeProvider theme={theme} >
            <main className="content">
                    {/* <Dashboard /> */}
                    
                    <LandingView />
                
            </main>
        </ThemeProvider>
    );
}

export default View;


