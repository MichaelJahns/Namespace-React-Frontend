import React from "react";
import LandingView from './views/LandingView';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Dashboard from '../../components/Dashboard';
import { useAuth } from '../useAuth';

const theme = createMuiTheme({
    palette: {
        component: {
            light: '#666666ff', //Formerly component-border
            main: '#282c34', //Formerly component-text
            mainText: '#ff9900ff', //Formerly component-bg
            contrastText: '#F2EFC4' //Formerly main-bg
        },
        main: {
            // light: '#0066ff',
            main: '#DBD2A7',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: '#ffcc00',
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

        fancyFont: 'Cinzel Decorative',
        h2: {
            fontFamily: 'Cinzel Decorative',
        }
    }

});

function View() {
    const { user } = useAuth();

    return (
        <ThemeProvider theme={theme} >
            <main className="content">
                {user ?
                    <Dashboard />
                    :
                    <LandingView />
                }
            </main>
        </ThemeProvider>
    );
}

export default View;


