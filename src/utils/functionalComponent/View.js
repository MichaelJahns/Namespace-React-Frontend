import React from "react";
import LandingView from './views/LandingView';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Dashboard from '../../components/Dashboard';
import { useAuth } from '../useAuth';

const theme = createMuiTheme({
    palette: {
        component: {
            light: '#666666ff',
            main: '#282c34',
            // dark: will be calculated from palette.primary.main,
            mainText: '#ff9900ff',
            contrastText: '#F2EFC4'
        },
        main: {
            // light: '#0066ff',
            main: '#282c34',
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


